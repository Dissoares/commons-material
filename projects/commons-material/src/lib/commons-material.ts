import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cm-library-ready',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `<p>commons-material pronto</p>`,
  styles: ``,
})
export class CommonsMaterial {}
