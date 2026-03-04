import {
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
  ApplicationConfig,
} from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { proverCommonsMaterial } from '@dissoares/commons-material';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    ...proverCommonsMaterial(),
  ],
};
