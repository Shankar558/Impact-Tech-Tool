import {
  CommonModule,
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
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/components/cta/cta.component.ts
var CTAComponent = class _CTAComponent {
  constructor() {
    this.title = "Looking for a Reliable Manufacturing Partner?";
    this.description = "Partner with Impact Tech Tool for precision engineering, tooling, fixtures, gauges, and prototype manufacturing solutions.";
    this.primaryButtonText = "Request a Quote";
    this.secondaryButtonText = "Contact Our Team";
    this.primaryButtonRoute = "/contact";
    this.secondaryButtonRoute = "/contact";
    this.variant = "accent";
  }
  static {
    this.\u0275fac = function CTAComponent_Factory(t) {
      return new (t || _CTAComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CTAComponent, selectors: [["app-cta"]], inputs: { title: "title", description: "description", primaryButtonText: "primaryButtonText", secondaryButtonText: "secondaryButtonText", primaryButtonRoute: "primaryButtonRoute", secondaryButtonRoute: "secondaryButtonRoute", variant: "variant" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 8, consts: [[1, "cta"], [1, "cta__background"], [1, "cta__pattern"], [1, "cta__content"], [1, "cta__title"], [1, "cta__description"], [1, "cta__buttons"], [1, "btn", "btn--accent", "btn--large", 3, "routerLink"], [1, "material-icons"], [1, "btn", "btn--secondary", "btn--large", 3, "routerLink"]], template: function CTAComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
        \u0275\u0275element(2, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "h2", 4);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 5);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6)(9, "a", 7)(10, "span", 8);
        \u0275\u0275text(11, "request_quote");
        \u0275\u0275elementEnd();
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "a", 9)(14, "span", 8);
        \u0275\u0275text(15, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("cta--navy", ctx.variant === "navy");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", ctx.primaryButtonRoute);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.primaryButtonText, " ");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", ctx.secondaryButtonRoute);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.secondaryButtonText, " ");
      }
    }, dependencies: [CommonModule, RouterModule, RouterLink], styles: [`

.cta[_ngcontent-%COMP%] {
  position: relative;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #0f1a4a 100%);
  padding: 4rem 0;
  overflow: hidden;
}
.cta--navy[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #0f1a4a 0%,
      #1a2a6c 100%);
}
.cta__background[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
.cta__pattern[_ngcontent-%COMP%] {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 10% 50%,
      rgba(255, 107, 53, 0.2) 0%,
      transparent 50%),
    radial-gradient(
      circle at 90% 50%,
      rgba(255, 107, 53, 0.1) 0%,
      transparent 50%),
    url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}
.cta__content[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (max-width: 767px) {
  .cta__content[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
}
.cta__title[_ngcontent-%COMP%] {
  font-size: 2.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.25rem;
  line-height: 1.2;
}
@media (max-width: 1023px) {
  .cta__title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
}
@media (max-width: 767px) {
  .cta__title[_ngcontent-%COMP%] {
    font-size: 1.75rem;
  }
}
.cta__description[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}
@media (max-width: 767px) {
  .cta__description[_ngcontent-%COMP%] {
    font-size: 1rem;
  }
}
.cta__buttons[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
@media (max-width: 767px) {
  .cta__buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
  }
  .cta__buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 280px;
  }
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
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
/*# sourceMappingURL=cta.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CTAComponent, { className: "CTAComponent", filePath: "src\\app\\components\\cta\\cta.component.ts", lineNumber: 12 });
})();

export {
  CTAComponent
};
//# sourceMappingURL=chunk-PZXF7TXS.js.map
