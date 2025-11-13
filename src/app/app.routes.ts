import { Routes } from '@angular/router';

// Standalone components (default exports)
import HomeComponent from './pages/home/home';
import AboutComponent from './pages/about/about';
import ProductComponent from './pages/product/product';
import ContactComponent from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: HomeComponent },               // Accueil
  { path: 'about', component: AboutComponent },         // À propos
  { path: 'contact', component: ContactComponent },     // Contact
  { path: 'product/:id', component: ProductComponent }, // Fiche produit
  { path: '**', redirectTo: '' }                        // Redirection
];

