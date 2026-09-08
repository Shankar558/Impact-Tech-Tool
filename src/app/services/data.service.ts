import { Injectable } from '@angular/core';
import { Service, Project, Capability, TeamMember, ContactPerson, Machine, StatisticItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getServices(): Service[] {
    return [
      {
        id: 'stamping-tools',
        title: 'Stamping Tool Design & Manufacturing',
        description: 'High-precision stamping tool development from design through manufacturing. We specialize in creating custom stamping dies and tools for automotive and non-automotive industries.',
        icon: 'precision_manufacturing',
        capabilities: ['Custom Die Design', 'Progressive Dies', 'Transfer Dies', 'Dies for Automotive Parts', 'Precision Stamping'],
        industries: ['Automotive', 'Electronics', 'Consumer Goods', 'Aerospace']
      },
      {
        id: 'jigs-fixtures',
        title: 'Jigs and Fixtures',
        description: 'Custom jigs and fixtures designed for manufacturing accuracy and repeatability. Our fixtures ensure consistent quality in production processes.',
        icon: 'settings',
        capabilities: ['Assembly Fixtures', 'Machining Fixtures', 'Inspection Fixtures', 'Welding Fixtures', 'Drilling Jigs'],
        industries: ['Automotive', 'Manufacturing', 'Metalworking']
      },
      {
        id: 'checking-gauges',
        title: 'Checking Gauges',
        description: 'Precision inspection and checking gauges for quality control. We develop custom gauges to ensure dimensional accuracy in production.',
        icon: 'rule',
        capabilities: ['Go/No-Go Gauges', 'Custom Inspection Gauges', 'CMM Fixtures', 'Quality Control Tools'],
        industries: ['Automotive', 'Aerospace', 'Precision Manufacturing']
      },
      {
        id: 'welding-fixtures',
        title: 'Welding Fixtures',
        description: 'Custom welding fixtures for industrial and automotive applications. Our fixtures ensure accurate positioning and consistent weld quality.',
        icon: 'electric_bolt',
        capabilities: ['Resistance Welding Fixtures', 'MIG/TIG Welding Fixtures', 'Robotic Welding Cells', 'Fixture Design for Automation'],
        industries: ['Automotive', 'Heavy Equipment', 'Metal Fabrication']
      },
      {
        id: 'edm-wire-cutting',
        title: 'EDM Wire Cutting',
        description: 'Precision wire-cut machining for complex components and tooling. Ideal for hardened materials and intricate geometries.',
        icon: 'content_cut',
        capabilities: ['Precision Wire EDM', 'Complex Geometries', 'Hardened Materials', 'Micro Machining', 'Prototyping'],
        industries: ['Aerospace', 'Medical Devices', 'Tool & Die', 'Electronics']
      },
      {
        id: 'prototype-parts',
        title: 'Prototype Development',
        description: 'Prototype parts and assemblies for product development and validation. We help you bring your designs from concept to reality.',
        icon: 'science',
        capabilities: ['Rapid Prototyping', 'Functional Prototypes', 'Small Batch Production', 'Design Validation'],
        industries: ['Automotive', 'Consumer Products', 'Industrial Equipment']
      },
      {
        id: 'spm-parts',
        title: 'SPM Parts',
        description: 'Manufacturing support for special purpose machine components. Custom parts designed for specific automation and production needs.',
        icon: 'settings_suggest',
        capabilities: ['Custom Components', 'Automation Parts', 'Special Purpose Machine Parts', 'Precision Machining'],
        industries: ['Manufacturing', 'Automation', 'Packaging']
      },
      {
        id: 'custom-engineering',
        title: 'Custom Engineering Solutions',
        description: 'End-to-end engineering solutions tailored to your specific requirements. From design to manufacturing, we provide comprehensive support.',
        icon: 'engineering',
        capabilities: ['Design Consulting', 'Process Optimization', 'Tooling Solutions', 'Manufacturing Support', 'Technical Support'],
        industries: ['All Industries']
      }
    ];
  }

  getProjects(): Project[] {
    return [
      {
        id: 'hdt-cummins-gauge',
        title: 'Checking Gauge – HDT Cummins',
        category: 'Checking Gauges',
        description: 'Precision checking gauge for Cummins engine components ensuring dimensional accuracy and quality control.',
        image: 'assets/images/projects/gauge-cummins.jpg',
        client: 'HDT Cummins',
        year: '2025'
      },
      {
        id: 'sreevari-fixtures',
        title: 'Welding Fixtures – Sreevari',
        category: 'Welding Fixtures',
        description: 'Custom welding fixtures designed for automotive components at Sreevari manufacturing facility.',
        image: 'assets/images/projects/welding-fixture.jpg',
        client: 'Sreevari',
        year: '2025'
      },
      {
        id: 'modine-assembly',
        title: 'Module Assembly Fixture – Modine Thermal System',
        category: 'Assembly Fixtures',
        description: 'Complex assembly fixture for thermal system modules ensuring precise positioning and assembly.',
        image: 'assets/images/projects/assembly-fixture.jpg',
        client: 'Modine Thermal System',
        year: '2024'
      },
      {
        id: 'bracket-assembly',
        title: 'Bracket Assembly Fixture',
        category: 'Assembly Fixtures',
        description: 'Multi-component bracket assembly fixture with integrated fasteners tray and trolley system.',
        image: 'assets/images/projects/bracket-fixture.jpg',
        year: '2024'
      },
      {
        id: 'crimping-machine',
        title: 'Crimping Machine Spare',
        category: 'Custom Manufacturing',
        description: 'Precision machined spare parts for industrial crimping machine applications.',
        image: 'assets/images/projects/crimping-part.jpg',
        year: '2024'
      },
      {
        id: 'uv-bracket',
        title: 'Ultra Violet Bracket Retap Fixture',
        category: 'Assembly Fixtures',
        description: 'Specialized retap fixture for ultra violet bracket components in automotive applications.',
        image: 'assets/images/projects/retap-fixture.jpg',
        year: '2024'
      }
    ];
  }

  getCapabilities(): Capability[] {
    return [
      {
        id: 'precision-design',
        title: 'Precision Tool Design',
        description: 'Advanced CAD/CAM design capabilities for complex tooling and fixture development.',
        icon: 'architecture',
        category: 'Design'
      },
      {
        id: 'cnc-vmc',
        title: 'CNC / VMC Machining',
        description: 'State-of-the-art CNC and VMC machines for precision component manufacturing.',
        icon: 'precision_manufacturing',
        category: 'Machining'
      },
      {
        id: 'tool-room',
        title: 'Tool Room Manufacturing',
        description: 'Complete tool room setup for die and tool manufacturing with precision equipment.',
        icon: 'build',
        category: 'Manufacturing'
      },
      {
        id: 'edm-cutting',
        title: 'EDM Wire Cutting',
        description: 'Advanced wire EDM machines for complex and precise component manufacturing.',
        icon: 'content_cut',
        category: 'Machining'
      },
      {
        id: 'fixture-assembly',
        title: 'Fixture Assembly',
        description: 'Expert assembly of custom fixtures for various industrial applications.',
        icon: 'settings',
        category: 'Assembly'
      },
      {
        id: 'gauge-development',
        title: 'Gauge Development',
        description: 'Precision gauge manufacturing for quality control and inspection.',
        icon: 'rule',
        category: 'Quality'
      },
      {
        id: 'prototype-dev',
        title: 'Prototype Development',
        description: 'Rapid prototype development for design validation and testing.',
        icon: 'science',
        category: 'Development'
      },
      {
        id: 'quality-inspection',
        title: 'Quality Inspection',
        description: 'Comprehensive quality inspection and control processes.',
        icon: 'verified',
        category: 'Quality'
      }
    ];
  }

  getTeamMembers(): TeamMember[] {
    return [
      { id: 'proprietor', name: 'Proprietor', role: 'Company Leadership', image: 'assets/images/team/proprietor.jpg' },
      { id: 'operations', name: 'Operation Head', role: 'Operations Management', image: 'assets/images/team/operations.jpg' },
      { id: 'toolroom', name: 'Tool Room Head', role: 'Manufacturing', image: 'assets/images/team/toolroom.jpg' },
      { id: 'design', name: 'Design Team Lead', role: 'Engineering Design', image: 'assets/images/team/design.jpg' }
    ];
  }

  getContactPersons(): ContactPerson[] {
    return [
      { id: 'sales', name: 'Sales Team', role: 'Sales & Business Development', email: 'impacttechtool@gmail.com', department: 'Sales' },
      { id: 'technical', name: 'Technical Team', role: 'Engineering & Design', email: 'ittdesignteam@gmail.com', department: 'Technical' },
      { id: 'general', name: 'Admin Team', role: 'Administration & Accounts', email: 'impacttechtool@gmail.com', department: 'Admin' }
    ];
  }

  getVMCMachines(): Machine[] {
    return [
      {
        id: 'vmc-1',
        name: 'VMC for Tool Room',
        type: 'Vertical Machining Center',
        specifications: {
          'Bed Size': '1200 x 850 x 600 mm',
          'Spindle Speed': '12000 RPM',
          'Accuracy': '±0.005 mm',
          'Tool Magazine': '24 Tools'
        },
        image: 'assets/images/machines/vmc-1.jpg'
      },
      {
        id: 'vmc-2',
        name: 'VMC for Tool Room',
        type: 'Vertical Machining Center',
        specifications: {
          'Bed Size': '850 x 500 x 400 mm',
          'Spindle Speed': '10000 RPM',
          'Accuracy': '±0.008 mm',
          'Tool Magazine': '20 Tools'
        },
        image: 'assets/images/machines/vmc-2.jpg'
      }
    ];
  }

  getStatistics(): StatisticItem[] {
    return [
      { value: 5, suffix: 'µm', label: 'Accuracy Range', icon: 'precision_manufacturing' },
      { value: 10, suffix: '+', label: 'Years Experience', icon: 'timeline' },
      { value: 500, suffix: '+', label: 'Projects Completed', icon: 'assignment_turned_in' },
      { value: 100, suffix: '%', label: 'Quality Focus', icon: 'verified' }
    ];
  }

  getServiceCategories(): string[] {
    return [
      'Stamping Tools',
      'Jigs & Fixtures',
      'Checking Gauges',
      'Welding Fixtures',
      'Prototype Parts',
      'EDM Wire Cutting',
      'Other'
    ];
  }

  getIndustries(): string[] {
    return [
      'Automotive',
      'Aerospace',
      'Electronics',
      'Consumer Goods',
      'Heavy Equipment',
      'Medical Devices',
      'Metal Fabrication',
      'Other'
    ];
  }
}
