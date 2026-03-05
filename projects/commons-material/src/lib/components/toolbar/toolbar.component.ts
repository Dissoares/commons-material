import { ChangeDetectionStrategy, Component, type InputSignal, input } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'cm-barra-ferramentas, cm-toolbar',
  imports: [MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  readonly titulo: InputSignal<string> = input<string>('');
  readonly subtitulo: InputSignal<string> = input<string>('');
  readonly densa: InputSignal<boolean> = input<boolean>(false);
}
