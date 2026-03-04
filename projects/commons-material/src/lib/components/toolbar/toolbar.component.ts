import { ChangeDetectionStrategy, Component, type InputSignal, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cm-toolbar',
  imports: [MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-toolbar class="cm-toolbar" [class.cm-toolbar--densa]="densa()">
      <div class="cm-toolbar__slot cm-toolbar__slot--inicio">
        <ng-content select="[cmToolbarInicio], [slot='inicio']" />
      </div>

      <div class="cm-toolbar__slot cm-toolbar__slot--centro">
        @if (titulo() || subtitulo()) {
          <div class="cm-toolbar__titulos">
            @if (titulo()) {
              <span class="cm-toolbar__titulo">{{ titulo() }}</span>
            }
            @if (subtitulo()) {
              <small class="cm-toolbar__subtitulo">{{ subtitulo() }}</small>
            }
          </div>
        } @else {
          <ng-content select="[cmToolbarCentro], [slot='centro']" />
        }
      </div>

      <div class="cm-toolbar__slot cm-toolbar__slot--fim">
        <ng-content select="[cmToolbarFim], [slot='fim']" />
      </div>
    </mat-toolbar>
  `,
  styles: `
    :host {
      display: block;
    }

    .cm-toolbar {
      min-height: 4rem;
      padding-inline: var(--cm-space-5, 1.25rem);
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      gap: var(--cm-space-3, 0.75rem);
      background: var(--cm-surface, #fff);
      color: var(--cm-on-surface, #1a1b1f);
      border-bottom: 1px solid var(--cm-outline-variant, #d9d9d9);
    }

    .cm-toolbar--densa {
      min-height: 3.5rem;
    }

    .cm-toolbar__slot {
      min-width: 0;
      display: flex;
      align-items: center;
      gap: var(--cm-space-2, 0.5rem);
    }

    .cm-toolbar__slot--inicio {
      justify-content: flex-start;
    }

    .cm-toolbar__slot--centro {
      justify-content: center;
      text-align: center;
    }

    .cm-toolbar__slot--fim {
      justify-content: flex-end;
    }

    .cm-toolbar__titulos {
      display: grid;
      gap: 0.125rem;
      line-height: 1;
    }

    .cm-toolbar__titulo {
      font: var(--cm-typescale-title-medium, 600 1rem/1.25rem Roboto, sans-serif);
      color: var(--cm-on-surface, #1a1b1f);
      white-space: nowrap;
    }

    .cm-toolbar__subtitulo {
      font: var(--cm-typescale-body-small, 400 0.75rem/1rem Roboto, sans-serif);
      color: var(--cm-on-surface-variant, #5a5e66);
      white-space: nowrap;
    }

    @media (max-width: 599px) {
      .cm-toolbar {
        grid-template-columns: auto 1fr auto;
        min-height: 3.5rem;
        padding-inline: var(--cm-space-4, 1rem);
      }

      .cm-toolbar__slot--centro {
        justify-content: flex-start;
        text-align: left;
      }
    }
  `,
})
export class ToolbarComponent {
  readonly titulo: InputSignal<string> = input<string>('');
  readonly subtitulo: InputSignal<string> = input<string>('');
  readonly densa: InputSignal<boolean> = input<boolean>(false);
}
