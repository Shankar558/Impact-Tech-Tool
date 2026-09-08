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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/pages/infrastructure/infrastructure.component.ts
var _c0 = () => ({ value: "5\xB5m - 10\xB5m", label: "Precision Accuracy", icon: "straighten" });
var _c1 = () => ({ value: "24/7", label: "Production Support", icon: "schedule" });
var _c2 = () => ({ value: "100%", label: "Quality Inspection", icon: "verified" });
var _c3 = () => ({ value: "On-time", label: "Delivery Commitment", icon: "local_shipping" });
var _c4 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function InfrastructureComponent_div_5_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23)(1, "span", 18);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", feature_r1, " ");
  }
}
function InfrastructureComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16)(2, "div", 17)(3, "span", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 20);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 21);
    \u0275\u0275template(10, InfrastructureComponent_div_5_span_10_Template, 4, 1, "span", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const area_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(area_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r2.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", area_r2.features);
  }
}
function InfrastructureComponent_div_10_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 34);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const key_r3 = ctx.$implicit;
    const machine_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(key_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(machine_r4.specifications[key_r3]);
  }
}
function InfrastructureComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "div", 26)(3, "span", 18);
    \u0275\u0275text(4, "precision_manufacturing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 27)(6, "h3", 28);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 29);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 30);
    \u0275\u0275template(11, InfrastructureComponent_div_10_div_11_Template, 5, 2, "div", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const machine_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(machine_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(machine_r4.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r4.getObjectKeys(machine_r4.specifications));
  }
}
function InfrastructureComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "div", 36)(2, "span", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r6.label);
  }
}
var InfrastructureComponent = class _InfrastructureComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.machines = [];
    this.areas = [
      {
        icon: "build",
        title: "Tool Room",
        description: "Complete tool room facility equipped for die and tool manufacturing with precision equipment and skilled craftsmen.",
        features: ["Precision Tooling", "Die Manufacturing", "Surface Grinding", "Tool Assembly"]
      },
      {
        icon: "precision_manufacturing",
        title: "VMC Machines",
        description: "State-of-the-art Vertical Machining Centers for high-precision component manufacturing.",
        features: ["High-Speed Machining", "Multi-Axis Capability", "CNC Programming", "Complex Geometries"]
      },
      {
        icon: "architecture",
        title: "Design Team",
        description: "Experienced engineering design team equipped with advanced CAD/CAM software for product and tooling design.",
        features: ["3D Modeling", "CAD/CAM Software", "Design Analysis", "Technical Documentation"]
      },
      {
        icon: "verified",
        title: "Quality Inspection",
        description: "Dedicated quality inspection area with precision measurement equipment for dimensional verification.",
        features: ["Precision Measurement", "Dimensional Inspection", "Quality Records", "Traceability"]
      },
      {
        icon: "handyman",
        title: "Assembly Area",
        description: "Dedicated assembly area for fixtures, tools, and component assemblies with proper workspace.",
        features: ["Fixture Assembly", "Tool Assembly", "Final Assembly", "Testing"]
      },
      {
        icon: "settings",
        title: "Manufacturing Equipment",
        description: "Comprehensive range of manufacturing equipment for all types of precision machining operations.",
        features: ["CNC Machines", "EDM Machines", "Grinding Machines", "Conventional Machines"]
      }
    ];
  }
  ngOnInit() {
    this.machines = this.dataService.getVMCMachines();
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  static {
    this.\u0275fac = function InfrastructureComponent_Factory(t) {
      return new (t || _InfrastructureComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfrastructureComponent, selectors: [["app-infrastructure"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 15, consts: [["title", "Our Manufacturing Infrastructure", "subtitle", "A complete, modern manufacturing setup equipped for precision engineering and reliable production.", 3, "showCTA", "minHeight"], ["id", "areas", 1, "section", "infrastructure"], [1, "container"], ["subtitle", "Facilities", "title", "Our Infrastructure", "description", "Explore our complete manufacturing infrastructure designed for precision and efficiency."], [1, "grid", "grid--3", "infrastructure__grid"], ["class", "area-card", 4, "ngFor", "ngForOf"], ["id", "machines", 1, "section", "section--dark", "machines"], ["subtitle", "Machinery", "title", "VMC Machine Specifications", "description", "Precision Vertical Machining Centers for demanding manufacturing applications.", 3, "lightTheme"], [1, "grid", "grid--2", "machines__grid"], ["class", "machine-card", 4, "ngFor", "ngForOf"], ["id", "summary", 1, "section", "summary"], ["subtitle", "Our Strength", "title", "Complete Manufacturing Capability", "description", "From design to delivery, our infrastructure supports every stage of the manufacturing process."], [1, "summary__grid"], ["class", "summary__item", 4, "ngFor", "ngForOf"], ["title", "Experience Our Manufacturing Capability", "description", "Partner with us for precision manufacturing solutions backed by a complete, modern infrastructure.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "area-card"], [1, "area-card__header"], [1, "area-card__icon"], [1, "material-icons"], [1, "area-card__title"], [1, "area-card__description"], [1, "area-card__features"], ["class", "area-card__feature", 4, "ngFor", "ngForOf"], [1, "area-card__feature"], [1, "machine-card"], [1, "machine-card__header"], [1, "machine-card__icon"], [1, "machine-card__info"], [1, "machine-card__name"], [1, "machine-card__type"], [1, "machine-card__specs"], ["class", "machine-card__spec", 4, "ngFor", "ngForOf"], [1, "machine-card__spec"], [1, "machine-card__spec-label"], [1, "machine-card__spec-value"], [1, "summary__item"], [1, "summary__icon"], [1, "summary__value"], [1, "summary__label"]], template: function InfrastructureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-section-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, InfrastructureComponent_div_5_Template, 11, 4, "div", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 6)(7, "div", 2);
        \u0275\u0275element(8, "app-section-header", 7);
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275template(10, InfrastructureComponent_div_10_Template, 12, 3, "div", 9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "section", 10)(12, "div", 2);
        \u0275\u0275element(13, "app-section-header", 11);
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275template(15, InfrastructureComponent_div_15_Template, 8, 3, "div", 13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(16, "app-cta", 14);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.areas);
        \u0275\u0275advance(3);
        \u0275\u0275property("lightTheme", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.machines);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction4(10, _c4, \u0275\u0275pureFunction0(6, _c0), \u0275\u0275pureFunction0(7, _c1), \u0275\u0275pureFunction0(8, _c2), \u0275\u0275pureFunction0(9, _c3)));
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      HeroComponent,
      SectionHeaderComponent,
      CTAComponent
    ], styles: ["\n\n.infrastructure__grid[_ngcontent-%COMP%]   app-area-card[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.area-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 2rem;\n  transition: all 0.3s ease;\n  height: 100%;\n}\n.area-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.area-card[_ngcontent-%COMP%]:hover   .area-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n}\n.area-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.area-card__icon[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2a6c 0%,\n      #2d4373 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: all 0.3s ease;\n}\n.area-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n}\n.area-card__title[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin: 0;\n}\n.area-card__description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin-bottom: 1.5rem;\n}\n.area-card__features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.area-card__feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #2d3748;\n}\n.area-card__feature[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #38a169;\n  font-size: 1rem;\n}\n.machine-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  padding: 2rem;\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  transition: all 0.3s ease;\n}\n.machine-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  transform: translateY(-5px);\n}\n.machine-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n.machine-card__icon[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.machine-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n}\n.machine-card__name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 0.25rem;\n}\n.machine-card__type[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.machine-card__specs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.machine-card__spec[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.machine-card__spec-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.7);\n}\n.machine-card__spec-value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: white;\n  text-align: right;\n}\n.summary__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1023px) {\n  .summary__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .summary__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n}\n.summary__item[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.summary__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.summary__icon[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1rem;\n}\n.summary__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n}\n.summary__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.5rem;\n}\n.summary__label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #718096;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=infrastructure.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfrastructureComponent, { className: "InfrastructureComponent", filePath: "src\\app\\pages\\infrastructure\\infrastructure.component.ts", lineNumber: 28 });
})();
export {
  InfrastructureComponent
};
//# sourceMappingURL=chunk-I52KQMVM.js.map
