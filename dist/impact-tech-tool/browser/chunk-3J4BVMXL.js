import {
  ProjectCardComponent
} from "./chunk-UMV5UMXS.js";
import {
  CTAComponent
} from "./chunk-PZXF7TXS.js";
import {
  HeroComponent,
  SectionHeaderComponent
} from "./chunk-QZN4ACQM.js";
import {
  CommonModule,
  DataService,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/pages/projects/projects.component.ts
function ProjectsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ProjectsComponent_button_5_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory === category_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2, " ");
  }
}
function ProjectsComponent_app_project_card_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "app-project-card", 12);
    \u0275\u0275listener("viewDetails", function ProjectsComponent_app_project_card_7_Template_app_project_card_viewDetails_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onViewDetails($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    \u0275\u0275property("project", project_r5);
  }
}
function ProjectsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No projects found in this category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Please select a different category to view projects.");
    \u0275\u0275elementEnd()();
  }
}
function ProjectsComponent_div_9_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.year);
  }
}
function ProjectsComponent_div_9_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "span", 14);
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "span", 32);
    \u0275\u0275text(5, "Client");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.client);
  }
}
function ProjectsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275listener("click", function ProjectsComponent_div_9_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeProjectDetails());
    });
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275listener("click", function ProjectsComponent_div_9_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 17);
    \u0275\u0275listener("click", function ProjectsComponent_div_9_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeProjectDetails());
    });
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 18)(6, "div", 19)(7, "img", 20);
    \u0275\u0275listener("error", function ProjectsComponent_div_9_Template_img_error_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onImageError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "div", 22)(10, "span", 23);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ProjectsComponent_div_9_span_12_Template, 2, 1, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2", 25);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ProjectsComponent_div_9_div_17_Template, 8, 1, "div", 27);
    \u0275\u0275elementStart(18, "div", 28)(19, "a", 29);
    \u0275\u0275listener("click", function ProjectsComponent_div_9_Template_a_click_19_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeProjectDetails());
    });
    \u0275\u0275elementStart(20, "span", 14);
    \u0275\u0275text(21, "request_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22, " Request Similar Quote ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r2.selectedProject.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedProject.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.category);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedProject.year);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedProject.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedProject.client);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.allProjects = [];
    this.filteredProjects = [];
    this.categories = [];
    this.activeCategory = "All";
    this.selectedProject = null;
  }
  ngOnInit() {
    this.allProjects = this.dataService.getProjects();
    this.filteredProjects = this.allProjects;
    this.categories = ["All", ...Array.from(new Set(this.allProjects.map((p) => p.category)))];
  }
  filterByCategory(category) {
    this.activeCategory = category;
    this.filteredProjects = category === "All" ? this.allProjects : this.allProjects.filter((p) => p.category === category);
  }
  openProjectDetails(project) {
    this.selectedProject = project;
    document.body.style.overflow = "hidden";
  }
  closeProjectDetails() {
    this.selectedProject = null;
    document.body.style.overflow = "auto";
  }
  onViewDetails(project) {
    this.openProjectDetails(project);
  }
  onImageError(event) {
    event.target.src = "assets/images/placeholder.svg";
  }
  static {
    this.\u0275fac = function ProjectsComponent_Factory(t) {
      return new (t || _ProjectsComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 6, consts: [["title", "Our Projects & Products", "subtitle", "A showcase of our precision manufacturing projects across various industries and applications.", 3, "showCTA", "minHeight"], ["id", "projects", 1, "section", "projects-gallery"], [1, "container"], ["subtitle", "Portfolio", "title", "Featured Projects", "description", "Browse our completed manufacturing projects across different categories and industries."], [1, "projects-gallery__filters"], ["class", "projects-gallery__filter", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "grid", "grid--3", "projects-gallery__grid"], ["class", "projects-gallery__card", 3, "project", "viewDetails", 4, "ngFor", "ngForOf"], ["class", "projects-gallery__empty", 4, "ngIf"], ["class", "modal-backdrop", 3, "click", 4, "ngIf"], ["title", "Looking for Similar Manufacturing Solutions?", "description", "Let us help you with your precision manufacturing needs. Contact our team to discuss your project requirements.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "projects-gallery__filter", 3, "click"], [1, "projects-gallery__card", 3, "viewDetails", "project"], [1, "projects-gallery__empty"], [1, "material-icons"], [1, "modal-backdrop", 3, "click"], [1, "modal", 3, "click"], ["aria-label", "Close", 1, "modal__close", 3, "click"], [1, "modal__content"], [1, "modal__image"], [3, "error", "src", "alt"], [1, "modal__details"], [1, "modal__tags"], [1, "modal__tag"], ["class", "modal__tag modal__tag--year", 4, "ngIf"], [1, "modal__title"], [1, "modal__description"], ["class", "modal__client", 4, "ngIf"], [1, "modal__actions"], ["routerLink", "/contact", 1, "btn", "btn--primary", 3, "click"], [1, "modal__tag", "modal__tag--year"], [1, "modal__client"], [1, "modal__client-label"], [1, "modal__client-name"]], template: function ProjectsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-section-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, ProjectsComponent_button_5_Template, 2, 3, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 6);
        \u0275\u0275template(7, ProjectsComponent_app_project_card_7_Template, 1, 1, "app-project-card", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, ProjectsComponent_div_8_Template, 7, 0, "div", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, ProjectsComponent_div_9_Template, 23, 7, "div", 9);
        \u0275\u0275element(10, "app-cta", 10);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.filteredProjects);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.filteredProjects.length === 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedProject);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      RouterModule,
      RouterLink,
      HeroComponent,
      SectionHeaderComponent,
      ProjectCardComponent,
      CTAComponent
    ], styles: ["\n\n.projects-gallery__filters[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 3rem;\n}\n.projects-gallery__filter[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.25rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #4a5568;\n  background: white;\n  border: 2px solid #e2e8f0;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.projects-gallery__filter[_ngcontent-%COMP%]:hover {\n  border-color: #1a2a6c;\n  color: #1a2a6c;\n}\n.projects-gallery__filter.active[_ngcontent-%COMP%] {\n  background: #1a2a6c;\n  border-color: #1a2a6c;\n  color: white;\n}\n.projects-gallery__grid[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.projects-gallery__card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.projects-gallery__empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n}\n.projects-gallery__empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  color: #a0aec0;\n  margin-bottom: 1rem;\n}\n.projects-gallery__empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #4a5568;\n  margin-bottom: 0.5rem;\n}\n.projects-gallery__empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718096;\n}\n.modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 2rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease;\n}\n@media (max-width: 767px) {\n  .modal-backdrop[_ngcontent-%COMP%] {\n    padding: 1rem;\n    align-items: flex-end;\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  max-width: 900px;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  animation: _ngcontent-%COMP%_slideUp 0.3s ease;\n}\n.modal__close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  background: #1a2a6c;\n  border: none;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.3s ease;\n}\n.modal__close[_ngcontent-%COMP%]:hover {\n  background: #ff6b35;\n  transform: rotate(90deg);\n}\n.modal__close[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.25rem;\n}\n.modal__content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n@media (max-width: 767px) {\n  .modal__content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.modal__image[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.modal__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  min-height: 300px;\n}\n@media (max-width: 767px) {\n  .modal__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    min-height: 200px;\n  }\n}\n.modal__details[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n@media (max-width: 767px) {\n  .modal__details[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.modal__tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.modal__tag[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.75rem;\n  background: rgba(255, 107, 53, 0.1);\n  color: #ff6b35;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.modal__tag--year[_ngcontent-%COMP%] {\n  background: rgba(26, 42, 108, 0.1);\n  color: #1a2a6c;\n}\n.modal__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 1rem;\n}\n.modal__description[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #4a5568;\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.modal__client[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #f8fafc;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n}\n.modal__client[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #1a2a6c;\n  font-size: 1.5rem;\n}\n.modal__client-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #718096;\n  margin-bottom: 0.25rem;\n}\n.modal__client-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #1a2a6c;\n}\n.modal__actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0.9rem 1.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-radius: 8px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n  cursor: pointer;\n}\n.btn--primary[_ngcontent-%COMP%] {\n  background-color: #1a2a6c;\n  color: white;\n  border-color: #1a2a6c;\n}\n.btn--primary[_ngcontent-%COMP%]:hover {\n  background-color: #0f1a4a;\n  border-color: #0f1a4a;\n  transform: translateY(-2px);\n  box-shadow: 0 10px 30px rgba(26, 42, 108, 0.3);\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=projects.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src\\app\\pages\\projects\\projects.component.ts", lineNumber: 25 });
})();
export {
  ProjectsComponent
};
//# sourceMappingURL=chunk-3J4BVMXL.js.map
