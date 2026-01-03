import { LitElement, html } from '../../lit';

class CapsuleAvatar extends LitElement {
  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'img');
  }

  render() {
    return html``;
  }
}

customElements.define('capsule-avatar', CapsuleAvatar);

