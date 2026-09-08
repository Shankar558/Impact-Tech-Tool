import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CapabilityCardComponent } from '../../components/capability-card/capability-card.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { Capability, Machine } from '../../models';

@Component({
  selector: 'app-capabilities',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    CapabilityCardComponent,
    StatisticsComponent,
    CTAComponent
  ],
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit {
  capabilities: Capability[] = [];
  machines: Machine[] = [];

  engineeringScope = [
    { icon: 'architecture', title: 'Design', description: 'Engineering design and development' },
    { icon: 'precision_manufacturing', title: 'Manufacturing', description: 'Precision manufacturing processes' },
    { icon: 'handyman', title: 'Assembly', description: 'Component and product assembly' },
    { icon: 'science', title: 'Testing', description: 'Functional and performance testing' },
    { icon: 'verified', title: 'Quality Inspection', description: 'Comprehensive quality control' }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.capabilities = this.dataService.getCapabilities();
    this.machines = this.dataService.getVMCMachines();
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
