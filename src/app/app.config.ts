import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),      // ✅ relie les routes à mon application
    provideClientHydration(),   // ✅ gère le rendu (optimisation navigateur)
    provideHttpClient()         // ✅ active les requêtes HTTP (service produits)
  ]
};
