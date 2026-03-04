import { ChangeDetectionStrategy, Component, type InputSignal, input } from '@angular/core';

@Component({
  selector: 'cm-page-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cm-page-section">
      <header class="cm-page-section__header">
        <h2 class="cm-page-section__title">{{ titulo() }}</h2>
        @if (subtitulo()) {
          <p class="cm-page-section__subtitle">{{ subtitulo() }}</p>
        }
      </header>

      <div class="cm-page-section__content">
        <ng-content />
      </div>
    </section>
  `,
  styles: `
    :host {
      display: block;
    }

    .cm-page-section {
      display: grid;
      gap: var(--cm-space-4, 1rem);
      padding: var(--cm-space-5, 1.25rem);
      background: var(--cm-surface, #fff);
      border-radius: var(--cm-radius-md, 0.75rem);
      border: 1px solid var(--cm-outline-variant, #d9d9d9);
    }

    .cm-page-section__header {
      display: grid;
      gap: var(--cm-space-2, 0.5rem);
    }

    .cm-page-section__title {
      margin: 0;
      font: var(--cm-typescale-title-medium, 600 1.125rem/1.5rem Roboto, sans-serif);
      color: var(--cm-on-surface, #1a1b1f);
    }

    .cm-page-section__subtitle {
      margin: 0;
      font: var(--cm-typescale-body-medium, 400 0.875rem/1.25rem Roboto, sans-serif);
      color: var(--cm-on-surface-variant, #5a5e66);
    }
  `,
})
export class PageSectionComponent {
  readonly titulo: InputSignal<string> = input.required<string>();
  readonly subtitulo: InputSignal<string> = input<string>('');
}
