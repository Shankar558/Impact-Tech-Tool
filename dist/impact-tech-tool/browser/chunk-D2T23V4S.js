import {
  ServiceCardComponent
} from "./chunk-ZIYX7I32.js";
import {
  CapabilityCardComponent
} from "./chunk-QQBMAW7S.js";
import {
  ProjectCardComponent
} from "./chunk-UMV5UMXS.js";
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
  AnimationService,
  CommonModule,
  DataService,
  NgForOf,
  RouterLink,
  RouterModule,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-5DBEWC26.js";

// src/app/pages/home/home.component.ts
var _c0 = () => ["High Accuracy Stamping Tools", "Jigs & Fixtures", "Checking Gauges", "EDM Wire Cutting", "Prototype Parts", "Custom Engineering"];
function HomeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 10);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(feature_r1);
  }
}
function HomeComponent_app_service_card_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-service-card", 36);
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    \u0275\u0275property("service", service_r2);
  }
}
function HomeComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3", 39);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.description);
  }
}
function HomeComponent_app_capability_card_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-capability-card", 41);
  }
  if (rf & 2) {
    const capability_r4 = ctx.$implicit;
    \u0275\u0275property("capability", capability_r4);
  }
}
function HomeComponent_app_project_card_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-project-card", 42);
  }
  if (rf & 2) {
    const project_r5 = ctx.$implicit;
    \u0275\u0275property("project", project_r5);
  }
}
var HomeComponent = class _HomeComponent {
  constructor(dataService, animationService) {
    this.dataService = dataService;
    this.animationService = animationService;
    this.services = [];
    this.capabilities = [];
    this.projects = [];
    this.statistics = [];
    this.whyChooseUs = [
      {
        icon: "precision_manufacturing",
        title: "High Precision Manufacturing",
        description: "State-of-the-art precision manufacturing with accuracy from 5\xB5m to 10\xB5m."
      },
      {
        icon: "verified",
        title: "Automotive Industry Experience",
        description: "Proven track record in serving the automotive industry with reliable solutions."
      },
      {
        icon: "engineering",
        title: "Custom Engineering Solutions",
        description: "Tailored engineering solutions designed to meet your specific requirements."
      },
      {
        icon: "architecture",
        title: "Design to Manufacturing Support",
        description: "Complete support from initial design through final manufacturing and delivery."
      },
      {
        icon: "groups",
        title: "Skilled Tool Room Team",
        description: "Experienced and skilled team of tool makers and machinists."
      },
      {
        icon: "verified_user",
        title: "Quality-Focused Process",
        description: "Rigorous quality control at every stage of the manufacturing process."
      },
      {
        icon: "schedule",
        title: "Reliable Delivery",
        description: "On-time delivery commitment with consistent quality and precision."
      },
      {
        icon: "assessment",
        title: "Accuracy from 5\xB5m to 10\xB5m",
        description: "Dimensional accuracy maintained within 5 to 10 microns for all precision components."
      }
    ];
  }
  ngOnInit() {
    this.services = this.dataService.getServices();
    this.capabilities = this.dataService.getCapabilities();
    this.projects = this.dataService.getProjects().slice(0, 6);
    this.statistics = this.dataService.getStatistics();
  }
  ngAfterViewInit() {
    this.animationService.observeElements();
  }
  static {
    this.\u0275fac = function HomeComponent_Factory(t) {
      return new (t || _HomeComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(AnimationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 47, vars: 10, consts: [["title", "Precision Engineering. Reliable Manufacturing.", "subtitle", "One Stop Solution for Design, Stamping Tooling, Fixtures, Gauges and Proto Build.", 3, "showCTA"], ["id", "introduction", 1, "section", "introduction"], [1, "container"], [1, "introduction__grid"], [1, "introduction__content"], ["subtitle", "Who We Are", "title", "Engineering Excellence Through Precision", "description", "Impact Tech Tool specializes in high-accuracy stamping tool design and manufacturing, jigs, fixtures, checking gauges, prototype parts, EDM wire cutting, and custom engineering solutions.", 3, "centered"], [1, "introduction__text"], [1, "introduction__features"], ["class", "introduction__feature", 4, "ngFor", "ngForOf"], ["routerLink", "/about", 1, "btn", "btn--primary", "btn--large"], [1, "material-icons"], [1, "introduction__image"], [1, "introduction__image-main"], [1, "introduction__image-placeholder"], [1, "introduction__stats"], [3, "statistics"], ["id", "services", 1, "section", "section--gray", "services"], ["subtitle", "Our Services", "title", "Core Manufacturing Services", "description", "We provide a comprehensive range of precision manufacturing and engineering services to meet your industrial requirements."], [1, "grid", "grid--3", "services__grid"], ["class", "animate-on-scroll", 3, "service", 4, "ngFor", "ngForOf"], ["id", "why-choose", 1, "section", "why-choose"], ["subtitle", "Why Choose Us", "title", "The Impact Tech Tool Advantage", "description", "We combine precision engineering expertise with reliable manufacturing processes to deliver exceptional results."], [1, "grid", "grid--4", "why-choose__grid"], ["class", "why-choose__item animate-on-scroll", 4, "ngFor", "ngForOf"], ["id", "capabilities", 1, "section", "section--dark", "capabilities"], ["subtitle", "Our Capabilities", "title", "Manufacturing Capabilities", "description", "Explore our advanced manufacturing capabilities and precision engineering expertise.", 3, "lightTheme"], [1, "grid", "grid--4", "capabilities__grid"], ["class", "animate-on-scroll", 3, "capability", 4, "ngFor", "ngForOf"], ["id", "projects", 1, "section", "projects"], ["subtitle", "Featured Work", "title", "Our Featured Projects", "description", "A selection of our completed manufacturing projects across various industries."], [1, "grid", "grid--3", "projects__grid"], ["class", "animate-on-scroll", 3, "project", 4, "ngFor", "ngForOf"], [1, "projects__button"], ["routerLink", "/projects", 1, "btn", "btn--secondary", "btn--large"], ["title", "Looking for a Reliable Manufacturing Partner?", "description", "Partner with Impact Tech Tool for precision engineering, tooling, fixtures, gauges, and prototype manufacturing solutions.", "primaryButtonText", "Request a Quote", "secondaryButtonText", "Contact Our Team"], [1, "introduction__feature"], [1, "animate-on-scroll", 3, "service"], [1, "why-choose__item", "animate-on-scroll"], [1, "why-choose__icon"], [1, "why-choose__title"], [1, "why-choose__description"], [1, "animate-on-scroll", 3, "capability"], [1, "animate-on-scroll", 3, "project"]], template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-hero", 0);
        \u0275\u0275elementStart(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275element(5, "app-section-header", 5);
        \u0275\u0275elementStart(6, "p", 6);
        \u0275\u0275text(7, " We support automotive and non-automotive industries with precision-focused manufacturing and end-to-end engineering solutions. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275template(9, HomeComponent_div_9_Template, 5, 1, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "a", 9);
        \u0275\u0275text(11, " Learn More About Us ");
        \u0275\u0275elementStart(12, "span", 10);
        \u0275\u0275text(13, "arrow_forward");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12)(16, "div", 13)(17, "span", 10);
        \u0275\u0275text(18, "precision_manufacturing");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(19, "div", 14);
        \u0275\u0275element(20, "app-statistics", 15);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(21, "section", 16)(22, "div", 2);
        \u0275\u0275element(23, "app-section-header", 17);
        \u0275\u0275elementStart(24, "div", 18);
        \u0275\u0275template(25, HomeComponent_app_service_card_25_Template, 1, 1, "app-service-card", 19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(26, "section", 20)(27, "div", 2);
        \u0275\u0275element(28, "app-section-header", 21);
        \u0275\u0275elementStart(29, "div", 22);
        \u0275\u0275template(30, HomeComponent_div_30_Template, 8, 3, "div", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "section", 24)(32, "div", 2);
        \u0275\u0275element(33, "app-section-header", 25);
        \u0275\u0275elementStart(34, "div", 26);
        \u0275\u0275template(35, HomeComponent_app_capability_card_35_Template, 1, 1, "app-capability-card", 27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "section", 28)(37, "div", 2);
        \u0275\u0275element(38, "app-section-header", 29);
        \u0275\u0275elementStart(39, "div", 30);
        \u0275\u0275template(40, HomeComponent_app_project_card_40_Template, 1, 1, "app-project-card", 31);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 32)(42, "a", 33);
        \u0275\u0275text(43, " View All Projects ");
        \u0275\u0275elementStart(44, "span", 10);
        \u0275\u0275text(45, "arrow_forward");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(46, "app-cta", 34);
      }
      if (rf & 2) {
        \u0275\u0275property("showCTA", true);
        \u0275\u0275advance(5);
        \u0275\u0275property("centered", false);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c0));
        \u0275\u0275advance(11);
        \u0275\u0275property("statistics", ctx.statistics);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.services);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.whyChooseUs);
        \u0275\u0275advance(3);
        \u0275\u0275property("lightTheme", true);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.capabilities);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.projects);
      }
    }, dependencies: [
      CommonModule,
      NgForOf,
      RouterModule,
      RouterLink,
      HeroComponent,
      SectionHeaderComponent,
      ServiceCardComponent,
      CapabilityCardComponent,
      ProjectCardComponent,
      StatisticsComponent,
      CTAComponent
    ], styles: [`

.introduction__grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
@media (max-width: 1023px) {
  .introduction__grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
.introduction__text[_ngcontent-%COMP%] {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 2rem;
}
.introduction__features[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
@media (max-width: 767px) {
  .introduction__features[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
.introduction__feature[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 500;
  color: #2d3748;
}
.introduction__feature[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: #ff6b35;
  font-size: 1.25rem;
}
.introduction__image[_ngcontent-%COMP%] {
  position: relative;
}
.introduction__image-main[_ngcontent-%COMP%] {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  margin-bottom: 2rem;
}
.introduction__image-placeholder[_ngcontent-%COMP%] {
  aspect-ratio: 4/3;
  background:
    linear-gradient(
      135deg,
      #1a2a6c 0%,
      #2d4373 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.introduction__image-placeholder[_ngcontent-%COMP%]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="0.5"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}
.introduction__image-placeholder[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 2;
}
.why-choose__item[_ngcontent-%COMP%] {
  text-align: center;
  padding: 1.5rem;
  transition: all 0.3s ease;
}
.why-choose__item[_ngcontent-%COMP%]:hover {
  transform: translateY(-5px);
}
.why-choose__icon[_ngcontent-%COMP%] {
  width: 60px;
  height: 60px;
  background:
    linear-gradient(
      135deg,
      #ff6b35 0%,
      #ff8c5a 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}
.why-choose__icon[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  color: white;
  font-size: 1.75rem;
}
.why-choose__title[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #1a2a6c;
  margin-bottom: 0.5rem;
}
.why-choose__description[_ngcontent-%COMP%] {
  font-size: 0.9rem;
  color: #4a5568;
  line-height: 1.6;
  margin: 0;
}
.capabilities__grid[_ngcontent-%COMP%]   app-capability-card[_ngcontent-%COMP%] {
  background: rgba(255, 255, 255, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.projects__button[_ngcontent-%COMP%] {
  text-align: center;
  margin-top: 3rem;
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
  cursor: pointer;
}
.btn--primary[_ngcontent-%COMP%] {
  background-color: #1a2a6c;
  color: white;
  border-color: #1a2a6c;
}
.btn--primary[_ngcontent-%COMP%]:hover {
  background-color: #0f1a4a;
  border-color: #0f1a4a;
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(26, 42, 108, 0.3);
}
.btn--secondary[_ngcontent-%COMP%] {
  background-color: transparent;
  color: #1a2a6c;
  border-color: #1a2a6c;
}
.btn--secondary[_ngcontent-%COMP%]:hover {
  background-color: #1a2a6c;
  color: white;
  transform: translateY(-3px);
}
.btn--large[_ngcontent-%COMP%] {
  padding: 1rem 2rem;
  font-size: 1rem;
}
.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {
  font-size: 1.2rem;
}
/*# sourceMappingURL=home.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\pages\\home\\home.component.ts", lineNumber: 32 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-D2T23V4S.js.map
