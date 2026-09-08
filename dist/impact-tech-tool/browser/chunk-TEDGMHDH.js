import {
  ServiceCardComponent
} from "./chunk-ZIYX7I32.js";
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
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/pages/services/services.component.ts
function ServicesComponent_app_service_card_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-card", 11);
  }
  if (rf & 2) {
    const service_r1 = ctx.$implicit;
    \u0275\u0275property("service", service_r1)("showCapabilities", true)("showIndustries", true);
  }
}
function ServicesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14)(4, "span", 15);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", i_r3 + 1, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.description);
  }
}
var ServicesComponent = class _ServicesComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.services = [];
    this.processSteps = [
      {
        icon: "architecture",
        title: "Design & Engineering",
        description: "Understanding your requirements and creating detailed engineering designs and specifications."
      },
      {
        icon: "precision_manufacturing",
        title: "Manufacturing",
        description: "Precision manufacturing using advanced CNC/VMC machines and skilled craftsmanship."
      },
      {
        icon: "verified",
        title: "Quality Inspection",
        description: "Rigorous quality inspection and dimensional verification at every stage of production."
      },
      {
        icon: "local_shipping",
        title: "Delivery & Support",
        description: "Timely delivery with ongoing technical support to ensure complete satisfaction."
      }
    ];
  }
  ngOnInit() {
    this.services = this.dataService.getServices();
  }
  static {
    this.\u0275fac = function ServicesComponent_Factory(t) {
      return new (t || _ServicesComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 5, consts: [["title", "Our Manufacturing Services", "subtitle", "Comprehensive precision manufacturing and engineering services for automotive and non-automotive industries.", 3, "showCTA", "minHeight"], ["id", "services", 1, "section", "services-overview"], [1, "container"], ["subtitle", "What We Do", "title", "Complete Manufacturing Solutions", "description", "From design to final manufacturing, we provide end-to-end solutions with precision at every step."], [1, "grid", "grid--2", "services-overview__grid"], ["class", "services-overview__card", 3, "service", "showCapabilities", "showIndustries", 4, "ngFor", "ngForOf"], ["id", "process", 1, "section", "section--dark", "process"], ["subtitle", "Our Process", "title", "How We Work", "description", "A structured, quality-focused process that ensures reliable results.", 3, "lightTheme"], [1, "process__grid"], ["class", "process__step", 4, "ngFor", "ngForOf"], ["title", "Need a Custom Manufacturing Solution?", "description", "Contact our team to discuss your specific requirements and get a tailored solution for your project.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "services-overview__card", 3, "service", "showCapabilities", "showIndustries"], [1, "process__step"], [1, "process__step-number"], [1, "process__step-icon"], [1, "material-icons"], [1, "process__step-title"], [1, "process__step-description"]], template: function ServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-section-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, ServicesComponent_app_service_card_5_Template, 1, 3, "app-service-card", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 6)(7, "div", 2);
        \u0275\u0275element(8, "app-section-header", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, ServicesComponent_div_10_Template, 10, 4, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(11, "app-cta", 10);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.services);
        \u0275\u0275advance(3);
        \u0275\u0275property("lightTheme", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.processSteps);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      HeroComponent,
      SectionHeaderComponent,
      ServiceCardComponent,
      CTAComponent
    ], styles: ["\n\n.services-overview__card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.process__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1023px) {\n  .process__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .process__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.process__step[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  position: relative;\n  transition: all 0.3s ease;\n}\n.process__step[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-5px);\n}\n.process__step[_ngcontent-%COMP%]:hover   .process__step-number[_ngcontent-%COMP%] {\n  color: #ff6b35;\n}\n.process__step-number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1.25rem;\n  font-size: 2rem;\n  font-weight: 700;\n  color: rgba(255, 255, 255, 0.15);\n  transition: color 0.3s ease;\n}\n.process__step-icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n}\n.process__step-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n}\n.process__step-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 0.75rem;\n}\n.process__step-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.6;\n  margin: 0;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=services.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src\\app\\pages\\services\\services.component.ts", lineNumber: 23 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-TEDGMHDH.js.map
