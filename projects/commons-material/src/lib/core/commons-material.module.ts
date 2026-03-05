import {
  ConfiguracaoCommonsMaterial,
  proverCommonsMaterial,
} from './providers/commons-material.providers';
import { PageSectionComponent } from '../components/page-section/page-section.component';
import { ThemeToggleComponent } from '../components/theme-toggle/theme-toggle.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { ModuleWithProviders, NgModule } from '@angular/core';

@NgModule({
  imports: [PageSectionComponent, ToolbarComponent, ThemeToggleComponent],
  exports: [PageSectionComponent, ToolbarComponent, ThemeToggleComponent],
})
export class CommonsMaterialModule {
  static forRoot(
    configuracao: ConfiguracaoCommonsMaterial = {},
  ): ModuleWithProviders<CommonsMaterialModule> {
    return {
      ngModule: CommonsMaterialModule,
      providers: [...proverCommonsMaterial(configuracao)],
    };
  }
}
