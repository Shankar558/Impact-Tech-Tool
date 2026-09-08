import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CTAComponent {
  @Input() title: string = 'Looking for a Reliable Manufacturing Partner?';
  @Input() description: string = 'Partner with Impact Tech Tool for precision engineering, tooling, fixtures, gauges, and prototype manufacturing solutions.';
  @Input() primaryButtonText: string = 'Request a Quote';
  @Input() secondaryButtonText: string = 'Contact Our Team';
  @Input() primaryButtonRoute: string = '/contact';
  @Input() secondaryButtonRoute: string = '/contact';
  @Input() variant: 'accent' | 'navy' = 'accent';
}
