import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionHeaderComponent } from '../../components/section-header/section-header.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { CTAComponent } from '../../components/cta/cta.component';
import { DataService } from '../../services';
import { Project } from '../../models';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeroComponent,
    SectionHeaderComponent,
    ProjectCardComponent,
    CTAComponent
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: string[] = [];
  activeCategory: string = 'All';
  selectedProject: Project | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.allProjects = this.dataService.getProjects();
    this.filteredProjects = this.allProjects;
    this.categories = ['All', ...Array.from(new Set(this.allProjects.map(p => p.category)))];
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    this.filteredProjects = category === 'All'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === category);
  }

  openProjectDetails(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }

  onViewDetails(project: Project): void {
    this.openProjectDetails(project);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/images/placeholder.svg';
  }
}
