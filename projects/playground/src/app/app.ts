import { PageSectionComponent, ToolbarComponent } from '@dissoares/commons-material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [PageSectionComponent, ToolbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
