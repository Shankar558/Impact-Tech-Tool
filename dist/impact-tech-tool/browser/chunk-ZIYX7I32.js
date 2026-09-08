import {
  CommonModule,
  EventEmitter,
  NgForOf,
  NgIf,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/components/service-card/service-card.component.ts
function ServiceCardComponent_div_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 2);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const capability_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", capability_r1, " ");
  }
}
function ServiceCardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h4", 11);
    \u0275\u0275text(2, "Key Capabilities:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 12);
    \u0275\u0275template(4, ServiceCardComponent_div_9_li_4_Template, 4, 1, "li", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.service.capabilities);
  }
}
function ServiceCardComponent_div_10_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const industry_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", industry_r3, " ");
  }
}
function ServiceCardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h4", 15);
    \u0275\u0275text(2, "Industries Served:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275template(4, ServiceCardComponent_div_10_span_4_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.service.industries);
  }
}
var ServiceCardComponent = class _ServiceCardComponent {
  constructor() {
    this.showCapabilities = false;
    this.showIndustries = false;
    this.learnMore = new EventEmitter();
  }
  onLearnMore() {
    this.learnMore.emit(this.service.id);
  }
  static {
    this.\u0275fac = function ServiceCardComponent_Factory(t) {
      return new (t || _ServiceCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceCardComponent, selectors: [["app-service-card"]], inputs: { service: "service", showCapabilities: "showCapabilities", showIndustries: "showIndustries" }, outputs: { learnMore: "learnMore" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 16, vars: 5, consts: [[1, "service-card"], [1, "service-card__icon"], [1, "material-icons"], [1, "service-card__content"], [1, "service-card__title"], [1, "service-card__description"], ["class", "service-card__capabilities", 4, "ngIf"], ["class", "service-card__industries", 4, "ngIf"], [1, "service-card__footer"], ["routerLink", "/services", 1, "service-card__link", 3, "click"], [1, "service-card__capabilities"], [1, "service-card__capabilities-title"], [1, "service-card__capabilities-list"], [4, "ngFor", "ngForOf"], [1, "service-card__industries"], [1, "service-card__industries-title"], [1, "service-card__industries-tags"], ["class", "service-card__industry-tag", 4, "ngFor", "ngForOf"], [1, "service-card__industry-tag"]], template: function ServiceCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 3)(5, "h3", 4);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "p", 5);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ServiceCardComponent_div_9_Template, 5, 1, "div", 6)(10, ServiceCardComponent_div_10_Template, 5, 1, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8)(12, "a", 9);
        \u0275\u0275listener("click", function ServiceCardComponent_Template_a_click_12_listener() {
          return ctx.onLearnMore();
        });
        \u0275\u0275text(13, " Learn More ");
        \u0275\u0275elementStart(14, "span", 2);
        \u0275\u0275text(15, "arrow_forward");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.service.icon);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.service.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.service.description);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showCapabilities && ctx.service.capabilities.length > 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showIndustries && ctx.service.industries.length > 0);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.service-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-card__icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-card__link[_ngcontent-%COMP%] {\n  color: #ff6b35;\n}\n.service-card[_ngcontent-%COMP%]:hover   .service-card__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  transform: translateX(5px);\n}\n.service-card__icon[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  background:\n    linear-gradient(\n      135deg,\n      #1a2a6c 0%,\n      #2d4373 100%);\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 1.5rem 1.5rem 0;\n  transition: all 0.3s ease;\n}\n.service-card__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: white;\n  transition: color 0.3s ease;\n}\n.service-card__content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1;\n}\n.service-card__title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n  line-height: 1.3;\n}\n.service-card__description[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.service-card__capabilities[_ngcontent-%COMP%], .service-card__industries[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #edf2f7;\n}\n.service-card__capabilities-title[_ngcontent-%COMP%], .service-card__industries-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.service-card__capabilities-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.service-card__capabilities-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #4a5568;\n}\n.service-card__capabilities-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #38a169;\n  font-size: 1rem;\n}\n.service-card__industries-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.service-card__industry-tag[_ngcontent-%COMP%] {\n  background: #edf2f7;\n  color: #4a5568;\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.service-card__footer[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n  background: #f8fafc;\n  border-top: 1px solid #edf2f7;\n}\n.service-card__link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #1a2a6c;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.service-card__link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  transition: transform 0.3s ease;\n}\n/*# sourceMappingURL=service-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceCardComponent, { className: "ServiceCardComponent", filePath: "src\\app\\components\\service-card\\service-card.component.ts", lineNumber: 13 });
})();

export {
  ServiceCardComponent
};
//# sourceMappingURL=chunk-ZIYX7I32.js.map
