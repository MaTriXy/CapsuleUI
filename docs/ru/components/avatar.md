# Avatar

Круглый компонент аватара для отображения фотографий профилей пользователей с автоматической поддержкой резервного контента. Построен на Web Components с полной поддержкой доступности.

## Установка

```bash
npx @capsuleui/core add Avatar
```

## Использование

### Базовый Avatar

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="Аватар пользователя" />
    <capsule-avatar-fallback>ИП</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img
    src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4"
    alt="Аватар пользователя"
  />
  <capsule-avatar-fallback>ИП</capsule-avatar-fallback>
</capsule-avatar>
```

### Avatar только с Fallback

Когда изображение не предоставлено или не удалось загрузить, автоматически отображается резервный контент.

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <capsule-avatar-fallback>ИД</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <capsule-avatar-fallback>ИД</capsule-avatar-fallback>
</capsule-avatar>
```

### Avatar с задержкой Fallback

Вы можете добавить задержку перед показом резервного контента, пока изображение загружается.

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <img src="https://invalid-url.com/image.png" alt="Пользователь" />
    <capsule-avatar-fallback delay-ms="300">АБ</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img
    src="https://example.com/image.png"
    alt="Пользователь"
  />
  <capsule-avatar-fallback delay-ms="300">АБ</capsule-avatar-fallback>
</capsule-avatar>
```

### Несколько Avatars

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; align-items: center;">
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="Пользователь 1" />
    <capsule-avatar-fallback>П1</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="Пользователь 2" />
    <capsule-avatar-fallback>П2</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar>
    <capsule-avatar-fallback>+3</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img src="..." alt="Пользователь 1" />
  <capsule-avatar-fallback>П1</capsule-avatar-fallback>
</capsule-avatar>
<capsule-avatar>
  <img src="..." alt="Пользователь 2" />
  <capsule-avatar-fallback>П2</capsule-avatar-fallback>
</capsule-avatar>
<capsule-avatar>
  <capsule-avatar-fallback>+3</capsule-avatar-fallback>
</capsule-avatar>
```

## Справочник API

### Компоненты

#### `capsule-avatar`

Корневой контейнер компонента аватара.

**Атрибуты:** Отсутствуют

#### `capsule-avatar-fallback`

Отображает резервный контент, когда изображение недоступно или не удалось загрузить.

**Атрибуты:**

| Атрибут    | Тип    | По умолчанию | Описание                                                          |
| --------- | ------ | ------------ | ----------------------------------------------------------------- |
| `delay-ms` | number | `0`          | Задержка в миллисекундах перед показом резервного контента (полезно для медленных соединений) |

**Поведение:**
- Автоматически показывается, когда `<img>` не предоставлено
- Автоматически показывается, когда изображение не удалось загрузить
- Автоматически скрывается, когда изображение успешно загружено

**Примечание:** Используйте стандартный тег `<img>` внутри `capsule-avatar` для отображения изображения аватара. Компонент автоматически управляет видимостью резервного контента в зависимости от статуса загрузки изображения.

## Стилизация

Компонент аватара использует CSS-переменные для темизации. Вы можете настроить внешний вид:

```css
capsule-avatar {
  width: 2.5rem; /* Размер по умолчанию */
  height: 2.5rem;
  border-radius: 50%; /* Круглый */
}

capsule-avatar-fallback {
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
```

## Доступность

- Контейнер аватара имеет `role="img"` для screen readers
- Изображение включает поддержку правильного текста `alt`
- Резервный контент доступен для screen readers

## Примеры

### Профиль пользователя

```html
<div style="display: flex; align-items: center; gap: 1rem;">
  <capsule-avatar>
    <img
      src="/user-avatar.jpg"
      alt="Иван Иванов"
    />
    <capsule-avatar-fallback>ИИ</capsule-avatar-fallback>
  </capsule-avatar>
  <div>
    <h3>Иван Иванов</h3>
    <p>Разработчик ПО</p>
  </div>
</div>
```

### Группа Avatars

```html
<div style="display: flex; gap: -0.5rem;">
  <capsule-avatar style="border: 2px solid white; margin-right: -0.5rem;">
    <img src="/user1.jpg" alt="Пользователь 1" />
    <capsule-avatar-fallback>П1</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar style="border: 2px solid white; margin-right: -0.5rem;">
    <img src="/user2.jpg" alt="Пользователь 2" />
    <capsule-avatar-fallback>П2</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar style="border: 2px solid white;">
    <capsule-avatar-fallback>+5</capsule-avatar-fallback>
  </capsule-avatar>
</div>
```

