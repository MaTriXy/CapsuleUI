import { LitElement, html } from '../../lit';

class CapsuleAvatarFallback extends LitElement {
  static properties = {
    delayMs: { type: Number, reflect: true, attribute: 'delay-ms' },
  };

  constructor() {
    super();
    this.delayMs = 0;
    this._timeoutId = null;
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this._checkImageStatus();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timeoutId) {
      clearTimeout(this._timeoutId);
    }
  }

  _checkImageStatus() {
    const avatar = this.closest('capsule-avatar');
    if (!avatar) {
      this.style.display = 'flex';
      return;
    }

    const image = avatar.querySelector('img');
    
    if (!image || !image.src) {
      // Если нет изображения, показываем fallback сразу
      this.style.display = 'flex';
      return;
    }

    // Проверяем статус изображения с задержкой
    if (this.delayMs > 0) {
      this._timeoutId = setTimeout(() => {
        this._updateVisibility(image);
      }, this.delayMs);
    } else {
      this._updateVisibility(image);
    }

    // Слушаем события загрузки изображения
    image.addEventListener('load', () => {
      this._updateVisibility(image);
    });
    image.addEventListener('error', () => {
      this._updateVisibility(image);
    });
  }

  _updateVisibility(image) {
    if (!image || !image.src || !image.complete || image.naturalHeight === 0) {
      this.style.display = 'flex';
    } else {
      this.style.display = 'none';
    }
  }

  render() {
    return html``;
  }
}

customElements.define('capsule-avatar-fallback', CapsuleAvatarFallback);

