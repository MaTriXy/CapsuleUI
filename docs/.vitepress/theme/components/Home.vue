<script setup lang="ts">
import { useData } from 'vitepress'

const { site } = useData()

// Список компонентов с их описаниями
const components = [
  { name: 'Accordion', link: '/components/accordion', description: 'Collapsible content sections' },
  { name: 'Alert', link: '/components/alert', description: 'Display alert messages' },
  { name: 'AspectRatio', link: '/components/aspect-ratio', description: 'Maintain aspect ratios' },
  { name: 'Avatar', link: '/components/avatar', description: 'User avatar with fallback', badge: 'New' },
  { name: 'Badge', link: '/components/badge', description: 'Badge component', badge: 'Updated' },
  { name: 'Breadcrumb', link: '/components/breadcrumb', description: 'Navigation breadcrumbs' },
  { name: 'Button', link: '/components/button', description: 'Button component' },
  { name: 'Button Group', link: '/components/button-group', description: 'Group of buttons' },
  { name: 'Calendar', link: '/components/calendar', description: 'Date picker calendar' },
  { name: 'Comparison', link: '/components/comparison', description: 'Before/after comparison' },
  { name: 'Divider', link: '/components/divider', description: 'Visual divider' },
  { name: 'Icon', link: '/components/icon', description: 'Icon component', badge: 'New' },
  { name: 'Input', link: '/components/input', description: 'Input field' },
  { name: 'Kbd', link: '/components/kbd', description: 'Keyboard key display' },
  { name: 'Pagination', link: '/components/pagination', description: 'Page navigation' },
  { name: 'Progress', link: '/components/progress', description: 'Progress indicator' },
  { name: 'Range', link: '/components/range', description: 'Range slider' },
  { name: 'RadioGroup', link: '/components/radio-group', description: 'Radio button group', badge: 'New' },
  { name: 'Rating', link: '/components/rating', description: 'Star rating' },
  { name: 'Skeleton', link: '/components/skeleton', description: 'Loading placeholder' },
  { name: 'Stepper', link: '/components/stepper', description: 'Step navigation' },
  { name: 'Switch', link: '/components/switch', description: 'Toggle switch' },
  { name: 'Tabs', link: '/components/tabs', description: 'Tab navigation' },
  { name: 'Textarea', link: '/components/textarea', description: 'Text area input' },
  { name: 'Tooltip', link: '/components/tooltip', description: 'Tooltip component' },
  { name: 'Tour', link: '/components/tour', description: 'Guided tour' },
]
</script>

<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          {{ site.title }}
        </h1>
        <p class="hero-description">
          Web components you truly control. Full source access, complete customization freedom.
        </p>
        <div class="hero-actions">
          <a href="/getting-started" class="btn-primary">
            Get started
          </a>
          <a href="/components/" class="btn-secondary">
            Explore components
            <svg class="icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Components Grid Section -->
    <section class="components-section">
      <div class="components-header">
        <h2 class="components-title">
          Components
        </h2>
        <p class="components-description">
          Browse all available components. Each component is fully customizable and accessible.
        </p>
      </div>

      <div class="components-grid">
        <a
          v-for="component in components"
          :key="component.name"
          :href="component.link"
          class="component-card"
        >
          <div class="card-header">
            <h3 class="card-title">
              {{ component.name }}
            </h3>
            <span
              v-if="component.badge"
              :class="component.badge === 'New' ? 'vp-badge-new' : 'vp-badge-updated'"
            >
              {{ component.badge }}
            </span>
          </div>
          <p class="card-description">
            {{ component.description }}
          </p>
          <div class="card-footer">
            <span>View component</span>
            <svg class="icon-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🧩</div>
          <h3 class="feature-title">VSCode Autocomplete</h3>
          <p class="feature-description">
            VSCode instantly suggests components and attributes with built-in HTML Data.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3 class="feature-title">No Build Steps</h3>
          <p class="feature-description">
            Works directly in browser. Bundle only if you want to optimize.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🎨</div>
          <h3 class="feature-title">CSS Themes</h3>
          <p class="feature-description">
            Light/dark themes via CSS color-scheme. Customize with CSS variables.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">♿</div>
          <h3 class="feature-title">Accessibility</h3>
          <p class="feature-description">
            ARIA, keyboard navigation, and screen readers support out-of-the-box.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
  background: var(--vp-c-bg);
}

.hero-section {
  padding: 3rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 6rem 1rem;
  }
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0;
}

@media (min-width: 640px) {
  .hero-title {
    font-size: 3.75rem;
  }
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }
}

.hero-description {
  max-width: 720px;
  font-size: 1.125rem;
  color: var(--vp-c-text-2);
  margin: 0;
}

@media (min-width: 768px) {
  .hero-description {
    font-size: 1.25rem;
  }
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  background: var(--vp-c-brand);
  color: var(--vp-c-brand-foreground);
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  opacity: 0.9;
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.icon-arrow {
  width: 1rem;
  height: 1rem;
}

.components-section {
  padding: 3rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .components-section {
    padding: 6rem 1rem;
  }
}

.components-header {
  margin-bottom: 2rem;
}

.components-title {
  font-size: 1.875rem;
  font-weight: bold;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

@media (min-width: 640px) {
  .components-title {
    font-size: 2.25rem;
  }
}

.components-description {
  color: var(--vp-c-text-2);
  margin: 0;
}

.components-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .components-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .components-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1280px) {
  .components-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.component-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: all 0.2s;
}

.component-card:hover {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-brand);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  transition: color 0.2s;
}

.component-card:hover .card-title {
  color: var(--vp-c-brand);
}

.card-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
  flex: 1;
  transition: color 0.2s;
}

.component-card:hover .card-description {
  color: var(--vp-c-text-1);
}

.card-footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
}

.component-card:hover .card-footer {
  color: var(--vp-c-brand);
}

.component-card:hover .card-footer .icon-arrow {
  transform: translateX(0.25rem);
}

.features-section {
  padding: 3rem 1rem;
  max-width: 1280px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .features-section {
    padding: 6rem 1rem;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.feature-card {
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.feature-icon {
  font-size: 1.875rem;
  margin-bottom: 0.75rem;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.feature-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0;
}
</style>
