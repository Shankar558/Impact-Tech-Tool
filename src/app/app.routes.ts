import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Impact Tech Tool | Precision Engineering & Manufacturing Solutions'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Impact Tech Tool'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Our Services | Impact Tech Tool'
  },
  {
    path: 'capabilities',
    loadComponent: () => import('./pages/capabilities/capabilities.component').then(m => m.CapabilitiesComponent),
    title: 'Capabilities | Impact Tech Tool'
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Projects | Impact Tech Tool'
  },
  {
    path: 'infrastructure',
    loadComponent: () => import('./pages/infrastructure/infrastructure.component').then(m => m.InfrastructureComponent),
    title: 'Infrastructure | Impact Tech Tool'
  },
  {
    path: 'quality',
    loadComponent: () => import('./pages/quality/quality.component').then(m => m.QualityComponent),
    title: 'Quality | Impact Tech Tool'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Impact Tech Tool'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
