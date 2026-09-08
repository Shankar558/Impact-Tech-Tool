import {
  CommonModule,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-5DBEWC26.js";

// src/app/components/statistics/statistics.component.ts
var _c0 = ["statsContainer"];
function StatisticsComponent_div_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const stat_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(stat_r1.icon);
  }
}
function StatisticsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, StatisticsComponent_div_3_span_1_Template, 2, 1, "span", 5);
    \u0275\u0275elementStart(2, "div", 6)(3, "span", 7);
    \u0275\u0275text(4, "0");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", stat_r1.icon);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(stat_r1.suffix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r1.label);
  }
}
var StatisticsComponent = class _StatisticsComponent {
  constructor() {
    this.statistics = [];
    this.darkTheme = false;
    this.animated = false;
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    this.setupObserver();
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
  setupObserver() {
    if (typeof IntersectionObserver === "undefined") {
      this.animateAll();
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.animated) {
          this.animated = true;
          this.animateAll();
          this.observer.disconnect();
        }
      });
    }, { threshold: 0.2 });
    if (this.statsContainer) {
      this.observer.observe(this.statsContainer.nativeElement);
    }
  }
  animateAll() {
    this.statistics.forEach((stat, index) => {
      const element = this.statsContainer?.nativeElement?.querySelectorAll(".statistics__value")[index];
      if (element) {
        this.animateCounter(element, stat.value, 2e3);
      }
    });
  }
  animateCounter(element, target, duration) {
    const startTime = performance.now();
    const startValue = 0;
    const updateValue = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
      element.textContent = currentValue.toString();
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        element.textContent = target.toString();
      }
    };
    requestAnimationFrame(updateValue);
  }
  static {
    this.\u0275fac = function StatisticsComponent_Factory(t) {
      return new (t || _StatisticsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatisticsComponent, selectors: [["app-statistics"]], viewQuery: function StatisticsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.statsContainer = _t.first);
      }
    }, inputs: { statistics: "statistics", darkTheme: "darkTheme" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 3, consts: [["statsContainer", ""], [1, "statistics"], [1, "statistics__grid"], ["class", "statistics__item", 4, "ngFor", "ngForOf"], [1, "statistics__item"], ["class", "statistics__icon material-icons", 4, "ngIf"], [1, "statistics__value-wrapper"], [1, "statistics__value"], [1, "statistics__suffix"], [1, "statistics__label"], [1, "statistics__icon", "material-icons"]], template: function StatisticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2);
        \u0275\u0275template(3, StatisticsComponent_div_3_Template, 9, 3, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("statistics--dark", ctx.darkTheme);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngForOf", ctx.statistics);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.statistics__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n}\n@media (max-width: 1023px) {\n  .statistics__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1.5rem;\n  }\n}\n@media (max-width: 767px) {\n  .statistics__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 1rem;\n  }\n}\n.statistics__item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  transition: all 0.3s ease;\n}\n.statistics__item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.statistics__icon[_ngcontent-%COMP%] {\n  color: #ff6b35;\n  font-size: 2.5rem;\n  margin-bottom: 0.25rem;\n}\n.statistics__value-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.25rem;\n}\n.statistics__value[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  line-height: 1;\n  font-family: "Inter", sans-serif;\n}\n@media (max-width: 767px) {\n  .statistics__value[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n.statistics__suffix[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: #ff6b35;\n  line-height: 1;\n}\n.statistics__label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  color: #4a5568;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.statistics--dark[_ngcontent-%COMP%]   .statistics__item[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.statistics--dark[_ngcontent-%COMP%]   .statistics__value[_ngcontent-%COMP%] {\n  color: white;\n}\n.statistics--dark[_ngcontent-%COMP%]   .statistics__label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n.statistics--dark[_ngcontent-%COMP%]   .statistics__icon[_ngcontent-%COMP%] {\n  color: #ff8c5a;\n}\n/*# sourceMappingURL=statistics.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatisticsComponent, { className: "StatisticsComponent", filePath: "src\\app\\components\\statistics\\statistics.component.ts", lineNumber: 12 });
})();

export {
  StatisticsComponent
};
//# sourceMappingURL=chunk-ODAWV2AL.js.map
