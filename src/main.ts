import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
 import { appConfig } from './app/app.config';
 
 registerLocaleData(en);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
bootstrapApplication(App, {
  providers: [
    provideAnimations(),  
    provideHttpClient(),
    { provide: NZ_I18N, useValue: en_US },
  ],
}).catch((err) => console.error(err));
