import { PageSectionComponent, ThemeToggleComponent } from '@dissoares/commons-material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-content',
  imports: [PageSectionComponent, ThemeToggleComponent],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss',
})
export class HomeContentComponent {}
