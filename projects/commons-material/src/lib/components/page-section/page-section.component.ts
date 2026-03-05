import { ChangeDetectionStrategy, Component, type InputSignal, input } from '@angular/core';

@Component({
  selector: 'cm-secao-pagina, cm-page-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './page-section.component.html',
  styleUrl: './page-section.component.scss',
})
export class PageSectionComponent {
  readonly titulo: InputSignal<string> = input.required<string>();
  readonly subtitulo: InputSignal<string> = input<string>('');
}
