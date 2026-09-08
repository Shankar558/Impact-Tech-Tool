import {
  CommonModule,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DBEWC26.js";

// src/app/components/capability-card/capability-card.component.ts
function CapabilityCardComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.capability.category);
  }
}
var CapabilityCardComponent = class _CapabilityCardComponent {
  constructor() {
    this.showCategory = true;
  }
  static {
    this.\u0275fac = function CapabilityCardComponent_Factory(t) {
      return new (t || _CapabilityCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CapabilityCardComponent, selectors: [["app-capability-card"]], inputs: { capability: "capability", showCategory: "showCategory" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 11, vars: 4, consts: [[1, "capability-card"], [1, "capability-card__header"], [1, "capability-card__icon"], [1, "material-icons"], ["class", "capability-card__category", 4, "ngIf"], [1, "capability-card__content"], [1, "capability-card__title"], [1, "capability-card__description"], [1, "capability-card__category"]], template: function CapabilityCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, CapabilityCardComponent_span_5_Template, 2, 1, "span", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 5)(7, "h3", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p", 7);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.capability.icon);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCategory);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.capability.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.capability.description);
      }
    }, dependencies: [CommonModule, NgIf], styles: ['\n\n.capability-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.capability-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff6b35,\n      #ff8c5a);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n  transform-origin: left;\n}\n.capability-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.capability-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.capability-card[_ngcontent-%COMP%]:hover   .capability-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n}\n.capability-card[_ngcontent-%COMP%]:hover   .capability-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.capability-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.capability-card__icon[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2a6c 0%,\n      #2d4373 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.3s ease;\n}\n.capability-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.75rem;\n  transition: color 0.3s ease;\n}\n.capability-card__category[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  color: #ff6b35;\n  background: rgba(255, 107, 53, 0.1);\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n}\n.capability-card__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n  line-height: 1.3;\n}\n.capability-card__description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin: 0;\n}\n/*# sourceMappingURL=capability-card.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CapabilityCardComponent, { className: "CapabilityCardComponent", filePath: "src\\app\\components\\capability-card\\capability-card.component.ts", lineNumber: 12 });
})();

export {
  CapabilityCardComponent
};
//# sourceMappingURL=chunk-QQBMAW7S.js.map
