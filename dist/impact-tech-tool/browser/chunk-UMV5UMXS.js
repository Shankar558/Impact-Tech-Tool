import {
  CommonModule,
  EventEmitter,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/components/project-card/project-card.component.ts
function ProjectCardComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.project.category);
  }
}
function ProjectCardComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14)(1, "span", 5);
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.project.client, " ");
  }
}
function ProjectCardComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.project.year);
  }
}
var ProjectCardComponent = class _ProjectCardComponent {
  constructor() {
    this.showCategory = true;
    this.viewDetails = new EventEmitter();
  }
  onViewDetails() {
    this.viewDetails.emit(this.project);
  }
  onImageError(event) {
    event.target.src = "assets/images/placeholder.svg";
  }
  static {
    this.\u0275fac = function ProjectCardComponent_Factory(t) {
      return new (t || _ProjectCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectCardComponent, selectors: [["app-project-card"]], inputs: { project: "project", showCategory: "showCategory" }, outputs: { viewDetails: "viewDetails" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 17, vars: 7, consts: [[1, "project-card"], [1, "project-card__image-wrapper"], [1, "project-card__image", 3, "error", "src", "alt"], [1, "project-card__overlay"], [1, "project-card__view-btn", 3, "click"], [1, "material-icons"], ["class", "project-card__category", 4, "ngIf"], [1, "project-card__content"], [1, "project-card__title"], [1, "project-card__description"], [1, "project-card__footer"], ["class", "project-card__client", 4, "ngIf"], ["class", "project-card__year", 4, "ngIf"], [1, "project-card__category"], [1, "project-card__client"], [1, "project-card__year"]], template: function ProjectCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "img", 2);
        \u0275\u0275listener("error", function ProjectCardComponent_Template_img_error_2_listener($event) {
          return ctx.onImageError($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
        \u0275\u0275listener("click", function ProjectCardComponent_Template_button_click_4_listener() {
          return ctx.onViewDetails();
        });
        \u0275\u0275elementStart(5, "span", 5);
        \u0275\u0275text(6, "visibility");
        \u0275\u0275elementEnd();
        \u0275\u0275text(7, " View Details ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, ProjectCardComponent_span_8_Template, 2, 1, "span", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 7)(10, "h3", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "p", 9);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275template(15, ProjectCardComponent_span_15_Template, 4, 1, "span", 11)(16, ProjectCardComponent_span_16_Template, 2, 1, "span", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.project.image, \u0275\u0275sanitizeUrl)("alt", ctx.project.title);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngIf", ctx.showCategory);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.project.title);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.project.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.project.client);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.project.year);
      }
    }, dependencies: [CommonModule, NgIf], styles: ["\n\n.project-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  transition: all 0.3s ease;\n  height: 100%;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-card__image[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-card__overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.project-card__image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  aspect-ratio: 4/3;\n}\n.project-card__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.project-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(26, 42, 108, 0.9) 0%,\n      transparent 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n.project-card__view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.25rem;\n  background: #ff6b35;\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.project-card__view-btn[_ngcontent-%COMP%]:hover {\n  background: #e55a24;\n  transform: translateY(-2px);\n}\n.project-card__view-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.project-card__category[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  left: 1rem;\n  background: #ff6b35;\n  color: white;\n  padding: 0.35rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.project-card__content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.project-card__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1a2a6c;\n  margin-bottom: 0.75rem;\n  line-height: 1.3;\n}\n.project-card__description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #4a5568;\n  line-height: 1.6;\n  margin-bottom: 1rem;\n}\n.project-card__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid #edf2f7;\n}\n.project-card__client[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #4a5568;\n}\n.project-card__client[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #1a2a6c;\n}\n.project-card__year[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #a0aec0;\n  font-weight: 500;\n}\n/*# sourceMappingURL=project-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectCardComponent, { className: "ProjectCardComponent", filePath: "src\\app\\components\\project-card\\project-card.component.ts", lineNumber: 12 });
})();

export {
  ProjectCardComponent
};
//# sourceMappingURL=chunk-UMV5UMXS.js.map
