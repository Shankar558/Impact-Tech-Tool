import {
  CommonModule,
  NgIf,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DBEWC26.js";

// src/app/components/hero/hero.component.ts
function HeroComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function HeroComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "a", 16)(2, "span", 12);
    \u0275\u0275text(3, "request_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Request a Quote ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 17)(6, "span", 12);
    \u0275\u0275text(7, "explore");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Explore Our Capabilities ");
    \u0275\u0275elementEnd()();
  }
}
var HeroComponent = class _HeroComponent {
  constructor() {
    this.title = "Precision Engineering. Reliable Manufacturing.";
    this.subtitle = "One Stop Solution for Design, Stamping Tooling, Fixtures, Gauges and Proto Build.";
    this.showCTA = true;
    this.backgroundImage = "";
    this.minHeight = "100vh";
    this.overlay = true;
  }
  scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  static {
    this.\u0275fac = function HeroComponent_Factory(t) {
      return new (t || _HeroComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], inputs: { title: "title", subtitle: "subtitle", showCTA: "showCTA", backgroundImage: "backgroundImage", minHeight: "minHeight", overlay: "overlay" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 36, vars: 8, consts: [[1, "hero"], [1, "hero__background"], [1, "hero__pattern"], ["class", "hero__overlay", 4, "ngIf"], [1, "hero__content"], [1, "container"], [1, "hero__text"], [1, "hero__title", "animate-on-scroll"], [1, "hero__subtitle", "animate-on-scroll"], ["class", "hero__buttons animate-on-scroll", 4, "ngIf"], [1, "hero__features", "animate-on-scroll"], [1, "hero__feature"], [1, "material-icons"], [1, "hero__scroll-indicator"], [1, "hero__overlay"], [1, "hero__buttons", "animate-on-scroll"], ["routerLink", "/contact", 1, "btn", "btn--accent", "btn--large"], ["routerLink", "/capabilities", 1, "btn", "btn--secondary", "btn--large"]], template: function HeroComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275template(3, HeroComponent_div_3_Template, 1, 0, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "h1", 7);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, HeroComponent_div_11_Template, 9, 0, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10)(13, "div", 11)(14, "span", 12);
        \u0275\u0275text(15, "precision_manufacturing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17, "CNC/VMC Machining");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 11)(19, "span", 12);
        \u0275\u0275text(20, "build");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "span");
        \u0275\u0275text(22, "Tool Room");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 11)(24, "span", 12);
        \u0275\u0275text(25, "architecture");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "Engineering Design");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 11)(29, "span", 12);
        \u0275\u0275text(30, "verified");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "span");
        \u0275\u0275text(32, "Quality Assured");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(33, "div", 13)(34, "span", 12);
        \u0275\u0275text(35, "expand_more");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("min-height", ctx.minHeight);
        \u0275\u0275advance();
        \u0275\u0275styleProp("background-image", ctx.backgroundImage ? "url(" + ctx.backgroundImage + ")" : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.overlay);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.subtitle);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCTA);
      }
    }, dependencies: [CommonModule, NgIf, RouterModule, RouterLink], styles: [`

.hero[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  overflow: hidden;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #0f1a4a 100%);
}
.hero__background[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero__background[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #0f1a4a 100%);
  opacity: 0.95;
}
.hero__pattern[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(
      circle at 20% 80%,
      rgba(255, 107, 53, 0.15) 0%,
      transparent 50%),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 107, 53, 0.1) 0%,
      transparent 50%);
  pointer-events: none;
}
.hero__overlay[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
  pointer-events: none;
}
.hero__content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 10;
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}
@media (max-width: 767px) {
  .hero__content[_ngcontent-%COMP%] {
    padding: 1rem;
  }
}
.hero__text[_ngcontent-%COMP%] {
  text-align: center;
  margin-bottom: 3rem;
}
@media (max-width: 767px) {
  .hero__text[_ngcontent-%COMP%] {
    margin-bottom: 2rem;
  }
}
.hero__title[_ngcontent-%COMP%] {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  line-height: 1.15;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
@media (max-width: 1023px) {
  .hero__title[_ngcontent-%COMP%] {
    font-size: 2.75rem;
  }
}
@media (max-width: 767px) {
  .hero__title[_ngcontent-%COMP%] {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
.hero__subtitle[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}
@media (max-width: 767px) {
  .hero__subtitle[_ngcontent-%COMP%] {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
}
.hero__buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .hero__buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
  }
  .hero__buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 280px;
  }
}
.hero__features[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
@media (max-width: 1023px) {
  .hero__features[_ngcontent-%COMP%] {
    gap: 1.5rem;
  }
}
@media (max-width: 767px) {
  .hero__features[_ngcontent-%COMP%] {
    gap: 1rem;
  }
}
.hero__feature[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  color: white;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}
.hero__feature[_ngcontent-%COMP%]:hover {
  background: rgba(255, 107, 53, 0.2);
  transform: translateY(-2px);
}
.hero__feature[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ff6b35;
  font-size: 1.25rem;
}
@media (max-width: 767px) {
  .hero__feature[_ngcontent-%COMP%] {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
}
.hero__scroll-indicator[_ngcontent-%COMP%] {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: _ngcontent-%COMP%_bounce 2s infinite;
}
.hero__scroll-indicator[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.7);
}
@keyframes _ngcontent-%COMP%_bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
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
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}
.btn--accent[_ngcontent-%COMP%] {
  background-color: #ff6b35;
  color: white;
  border-color: #ff6b35;
}
.btn--accent[_ngcontent-%COMP%]:hover {
  background-color: #e55a24;
  border-color: #e55a24;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.4);
}
.btn--secondary[_ngcontent-%COMP%] {
  background-color: transparent;
  color: white;
  border-color: white;
}
.btn--secondary[_ngcontent-%COMP%]:hover {
  background-color: white;
  color: #1a2a6c;
  transform: translateY(-3px);
}
.btn--large[_ngcontent-%COMP%] {
  padding: 1rem 2rem;
  font-size: 1rem;
}
.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
.animate-on-scroll[_ngcontent-%COMP%] {
  opacity: 0;
  transform: translateY(30px);
  animation: _ngcontent-%COMP%_slideUp 0.8s ease-out forwards;
}
.animate-on-scroll[_ngcontent-%COMP%]:nth-child(1) {
  animation-delay: 0.1s;
}
.animate-on-scroll[_ngcontent-%COMP%]:nth-child(2) {
  animation-delay: 0.2s;
}
.animate-on-scroll[_ngcontent-%COMP%]:nth-child(3) {
  animation-delay: 0.3s;
}
@keyframes _ngcontent-%COMP%_slideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/*# sourceMappingURL=hero.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src\\app\\components\\hero\\hero.component.ts", lineNumber: 12 });
})();

// src/app/components/section-header/section-header.component.ts
function SectionHeaderComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.subtitle);
  }
}
function SectionHeaderComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "span", 7);
    \u0275\u0275elementStart(2, "span", 8)(3, "span", 9);
    \u0275\u0275text(4, "precision_manufacturing");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "span", 7);
    \u0275\u0275elementEnd();
  }
}
function SectionHeaderComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.description);
  }
}
var SectionHeaderComponent = class _SectionHeaderComponent {
  constructor() {
    this.title = "";
    this.subtitle = "";
    this.description = "";
    this.centered = true;
    this.lightTheme = false;
    this.showDivider = true;
  }
  static {
    this.\u0275fac = function SectionHeaderComponent_Factory(t) {
      return new (t || _SectionHeaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionHeaderComponent, selectors: [["app-section-header"]], inputs: { title: "title", subtitle: "subtitle", description: "description", centered: "centered", lightTheme: "lightTheme", showDivider: "showDivider" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 8, consts: [[1, "section-header"], ["class", "section-header__subtitle", 4, "ngIf"], [1, "section-header__title"], ["class", "section-header__divider", 4, "ngIf"], ["class", "section-header__description", 4, "ngIf"], [1, "section-header__subtitle"], [1, "section-header__divider"], [1, "section-header__divider-line"], [1, "section-header__divider-icon"], [1, "material-icons"], [1, "section-header__description"]], template: function SectionHeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, SectionHeaderComponent_span_1_Template, 2, 1, "span", 1);
        \u0275\u0275elementStart(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, SectionHeaderComponent_div_4_Template, 6, 0, "div", 3)(5, SectionHeaderComponent_p_5_Template, 2, 1, "p", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("centered", ctx.centered)("light-theme", ctx.lightTheme);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subtitle);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDivider);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.description);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.section-header[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.section-header.centered[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-header.light-theme[_ngcontent-%COMP%]   .section-header__title[_ngcontent-%COMP%] {\n  color: white;\n}\n.section-header.light-theme[_ngcontent-%COMP%]   .section-header__description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.section-header__subtitle[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #ff6b35;\n  margin-bottom: 0.75rem;\n}\n.section-header__title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n@media (max-width: 1023px) {\n  .section-header__title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 767px) {\n  .section-header__title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n.section-header__divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.centered[_ngcontent-%COMP%]   .section-header__divider[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.section-header__divider[_ngcontent-%COMP%]:not(.centered) {\n  justify-content: flex-start;\n}\n.section-header__divider-line[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      #ff6b35);\n  border-radius: 2px;\n}\n.section-header__divider-line[_ngcontent-%COMP%]:last-child {\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b35,\n      transparent);\n}\n.section-header__divider-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 50%;\n}\n.section-header__divider-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.25rem;\n}\n.section-header__description[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #4a5568;\n  line-height: 1.7;\n  max-width: 700px;\n  margin: 0 auto;\n}\n.centered[_ngcontent-%COMP%]   .section-header__description[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.section-header__description[_ngcontent-%COMP%]:not(.centered) {\n  text-align: left;\n}\n@media (max-width: 767px) {\n  .section-header__description[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=section-header.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionHeaderComponent, { className: "SectionHeaderComponent", filePath: "src\\app\\components\\section-header\\section-header.component.ts", lineNumber: 11 });
})();

export {
  HeroComponent,
  SectionHeaderComponent
};
//# sourceMappingURL=chunk-QZN4ACQM.js.map
