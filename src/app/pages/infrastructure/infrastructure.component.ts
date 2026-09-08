import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { Machine } from '../../models';

interface InfrastructureArea {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    SectionHeaderComponent,
    CTAComponent
  ],
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {
  machines: Machine[] = [];

  areas: InfrastructureArea[] = [
    {
      icon: 'build',
      title: 'Tool Room',
      description: 'Complete tool room facility equipped for die and tool manufacturing with precision equipment and skilled craftsmen.',
      features: ['Precision Tooling', 'Die Manufacturing', 'Surface Grinding', 'Tool Assembly']
    },
    {
      icon: 'precision_manufacturing',
      title: 'VMC Machines',
      description: 'State-of-the-art Vertical Machining Centers for high-precision component manufacturing.',
      features: ['High-Speed Machining', 'Multi-Axis Capability', 'CNC Programming', 'Complex Geometries']
    },
    {
      icon: 'architecture',
      title: 'Design Team',
      description: 'Experienced engineering design team equipped with advanced CAD/CAM software for product and tooling design.',
      features: ['3D Modeling', 'CAD/CAM Software', 'Design Analysis', 'Technical Documentation']
    },
    {
      icon: 'verified',
      title: 'Quality Inspection',
      description: 'Dedicated quality inspection area with precision measurement equipment for dimensional verification.',
      features: ['Precision Measurement', 'Dimensional Inspection', 'Quality Records', 'Traceability']
    },
    {
      icon: 'handyman',
      title: 'Assembly Area',
      description: 'Dedicated assembly area for fixtures, tools, and component assemblies with proper workspace.',
      features: ['Fixture Assembly', 'Tool Assembly', 'Final Assembly', 'Testing']
    },
    {
      icon: 'settings',
      title: 'Manufacturing Equipment',
      description: 'Comprehensive range of manufacturing equipment for all types of precision machining operations.',
      features: ['CNC Machines', 'EDM Machines', 'Grinding Machines', 'Conventional Machines']
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.machines = this.dataService.getVMCMachines();
  }

  getObjectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }
}
