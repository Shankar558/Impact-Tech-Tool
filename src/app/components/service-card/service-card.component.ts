import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Service } from '../../models';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;
  @Input() showCapabilities: boolean = false;
  @Input() showIndustries: boolean = false;
  @Output() learnMore = new EventEmitter<string>();

  onLearnMore(): void {
    this.learnMore.emit(this.service.id);
  }
}
