import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { StatisticItem } from '../../models';

interface QualityFocus {
  icon: string;
  title: string;
  description: string;
}

interface QualityProcess {
  step: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-quality',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    StatisticsComponent,
    CTAComponent
  ],
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent implements OnInit {
  statistics: StatisticItem[] = [];

  qualityFocus: QualityFocus[] = [
    {
      icon: 'precision_manufacturing',
      title: 'Precision Manufacturing',
      description: 'Every component is manufactured to the highest precision standards, with accuracy maintained between 5µm and 10µm.'
    },
    {
      icon: 'straighten',
      title: 'Dimensional Accuracy',
      description: 'Rigorous dimensional verification ensures all components meet exact specifications and tolerances.'
    },
    {
      icon: 'settings_suggest',
      title: 'Process Control',
      description: 'Structured process control at every stage ensures consistent, repeatable manufacturing quality.'
    },
    {
      icon: 'verified',
      title: 'Inspection',
      description: 'Comprehensive inspection procedures verify quality at incoming, in-process, and final stages.'
    },
    {
      icon: 'checklist',
      title: 'Customer Requirements',
      description: 'We meticulously document and meet all customer requirements, including specialized tolerances.'
    },
    {
      icon: 'trending_up',
      title: 'Continuous Improvement',
      description: 'Ongoing process improvement initiatives enhance quality, efficiency, and reliability over time.'
    }
  ];

  qualityProcess: QualityProcess[] = [
    { step: '01', title: 'Incoming Inspection', description: 'Verification of all incoming materials against specifications.' },
    { step: '02', title: 'In-Process Quality', description: 'Continuous quality checks during the manufacturing process.' },
    { step: '03', title: 'Final Inspection', description: 'Comprehensive final inspection before delivery.' },
    { step: '04', title: 'Documentation', description: 'Complete quality documentation and traceability records.' }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.statistics = this.dataService.getStatistics();
  }
}
