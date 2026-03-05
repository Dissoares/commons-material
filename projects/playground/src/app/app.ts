import {
  PageSectionComponent,
  ThemeToggleComponent,
  ToolbarComponent,
} from '@dissoares/commons-material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [PageSectionComponent, ToolbarComponent, ThemeToggleComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {}
