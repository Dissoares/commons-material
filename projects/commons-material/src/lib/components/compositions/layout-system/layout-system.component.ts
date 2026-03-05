import { Component, Input } from '@angular/core';

@Component({
  selector: 'cm-layout-sistema, cm-system-layout',
  templateUrl: './layout-system.component.html',
  styleUrl: './layout-system.component.scss',
})
export class LayoutSystemComponent {
  @Input() sidebarOpen = true;
  @Input() sidebarId = 'cm-sidebar-principal';
  @Input() sidebarAriaLabel = 'Navegacao principal';
}
