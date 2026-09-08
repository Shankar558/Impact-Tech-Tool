import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { Service } from '../../models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    ServiceCardComponent,
    CTAComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];

  processSteps = [
    {
      icon: 'architecture',
      title: 'Design & Engineering',
      description: 'Understanding your requirements and creating detailed engineering designs and specifications.'
    },
    {
      icon: 'precision_manufacturing',
      title: 'Manufacturing',
      description: 'Precision manufacturing using advanced CNC/VMC machines and skilled craftsmanship.'
    },
    {
      icon: 'verified',
      title: 'Quality Inspection',
      description: 'Rigorous quality inspection and dimensional verification at every stage of production.'
    },
    {
      icon: 'local_shipping',
      title: 'Delivery & Support',
      description: 'Timely delivery with ongoing technical support to ensure complete satisfaction.'
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.services = this.dataService.getServices();
  }
}
