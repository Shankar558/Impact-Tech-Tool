import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Capabilities', route: '/capabilities' },
    { label: 'Projects', route: '/projects' },
    { label: 'Contact', route: '/contact' }
  ];

  services = [
    'Stamping Tools',
    'Jigs & Fixtures',
    'Checking Gauges',
    'Welding Fixtures',
    'Prototype Parts',
    'EDM Wire Cutting'
  ];

  contactInfo = {
    emails: [
      'impacttechtool@gmail.com',
      'ittdesignteam@gmail.com'
    ],
    phone: '+91-XXXXXXXXXX',
    address: 'India'
  };

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
