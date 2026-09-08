import {
  CapabilityCardComponent
} from "./chunk-QQBMAW7S.js";
import "./chunk-ODAWV2AL.js";
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DBEWC26.js";

// src/app/pages/capabilities/capabilities.component.ts
function CapabilitiesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 25)(2, "span", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 27);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 28);
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
function CapabilitiesComponent_app_capability_card_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-capability-card", 29);
  }
  if (rf & 2) {
    const capability_r2 = ctx.$implicit;
    \u0275\u0275property("capability", capability_r2);
  }
}
function CapabilitiesComponent_div_31_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "span", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 40);
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
function CapabilitiesComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31)(2, "div", 32)(3, "span", 26);
    \u0275\u0275text(4, "precision_manufacturing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 33)(6, "h3", 34);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 36);
    \u0275\u0275template(11, CapabilitiesComponent_div_31_div_11_Template, 5, 2, "div", 37);
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
var CapabilitiesComponent = class _CapabilitiesComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.capabilities = [];
    this.machines = [];
    this.engineeringScope = [
      { icon: "architecture", title: "Design", description: "Engineering design and development" },
      { icon: "precision_manufacturing", title: "Manufacturing", description: "Precision manufacturing processes" },
      { icon: "handyman", title: "Assembly", description: "Component and product assembly" },
      { icon: "science", title: "Testing", description: "Functional and performance testing" },
      { icon: "verified", title: "Quality Inspection", description: "Comprehensive quality control" }
    ];
  }
  ngOnInit() {
    this.capabilities = this.dataService.getCapabilities();
    this.machines = this.dataService.getVMCMachines();
  }
  getObjectKeys(obj) {
    return obj ? Object.keys(obj) : [];
  }
  static {
    this.\u0275fac = function CapabilitiesComponent_Factory(t) {
      return new (t || _CapabilitiesComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CapabilitiesComponent, selectors: [["app-capabilities"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 6, consts: [["title", "Our Manufacturing Capabilities", "subtitle", "Precision engineering and advanced manufacturing capabilities for demanding industrial applications.", 3, "showCTA", "minHeight"], ["id", "precision", 1, "section", "precision"], [1, "container"], ["subtitle", "Precision Capability", "title", "Uncompromising Accuracy", "description", "Our precision manufacturing capability ensures dimensional accuracy that meets the most demanding requirements."], [1, "precision__highlight"], [1, "precision__accuracy"], [1, "precision__accuracy-icon", "material-icons"], [1, "precision__accuracy-values"], [1, "precision__accuracy-value"], [1, "precision__accuracy-separator"], [1, "precision__accuracy-label"], ["id", "scope", 1, "section", "section--gray", "scope"], ["subtitle", "Engineering Scope", "title", "End-to-End Engineering Solutions", "description", "We cover the complete engineering scope from initial design to final quality inspection."], [1, "grid", "grid--5", "scope__grid"], ["class", "scope__item", 4, "ngFor", "ngForOf"], ["id", "capabilities", 1, "section", "capabilities"], ["subtitle", "Manufacturing Capabilities", "title", "What We Manufacture", "description", "Our manufacturing capabilities cover a wide range of precision engineering and tooling."], [1, "grid", "grid--4", "capabilities__grid"], ["class", "capabilities__card", 3, "capability", 4, "ngFor", "ngForOf"], ["id", "machines", 1, "section", "section--dark", "machines"], ["subtitle", "Our Machinery", "title", "VMC Machine Specifications", "description", "State-of-the-art Vertical Machining Centers for precision manufacturing.", 3, "lightTheme"], [1, "grid", "grid--2", "machines__grid"], ["class", "machine-card", 4, "ngFor", "ngForOf"], ["title", "Discuss Your Precision Requirements", "description", "Our engineering team can help you determine the right manufacturing approach for your specific requirements.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "scope__item"], [1, "scope__icon"], [1, "material-icons"], [1, "scope__title"], [1, "scope__description"], [1, "capabilities__card", 3, "capability"], [1, "machine-card"], [1, "machine-card__header"], [1, "machine-card__icon"], [1, "machine-card__info"], [1, "machine-card__name"], [1, "machine-card__type"], [1, "machine-card__specs"], ["class", "machine-card__spec", 4, "ngFor", "ngForOf"], [1, "machine-card__spec"], [1, "machine-card__spec-label"], [1, "machine-card__spec-value"]], template: function CapabilitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2);
        \u0275\u0275element(3, "app-section-header", 3);
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "straighten");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
        \u0275\u0275text(10, "5\xB5m");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "10\xB5m");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "span", 10);
        \u0275\u0275text(16, "Accuracy Range");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(17, "section", 11)(18, "div", 2);
        \u0275\u0275element(19, "app-section-header", 12);
        \u0275\u0275elementStart(20, "div", 13);
        \u0275\u0275template(21, CapabilitiesComponent_div_21_Template, 8, 3, "div", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "section", 15)(23, "div", 2);
        \u0275\u0275element(24, "app-section-header", 16);
        \u0275\u0275elementStart(25, "div", 17);
        \u0275\u0275template(26, CapabilitiesComponent_app_capability_card_26_Template, 1, 1, "app-capability-card", 18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(27, "section", 19)(28, "div", 2);
        \u0275\u0275element(29, "app-section-header", 20);
        \u0275\u0275elementStart(30, "div", 21);
        \u0275\u0275template(31, CapabilitiesComponent_div_31_Template, 12, 3, "div", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(32, "app-cta", 23);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(21);
        \u0275\u0275property("ngForOf", ctx.engineeringScope);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.capabilities);
        \u0275\u0275advance(3);
        \u0275\u0275property("lightTheme", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.machines);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      HeroComponent,
      SectionHeaderComponent,
      CapabilityCardComponent,
      CTAComponent
    ], styles: [`

.precision__highlight[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.precision__accuracy[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #2d4373 100%);
  border-radius: 16px;
  padding: 3rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
}
@media (max-width: 767px) {
  .precision__accuracy[_ngcontent-%COMP%] {
    padding: 2rem;
    width: 100%;
  }
}
.precision__accuracy[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}
.precision__accuracy-icon[_ngcontent-%COMP%] {
  font-size: 4rem;
  color: #ff6b35;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}
.precision__accuracy-values[_ngcontent-%COMP%] {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}
.precision__accuracy-value[_ngcontent-%COMP%] {
  font-size: 3rem;
  font-weight: 700;
  color: white;
}
@media (max-width: 767px) {
  .precision__accuracy-value[_ngcontent-%COMP%] {
    font-size: 2.25rem;
  }
}
.precision__accuracy-separator[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.6);
}
.precision__accuracy-label[_ngcontent-%COMP%] {
  display: block;
  margin-top: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ff6b35;
  position: relative;
  z-index: 2;
}
.scope__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
}
@media (max-width: 1023px) {
  .scope__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 767px) {
  .scope__grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}
.scope__item[_ngcontent-%COMP%] {
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}
.scope__item[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
.scope__item[_ngcontent-%COMP%]:hover   .scope__icon[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #ff6b35 0%,
      #ff8c5a 100%);
}
.scope__icon[_ngcontent-%COMP%] {
  width: 55px;
  height: 55px;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #2d4373 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
}
.scope__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: white;
  font-size: 1.5rem;
}
.scope__title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.5rem;
}
.scope__description[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #718096;
  line-height: 1.5;
  margin: 0;
}
.machines__card[_ngcontent-%COMP%] {
  height: 100%;
}
.machine-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}
.machine-card[_ngcontent-%COMP%]:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-5px);
}
.machine-card__header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.machine-card__icon[_ngcontent-%COMP%] {
  width: 55px;
  height: 55px;
  background:
    linear-gradient(
      135deg,
      #ff6b35 0%,
      #ff8c5a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.machine-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: white;
  font-size: 1.75rem;
}
.machine-card__name[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.25rem;
}
.machine-card__type[_ngcontent-%COMP%] {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}
.machine-card__specs[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.machine-card__spec[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.machine-card__spec-label[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}
.machine-card__spec-value[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  font-weight: 600;
  color: white;
  text-align: right;
}
.container[_ngcontent-%COMP%] {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (max-width: 767px) {
  .container[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
}
/*# sourceMappingURL=capabilities.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CapabilitiesComponent, { className: "CapabilitiesComponent", filePath: "src\\app\\pages\\capabilities\\capabilities.component.ts", lineNumber: 25 });
})();
export {
  CapabilitiesComponent
};
//# sourceMappingURL=chunk-WVXCFSKN.js.map
