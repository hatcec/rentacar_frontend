import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch  } from '@angular/common/http';
import { provideApiServices } from './shared/services/api/providers/api-services-provider';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideHttpClient(withFetch()), 
    provideApiServices(), provideAnimationsAsync(), provideAnimationsAsync()],
};
