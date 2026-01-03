# Avatar

A circular avatar component for displaying user profile pictures with automatic fallback support. Built with Web Components and fully accessible.

## Installation

```bash
npx @capsuleui/core add Avatar
```

## Usage

### Basic Avatar

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="User avatar" />
    <capsule-avatar-fallback>CN</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img
    src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4"
    alt="User avatar"
  />
  <capsule-avatar-fallback>CN</capsule-avatar-fallback>
</capsule-avatar>
```

### Avatar with Fallback Only

When no image is provided or the image fails to load, the fallback is automatically displayed.

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <capsule-avatar-fallback>JD</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <capsule-avatar-fallback>JD</capsule-avatar-fallback>
</capsule-avatar>
```

### Avatar with Delayed Fallback

You can add a delay before showing the fallback when an image is loading.

<div style="margin: 1rem 0;">
  <capsule-avatar>
    <img src="https://invalid-url.com/image.png" alt="User" />
    <capsule-avatar-fallback delay-ms="300">AB</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img
    src="https://example.com/image.png"
    alt="User"
  />
  <capsule-avatar-fallback delay-ms="300">AB</capsule-avatar-fallback>
</capsule-avatar>
```

### Multiple Avatars

<div style="margin: 1rem 0; display: flex; gap: 0.5rem; align-items: center;">
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="User 1" />
    <capsule-avatar-fallback>U1</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar>
    <img src="https://avatars.githubusercontent.com/u/120379766?s=400&u=5f4d799592148719e2e0a3d7951be4b7920847b6&v=4" alt="User 2" />
    <capsule-avatar-fallback>U2</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar>
    <capsule-avatar-fallback>+3</capsule-avatar-fallback>
  </capsule-avatar>
</div>

```html
<capsule-avatar>
  <img src="..." alt="User 1" />
  <capsule-avatar-fallback>U1</capsule-avatar-fallback>
</capsule-avatar>
<capsule-avatar>
  <img src="..." alt="User 2" />
  <capsule-avatar-fallback>U2</capsule-avatar-fallback>
</capsule-avatar>
<capsule-avatar>
  <capsule-avatar-fallback>+3</capsule-avatar-fallback>
</capsule-avatar>
```

## API Reference

### Components

#### `capsule-avatar`

The root container component for the avatar.

**Attributes:** None

#### `capsule-avatar-fallback`

Displays fallback content when the image is not available or fails to load.

**Attributes:**

| Attribute   | Type   | Default | Description                                                      |
| ----------- | ------ | ------- | ---------------------------------------------------------------- |
| `delay-ms` | number | `0`     | Delay in milliseconds before showing the fallback (useful for slow connections) |

**Behavior:**
- Automatically shown when no `<img>` is provided
- Automatically shown when image fails to load
- Automatically hidden when image loads successfully

**Note:** Use a standard `<img>` tag inside `capsule-avatar` to display the avatar image. The component will automatically handle fallback visibility based on image load status.

## Styling

The avatar component uses CSS custom properties for theming. You can customize the appearance:

```css
capsule-avatar {
  width: 2.5rem; /* Default size */
  height: 2.5rem;
  border-radius: 50%; /* Circular */
}

capsule-avatar-fallback {
  background-color: var(--muted);
  color: var(--muted-foreground);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
}
```

## Accessibility

- The avatar container has `role="img"` for screen readers
- The image includes proper `alt` text support
- Fallback content is accessible to screen readers

## Examples

### User Profile

```html
<div style="display: flex; align-items: center; gap: 1rem;">
  <capsule-avatar>
    <img
      src="/user-avatar.jpg"
      alt="John Doe"
    />
    <capsule-avatar-fallback>JD</capsule-avatar-fallback>
  </capsule-avatar>
  <div>
    <h3>John Doe</h3>
    <p>Software Developer</p>
  </div>
</div>
```

### Avatar Group

```html
<div style="display: flex; gap: -0.5rem;">
  <capsule-avatar style="border: 2px solid white; margin-right: -0.5rem;">
    <img src="/user1.jpg" alt="User 1" />
    <capsule-avatar-fallback>U1</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar style="border: 2px solid white; margin-right: -0.5rem;">
    <img src="/user2.jpg" alt="User 2" />
    <capsule-avatar-fallback>U2</capsule-avatar-fallback>
  </capsule-avatar>
  <capsule-avatar style="border: 2px solid white;">
    <capsule-avatar-fallback>+5</capsule-avatar-fallback>
  </capsule-avatar>
</div>
```

