import {
  StatisticsComponent
} from "./chunk-ODAWV2AL.js";
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
  ɵɵtextInterpolate
} from "./chunk-5DBEWC26.js";

// src/app/pages/quality/quality.component.ts
function QualityComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 26);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r1.description);
  }
}
function QualityComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 29);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.description);
  }
}
var QualityComponent = class _QualityComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.statistics = [];
    this.qualityFocus = [
      {
        icon: "precision_manufacturing",
        title: "Precision Manufacturing",
        description: "Every component is manufactured to the highest precision standards, with accuracy maintained between 5\xB5m and 10\xB5m."
      },
      {
        icon: "straighten",
        title: "Dimensional Accuracy",
        description: "Rigorous dimensional verification ensures all components meet exact specifications and tolerances."
      },
      {
        icon: "settings_suggest",
        title: "Process Control",
        description: "Structured process control at every stage ensures consistent, repeatable manufacturing quality."
      },
      {
        icon: "verified",
        title: "Inspection",
        description: "Comprehensive inspection procedures verify quality at incoming, in-process, and final stages."
      },
      {
        icon: "checklist",
        title: "Customer Requirements",
        description: "We meticulously document and meet all customer requirements, including specialized tolerances."
      },
      {
        icon: "trending_up",
        title: "Continuous Improvement",
        description: "Ongoing process improvement initiatives enhance quality, efficiency, and reliability over time."
      }
    ];
    this.qualityProcess = [
      { step: "01", title: "Incoming Inspection", description: "Verification of all incoming materials against specifications." },
      { step: "02", title: "In-Process Quality", description: "Continuous quality checks during the manufacturing process." },
      { step: "03", title: "Final Inspection", description: "Comprehensive final inspection before delivery." },
      { step: "04", title: "Documentation", description: "Complete quality documentation and traceability records." }
    ];
  }
  ngOnInit() {
    this.statistics = this.dataService.getStatistics();
  }
  static {
    this.\u0275fac = function QualityComponent_Factory(t) {
      return new (t || _QualityComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QualityComponent, selectors: [["app-quality"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 6, consts: [["title", "Quality First. Always.", "subtitle", "Our commitment to quality drives everything we do - from precision manufacturing to rigorous inspection.", 3, "showCTA", "minHeight"], ["id", "quality", 1, "section", "quality-focus"], [1, "container"], ["subtitle", "Our Quality Focus", "title", "Quality Is Our Foundation", "description", "Quality is embedded in every aspect of our manufacturing process, ensuring reliable results every time."], [1, "grid", "grid--3", "quality-focus__grid"], ["class", "quality-item", 4, "ngFor", "ngForOf"], ["id", "accuracy", 1, "section", "section--dark", "accuracy"], [1, "accuracy__content"], ["subtitle", "Precision Capability", "title", "Our Accuracy Range", "description", "We maintain the highest level of dimensional accuracy in all our manufacturing operations.", 3, "lightTheme"], [1, "accuracy__range"], [1, "accuracy__value"], [1, "accuracy__line"], [1, "accuracy__line-fill"], [1, "accuracy__note"], [1, "accuracy__special"], [1, "material-icons"], ["id", "process", 1, "section", "process"], ["subtitle", "Quality Process", "title", "Our Quality Assurance Process", "description", "A structured quality assurance process that ensures every product meets the highest standards."], [1, "process__grid"], ["class", "process__step", 4, "ngFor", "ngForOf"], ["id", "stats", 1, "section", "section--gray", "stats"], [3, "statistics"], ["title", "Experience Our Quality Commitment", "description", "Partner with a manufacturer that prioritizes quality and precision in every project.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "quality-item"], [1, "quality-item__icon"], [1, "quality-item__title"], [1, "quality-item__description"], [1, "process__step"], [1, "process__step-number"], [1, "process__step-title"], [1, "process__step-description"]], template: function QualityComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-section-header", 3);
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275template(5, QualityComponent_div_5_Template, 8, 3, "div", 5);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "section", 6)(7, "div", 2)(8, "div", 7);
        \u0275\u0275element(9, "app-section-header", 8);
        \u0275\u0275elementStart(10, "div", 9)(11, "div", 10);
        \u0275\u0275text(12, "5\xB5m");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275element(14, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275text(16, "10\xB5m");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "p", 13);
        \u0275\u0275text(18, " We also meet specialized fixture requirements such as center pitch tolerances below 0.5mm where applicable. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "span", 15);
        \u0275\u0275text(21, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div")(23, "h4");
        \u0275\u0275text(24, "Specialized Tolerance Capability");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Center pitch tolerances below 0.5mm for precision fixtures");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(27, "section", 16)(28, "div", 2);
        \u0275\u0275element(29, "app-section-header", 17);
        \u0275\u0275elementStart(30, "div", 18);
        \u0275\u0275template(31, QualityComponent_div_31_Template, 7, 3, "div", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "section", 20)(33, "div", 2);
        \u0275\u0275element(34, "app-statistics", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "app-cta", 22);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.qualityFocus);
        \u0275\u0275advance(4);
        \u0275\u0275property("lightTheme", true);
        \u0275\u0275advance(22);
        \u0275\u0275property("ngForOf", ctx.qualityProcess);
        \u0275\u0275advance(3);
        \u0275\u0275property("statistics", ctx.statistics);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      HeroComponent,
      SectionHeaderComponent,
      StatisticsComponent,
      CTAComponent
    ], styles: ["\n\n.quality-focus__grid[_ngcontent-%COMP%] {\n  gap: 2rem;\n}\n.quality-item[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 2rem;\n  text-align: center;\n  transition: all 0.3s ease;\n  height: 100%;\n}\n.quality-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.quality-item[_ngcontent-%COMP%]:hover   .quality-item__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n}\n.quality-item__icon[_ngcontent-%COMP%] {\n  width: 65px;\n  height: 65px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2a6c 0%,\n      #2d4373 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 1.25rem;\n  transition: all 0.3s ease;\n}\n.quality-item__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 2rem;\n}\n.quality-item__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n}\n.quality-item__description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin: 0;\n}\n.accuracy__content[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.accuracy__range[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  margin: 3rem 0;\n}\n@media (max-width: 767px) {\n  .accuracy__range[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.accuracy__value[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 700;\n  color: white;\n  min-width: 150px;\n  text-align: center;\n}\n@media (max-width: 767px) {\n  .accuracy__value[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n.accuracy__line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 6px;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 3px;\n  position: relative;\n  overflow: hidden;\n}\n@media (max-width: 767px) {\n  .accuracy__line[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n  }\n}\n.accuracy__line-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 70%;\n  background:\n    linear-gradient(\n      90deg,\n      #1a2a6c,\n      #ff6b35);\n  border-radius: 3px;\n}\n.accuracy__note[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.85);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.accuracy__special[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 107, 53, 0.3);\n  border-radius: 12px;\n  padding: 1.5rem;\n  text-align: left;\n  max-width: 500px;\n  margin: 0 auto;\n}\n.accuracy__special[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ff6b35;\n  font-size: 2rem;\n  flex-shrink: 0;\n}\n.accuracy__special[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 0.25rem;\n}\n.accuracy__special[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: rgba(255, 255, 255, 0.8);\n  margin: 0;\n}\n.process__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1023px) {\n  .process__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 767px) {\n  .process__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.process__step[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n  border-top: 4px solid #ff6b35;\n}\n.process__step[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.process__step-number[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 2rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 1rem;\n}\n.process__step-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n}\n.process__step-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin: 0;\n}\n.stats[_ngcontent-%COMP%]   app-statistics[_ngcontent-%COMP%] {\n  display: block;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=quality.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QualityComponent, { className: "QualityComponent", filePath: "src\\app\\pages\\quality\\quality.component.ts", lineNumber: 35 });
})();
export {
  QualityComponent
};
//# sourceMappingURL=chunk-EMQRJCBX.js.map
