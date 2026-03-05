import { ThemeToggleComponent, ToolbarComponent } from '@dissoares/commons-material';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home-header',
  imports: [ToolbarComponent, ThemeToggleComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss',
})
export class HomeHeaderComponent {
  @Input() public sidebarOpen: boolean = true;
  @Output() public menuClick = new EventEmitter<void>();

  public onMenuClick(): void {
    this.menuClick.emit();
  }
}