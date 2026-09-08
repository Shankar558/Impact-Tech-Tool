import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { StatisticsComponent } from '../../components/statistics/statistics.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { StatisticItem } from '../../models';

interface OrganizationRole {
  icon: string;
  role: string;
  description: string;
  level: number;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    StatisticsComponent,
    CTAComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  statistics: StatisticItem[] = [];
  values: Array<{ icon: string; title: string; description: string }> = [];

  organization: OrganizationRole[] = [
    { icon: 'account_balance', role: 'Proprietor', description: 'Strategic leadership and company direction', level: 1 },
    { icon: 'supervisor_account', role: 'Overall In-Charge', description: 'Coordination of all operations and processes', level: 2 },
    { icon: 'settings', role: 'Operation Head', description: 'Managing day-to-day manufacturing operations', level: 3 },
    { icon: 'marketing', role: 'Marketing, Purchase & Quality', description: 'Business development, procurement and quality assurance', level: 3 },
    { icon: 'admin_panel_settings', role: 'Admin & Accounts', description: 'Administrative and financial management', level: 3 },
    { icon: 'build', role: 'Tool Room Head', description: 'Leading the tool room and manufacturing team', level: 3 },
    { icon: 'code', role: 'Programmer', description: 'CNC/VMC programming and process development', level: 4 },
    { icon: 'architecture', role: 'Design Team', description: 'Engineering design and development', level: 4 },
    { icon: 'engineering', role: 'Operators', description: 'Skilled machine operators and technicians', level: 4 }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.statistics = this.dataService.getStatistics();
    this.values = [
      {
        icon: 'precision_manufacturing',
        title: 'Precision First',
        description: 'Every component we manufacture meets the highest standards of precision and accuracy.'
      },
      {
        icon: 'engineering',
        title: 'Innovation',
        description: 'We continuously innovate to provide better manufacturing solutions for our clients.'
      },
      {
        icon: 'verified_user',
        title: 'Integrity',
        description: 'We operate with complete transparency and ethical business practices.'
      },
      {
        icon: 'handshake',
        title: 'Partnership',
        description: 'We build long-term partnerships based on trust, quality, and reliability.'
      }
    ];
  }

  getLevels(): number[] {
    const levels = new Set<number>();
    this.organization.forEach(member => levels.add(member.level));
    return Array.from(levels).sort((a, b) => a - b);
  }

  getMembersByLevel(level: number): OrganizationRole[] {
    return this.organization.filter(member => member.level === level);
  }

  isLastLevel(level: number): boolean {
    const levels = this.getLevels();
    return level === levels[levels.length - 1];
  }
}
