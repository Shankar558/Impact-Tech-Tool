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
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
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

// src/app/pages/about/about.component.ts
function AboutComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 29);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(value_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r1.description);
  }
}
function AboutComponent_div_41_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "div", 35)(2, "div", 36)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h4", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 38);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(member_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.role);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r2.description);
  }
}
function AboutComponent_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275element(1, "span", 40);
    \u0275\u0275elementEnd();
  }
}
function AboutComponent_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30)(1, "div", 31);
    \u0275\u0275template(2, AboutComponent_div_41_div_2_Template, 9, 3, "div", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AboutComponent_div_41_div_3_Template, 2, 0, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("organization__members--leader", level_r3 === 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.getMembersByLevel(level_r3));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r3.isLastLevel(level_r3));
  }
}
var AboutComponent = class _AboutComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.statistics = [];
    this.values = [];
    this.organization = [
      { icon: "account_balance", role: "Proprietor", description: "Strategic leadership and company direction", level: 1 },
      { icon: "supervisor_account", role: "Overall In-Charge", description: "Coordination of all operations and processes", level: 2 },
      { icon: "settings", role: "Operation Head", description: "Managing day-to-day manufacturing operations", level: 3 },
      { icon: "marketing", role: "Marketing, Purchase & Quality", description: "Business development, procurement and quality assurance", level: 3 },
      { icon: "admin_panel_settings", role: "Admin & Accounts", description: "Administrative and financial management", level: 3 },
      { icon: "build", role: "Tool Room Head", description: "Leading the tool room and manufacturing team", level: 3 },
      { icon: "code", role: "Programmer", description: "CNC/VMC programming and process development", level: 4 },
      { icon: "architecture", role: "Design Team", description: "Engineering design and development", level: 4 },
      { icon: "engineering", role: "Operators", description: "Skilled machine operators and technicians", level: 4 }
    ];
  }
  ngOnInit() {
    this.statistics = this.dataService.getStatistics();
    this.values = [
      {
        icon: "precision_manufacturing",
        title: "Precision First",
        description: "Every component we manufacture meets the highest standards of precision and accuracy."
      },
      {
        icon: "engineering",
        title: "Innovation",
        description: "We continuously innovate to provide better manufacturing solutions for our clients."
      },
      {
        icon: "verified_user",
        title: "Integrity",
        description: "We operate with complete transparency and ethical business practices."
      },
      {
        icon: "handshake",
        title: "Partnership",
        description: "We build long-term partnerships based on trust, quality, and reliability."
      }
    ];
  }
  getLevels() {
    const levels = /* @__PURE__ */ new Set();
    this.organization.forEach((member) => levels.add(member.level));
    return Array.from(levels).sort((a, b) => a - b);
  }
  getMembersByLevel(level) {
    return this.organization.filter((member) => member.level === level);
  }
  isLastLevel(level) {
    const levels = this.getLevels();
    return level === levels[levels.length - 1];
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 43, vars: 6, consts: [["title", "About Impact Tech Tool", "subtitle", "Precision engineering and manufacturing excellence since our inception, serving automotive and non-automotive industries.", 3, "showCTA", "minHeight"], ["id", "overview", 1, "section", "overview"], [1, "container"], [1, "overview__grid"], [1, "overview__content"], ["subtitle", "Company Overview", "title", "Who We Are", "description", "Impact Tech Tool's core competency is high-accuracy stamping tool design and manufacturing, jigs, fixtures, EDM wire cutting, SPM parts, and prototype part support for automotive and non-automotive industries.", 3, "centered"], [1, "overview__text"], [1, "overview__stats"], [1, "overview__stats-container"], [3, "statistics"], ["id", "mission-vision", 1, "section", "section--gray", "mission-vision"], [1, "mission-vision__grid"], [1, "mission-vision__card"], [1, "mission-vision__icon"], [1, "material-icons"], [1, "mission-vision__title"], [1, "mission-vision__text"], ["id", "values", 1, "section", "values"], ["subtitle", "Core Values", "title", "What Drives Us", "description", "Our values shape every decision we make and every product we manufacture."], [1, "grid", "grid--4", "values__grid"], ["class", "values__item", 4, "ngFor", "ngForOf"], ["id", "organization", 1, "section", "section--gray", "organization"], ["subtitle", "Our Team", "title", "Organizational Structure", "description", "A professional team structure that ensures quality, precision, and reliability in every project."], [1, "organization__structure"], ["class", "organization__level", 4, "ngFor", "ngForOf"], ["title", "Partner with Impact Tech Tool", "description", "Let us help you achieve precision manufacturing excellence with our comprehensive engineering and tooling solutions.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "values__item"], [1, "values__icon"], [1, "values__title"], [1, "values__description"], [1, "organization__level"], [1, "organization__members"], ["class", "organization__member", 4, "ngFor", "ngForOf"], ["class", "organization__connector", 4, "ngIf"], [1, "organization__member"], [1, "organization__member-card"], [1, "organization__member-icon"], [1, "organization__member-role"], [1, "organization__member-description"], [1, "organization__connector"], [1, "organization__connector-line"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-section-header", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, " As a dedicated B2B manufacturing and engineering company, we provide end-to-end solutions that span the complete product development cycle - from initial design concepts through to precision manufacturing and final delivery. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p", 6);
        \u0275\u0275text(9, " Our commitment to precision, quality, and reliability has made us a trusted partner for companies across the automotive sector and beyond. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
        \u0275\u0275element(12, "app-statistics", 9);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(13, "section", 10)(14, "div", 2)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "span", 14);
        \u0275\u0275text(19, "flag");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "h3", 15);
        \u0275\u0275text(21, "Our Mission");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p", 16);
        \u0275\u0275text(23, ' "Our mission is to exceed customer satisfaction through exceptional services, innovative solutions, and world-class products. We foster a safe, open, and creative culture that values diversity, ethics, and respect for the environment." ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 12)(25, "div", 13)(26, "span", 14);
        \u0275\u0275text(27, "visibility");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "h3", 15);
        \u0275\u0275text(29, "Our Vision");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p", 16);
        \u0275\u0275text(31, ' "Our vision is to be the partner of choice for our customers as a leading provider of tools, jigs, fixtures, prototype parts, and stamping assembly products." ');
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "section", 17)(33, "div", 2);
        \u0275\u0275element(34, "app-section-header", 18);
        \u0275\u0275elementStart(35, "div", 19);
        \u0275\u0275template(36, AboutComponent_div_36_Template, 8, 3, "div", 20);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(37, "section", 21)(38, "div", 2);
        \u0275\u0275element(39, "app-section-header", 22);
        \u0275\u0275elementStart(40, "div", 23);
        \u0275\u0275template(41, AboutComponent_div_41_Template, 4, 4, "div", 24);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(42, "app-cta", 25);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", false)("minHeight", "60vh");
        \u0275\u0275advance(5);
        \u0275\u0275property("centered", false);
        \u0275\u0275advance(7);
        \u0275\u0275property("statistics", ctx.statistics);
        \u0275\u0275advance(24);
        \u0275\u0275property("ngForOf", ctx.values);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.getLevels());
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      NgIf,
      HeroComponent,
      SectionHeaderComponent,
      StatisticsComponent,
      CTAComponent
    ], styles: [`

.overview__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
@media (max-width: 1023px) {
  .overview__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
.overview__text[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}
.overview__stats-container[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #0f1a4a 100%);
  border-radius: 16px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
}
.overview__stats-container[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}
.overview__stats-container[_ngcontent-%COMP%]   app-statistics[_ngcontent-%COMP%] {
  position: relative;
  z-index: 2;
  display: block;
}
.overview__stats-container[_ngcontent-%COMP%]   app-statistics[_ngcontent-%COMP%]     .statistics__item {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.overview__stats-container[_ngcontent-%COMP%]   app-statistics[_ngcontent-%COMP%]     .statistics__value {
  color: white;
}
.overview__stats-container[_ngcontent-%COMP%]   app-statistics[_ngcontent-%COMP%]     .statistics__label {
  color: rgba(255, 255, 255, 0.8);
}
.mission-vision__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
@media (max-width: 767px) {
  .mission-vision__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.mission-vision__card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.3s ease;
  border-top: 4px solid #ff6b35;
}
.mission-vision__card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}
.mission-vision__icon[_ngcontent-%COMP%] {
  width: 70px;
  height: 70px;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #2d4373 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}
.mission-vision__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ff6b35;
  font-size: 2rem;
}
.mission-vision__title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 1rem;
}
.mission-vision__text[_ngcontent-%COMP%] {
  font-size: 1.05rem;
  color: #4a5568;
  line-height: 1.7;
  font-style: italic;
  margin: 0;
}
.values__item[_ngcontent-%COMP%] {
  text-align: center;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
}
.values__item[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
}
.values__icon[_ngcontent-%COMP%] {
  width: 65px;
  height: 65px;
  background:
    linear-gradient(
      135deg,
      #ff6b35 0%,
      #ff8c5a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}
.values__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: white;
  font-size: 2rem;
}
.values__title[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.75rem;
}
.values__description[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}
.organization__level[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.organization__members[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}
.organization__members--leader[_ngcontent-%COMP%]   .organization__member-card[_ngcontent-%COMP%] {
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #2d4373 100%);
  border-color: #1a2a6c;
}
.organization__members--leader[_ngcontent-%COMP%]   .organization__member-card[_ngcontent-%COMP%]   .organization__member-icon[_ngcontent-%COMP%] {
  background: #ff6b35;
}
.organization__members--leader[_ngcontent-%COMP%]   .organization__member-card[_ngcontent-%COMP%]   .organization__member-role[_ngcontent-%COMP%] {
  color: white;
}
.organization__members--leader[_ngcontent-%COMP%]   .organization__member-card[_ngcontent-%COMP%]   .organization__member-description[_ngcontent-%COMP%] {
  color: rgba(255, 255, 255, 0.8);
}
.organization__member[_ngcontent-%COMP%] {
  width: 200px;
}
@media (max-width: 767px) {
  .organization__member[_ngcontent-%COMP%] {
    width: 100%;
    max-width: 220px;
  }
}
.organization__member-card[_ngcontent-%COMP%] {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  border: 2px solid #edf2f7;
  transition: all 0.3s ease;
}
.organization__member-card[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  border-color: #ff6b35;
}
.organization__member-icon[_ngcontent-%COMP%] {
  width: 50px;
  height: 50px;
  background:
    linear-gradient(
      135deg,
      #ff6b35 0%,
      #ff8c5a 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}
.organization__member-icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: white;
  font-size: 1.5rem;
}
.organization__member-role[_ngcontent-%COMP%] {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.5rem;
}
.organization__member-description[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: #718096;
  line-height: 1.5;
  margin: 0;
}
.organization__connector[_ngcontent-%COMP%] {
  width: 2px;
  height: 40px;
  background:
    linear-gradient(
      180deg,
      #1a2a6c,
      #ff6b35);
  margin: 1rem 0;
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
/*# sourceMappingURL=about.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\pages\\about\\about.component.ts", lineNumber: 30 });
})();
export {
  AboutComponent
};
//# sourceMappingURL=chunk-NW5OXSQM.js.map
