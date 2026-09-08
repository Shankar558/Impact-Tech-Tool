import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Capability } from '../../models';

@Component({
  selector: 'app-capability-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './capability-card.component.html',
  styleUrls: ['./capability-card.component.scss']
})
export class CapabilityCardComponent {
  @Input() capability!: Capability;
  @Input() showCategory: boolean = true;
}
