import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title: string = 'Precision Engineering. Reliable Manufacturing.';
  @Input() subtitle: string = 'One Stop Solution for Design, Stamping Tooling, Fixtures, Gauges and Proto Build.';
  @Input() showCTA: boolean = true;
  @Input() backgroundImage: string = '';
  @Input() minHeight: string = '100vh';
  @Input() overlay: boolean = true;

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
