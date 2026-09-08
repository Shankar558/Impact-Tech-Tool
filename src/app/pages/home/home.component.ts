import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ServiceCardComponent } from '../../components/service-card/service-card.component';
import { CapabilityCardComponent } from '../../components/capability-card/capability-card.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { Service, Capability, Project, StatisticItem } from '../../models';
import { AnimationService } from '../../services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    SectionHeaderComponent,
    ServiceCardComponent,
    CapabilityCardComponent,
    ProjectCardComponent,
    StatisticsComponent,
    CTAComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  services: Service[] = [];
  capabilities: Capability[] = [];
  projects: Project[] = [];
  statistics: StatisticItem[] = [];

  whyChooseUs = [
    {
      icon: 'precision_manufacturing',
      title: 'High Precision Manufacturing',
      description: 'State-of-the-art precision manufacturing with accuracy from 5µm to 10µm.'
    },
    {
      icon: 'verified',
      title: 'Automotive Industry Experience',
      description: 'Proven track record in serving the automotive industry with reliable solutions.'
    },
    {
      icon: 'engineering',
      title: 'Custom Engineering Solutions',
      description: 'Tailored engineering solutions designed to meet your specific requirements.'
    },
    {
      icon: 'architecture',
      title: 'Design to Manufacturing Support',
      description: 'Complete support from initial design through final manufacturing and delivery.'
    },
    {
      icon: 'groups',
      title: 'Skilled Tool Room Team',
      description: 'Experienced and skilled team of tool makers and machinists.'
    },
    {
      icon: 'verified_user',
      title: 'Quality-Focused Process',
      description: 'Rigorous quality control at every stage of the manufacturing process.'
    },
    {
      icon: 'schedule',
      title: 'Reliable Delivery',
      description: 'On-time delivery commitment with consistent quality and precision.'
    },
    {
      icon: 'assessment',
      title: 'Accuracy from 5µm to 10µm',
      description: 'Dimensional accuracy maintained within 5 to 10 microns for all precision components.'
    }
  ];

  constructor(
    private dataService: DataService,
    private animationService: AnimationService
  ) {}

  ngOnInit(): void {
    this.services = this.dataService.getServices();
    this.capabilities = this.dataService.getCapabilities();
    this.projects = this.dataService.getProjects().slice(0, 6);
    this.statistics = this.dataService.getStatistics();
  }

  ngAfterViewInit(): void {
    this.animationService.observeElements();
  }
}
