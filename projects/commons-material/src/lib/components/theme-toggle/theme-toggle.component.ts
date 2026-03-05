import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'cm-theme-toggle',
  imports: [MatIconModule, MatButtonModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      mat-icon-button
      (click)="themeService.alternarTema()"
      [matTooltip]="tooltipText()"
      matTooltipPosition="below"
      aria-label="Alternar tema"
    >
      @if (themeService.isDarkMode()) {
        <mat-icon>light_mode</mat-icon>
      } @else {
        <mat-icon>dark_mode</mat-icon>
      }
    </button>
  `,
  styles: `
    :host {
      display: inline-block;
    }

    button {
      color: var(--cm-color-text-primary, currentColor);
    }

    button:hover {
      background-color: var(--cm-color-bg-surface, rgba(255, 255, 255, 0.1));
    }
  `,
})
export class ThemeToggleComponent {
  readonly themeService = inject(ThemeService);

  readonly tooltipText = computed(() => 
    this.themeService.isDarkMode() ? 'Mudar para tema claro' : 'Mudar para tema escuro'
  );
}
