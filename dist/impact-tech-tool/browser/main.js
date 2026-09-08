import {
  AnimationService,
  CommonModule,
  NavigationEnd,
  NgForOf,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  provideZoneChangeDetection,
  withInMemoryScrolling,
  withViewTransitions,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-5DBEWC26.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadComponent: () => import("./chunk-D2T23V4S.js").then((m) => m.HomeComponent),
    title: "Impact Tech Tool | Precision Engineering & Manufacturing Solutions"
  },
  {
    path: "about",
    loadComponent: () => import("./chunk-NW5OXSQM.js").then((m) => m.AboutComponent),
    title: "About Us | Impact Tech Tool"
  },
  {
    path: "services",
    loadComponent: () => import("./chunk-TEDGMHDH.js").then((m) => m.ServicesComponent),
    title: "Our Services | Impact Tech Tool"
  },
  {
    path: "capabilities",
    loadComponent: () => import("./chunk-WVXCFSKN.js").then((m) => m.CapabilitiesComponent),
    title: "Capabilities | Impact Tech Tool"
  },
  {
    path: "projects",
    loadComponent: () => import("./chunk-3J4BVMXL.js").then((m) => m.ProjectsComponent),
    title: "Projects | Impact Tech Tool"
  },
  {
    path: "infrastructure",
    loadComponent: () => import("./chunk-I52KQMVM.js").then((m) => m.InfrastructureComponent),
    title: "Infrastructure | Impact Tech Tool"
  },
  {
    path: "quality",
    loadComponent: () => import("./chunk-EMQRJCBX.js").then((m) => m.QualityComponent),
    title: "Quality | Impact Tech Tool"
  },
  {
    path: "contact",
    loadComponent: () => import("./chunk-KJN6VIHC.js").then((m) => m.ContactComponent),
    title: "Contact Us | Impact Tech Tool"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    }), withViewTransitions())
  ]
};

// src/app/components/navbar/navbar.component.ts
var _c0 = (a0) => ({ exact: a0 });
function NavbarComponent_li_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 15)(1, "a", 16);
    \u0275\u0275listener("click", function NavbarComponent_li_16_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMenu());
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", item_r3.route)("routerLinkActiveOptions", \u0275\u0275pureFunction1(3, _c0, item_r3.route === "/"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.label, " ");
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor() {
    this.isMenuOpen = false;
    this.isScrolled = false;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.navItems = [
      { label: "Home", route: "/" },
      { label: "About Us", route: "/about" },
      { label: "Services", route: "/services" },
      { label: "Capabilities", route: "/capabilities" },
      { label: "Projects", route: "/projects" },
      { label: "Infrastructure", route: "/infrastructure" },
      { label: "Quality", route: "/quality" },
      { label: "Contact", route: "/contact" }
    ];
  }
  ngOnInit() {
  }
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }
  scrollToSection(sectionId) {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 22, vars: 7, consts: [[1, "navbar"], [1, "navbar__container"], ["routerLink", "/", 1, "navbar__logo"], [1, "navbar__logo-icon"], [1, "navbar__logo-text"], [1, "navbar__company-name"], [1, "navbar__tagline"], ["aria-label", "Toggle navigation menu", 1, "navbar__toggle", 3, "click"], [1, "navbar__toggle-bar"], [1, "navbar__menu"], [1, "navbar__nav"], ["class", "navbar__nav-item", 4, "ngFor", "ngForOf"], [1, "navbar__cta"], ["routerLink", "/contact", 1, "btn", "btn--accent", 3, "click"], [1, "material-icons"], [1, "navbar__nav-item"], ["routerLinkActive", "active", 1, "navbar__nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
        \u0275\u0275text(4, "IT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4)(6, "span", 5);
        \u0275\u0275text(7, "IMPACT TECH TOOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "span", 6);
        \u0275\u0275text(9, "Precision Engineering");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "button", 7);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_10_listener() {
          return ctx.toggleMenu();
        });
        \u0275\u0275element(11, "span", 8)(12, "span", 8)(13, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "ul", 10);
        \u0275\u0275template(16, NavbarComponent_li_16_Template, 3, 5, "li", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 12)(18, "a", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_18_listener() {
          return ctx.closeMenu();
        });
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "request_quote");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " Request a Quote ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.isScrolled);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("active", ctx.isMenuOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("active", ctx.isMenuOpen);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.navItems);
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  background-color: transparent;\n  transition: all 0.3s ease;\n  padding: 1rem 0;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  background-color: #1a2a6c;\n  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);\n  padding: 0.5rem 0;\n}\n.navbar__container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n@media (max-width: 1023px) {\n  .navbar__container[_ngcontent-%COMP%] {\n    padding: 0 1.5rem;\n  }\n}\n@media (max-width: 767px) {\n  .navbar__container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n.navbar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  text-decoration: none;\n  color: white;\n}\n.navbar__logo-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.navbar__logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n@media (max-width: 767px) {\n  .navbar__logo-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar__company-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  line-height: 1.2;\n}\n.navbar__tagline[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.8;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n.navbar__toggle[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 30px;\n  height: 21px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 1001;\n}\n@media (max-width: 1023px) {\n  .navbar__toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.navbar__toggle-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3px;\n  background-color: white;\n  border-radius: 2px;\n  transition: all 0.3s ease;\n}\n.navbar__toggle.active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(1) {\n  transform: translateY(9px) rotate(45deg);\n}\n.navbar__toggle.active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.navbar__toggle.active[_ngcontent-%COMP%]   .navbar__toggle-bar[_ngcontent-%COMP%]:nth-child(3) {\n  transform: translateY(-9px) rotate(-45deg);\n}\n.navbar__menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n@media (max-width: 1023px) {\n  .navbar__menu[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #1a2a6c;\n    flex-direction: column;\n    justify-content: center;\n    gap: 2rem;\n    transform: translateX(100%);\n    transition: transform 0.3s ease;\n  }\n  .navbar__menu.active[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n.navbar__nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  list-style: none;\n  gap: 0.5rem;\n  margin: 0;\n  padding: 0;\n}\n@media (max-width: 1023px) {\n  .navbar__nav[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n@media (max-width: 1023px) {\n  .navbar__nav-item[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n.navbar__nav-link[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.75rem 1rem;\n  color: white;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  transition: all 0.3s ease;\n  border-radius: 6px;\n}\n.navbar__nav-link[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  color: #ff6b35;\n}\n.navbar__nav-link.active[_ngcontent-%COMP%] {\n  color: #ff6b35;\n  background-color: rgba(255, 107, 53, 0.1);\n}\n@media (max-width: 1023px) {\n  .navbar__nav-link[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 1023px) {\n  .navbar__cta[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n  }\n  .navbar__cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    font-size: 1rem;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-radius: 6px;\n  text-decoration: none;\n  transition: all 0.3s ease;\n}\n.btn--accent[_ngcontent-%COMP%] {\n  background-color: #ff6b35;\n  color: white;\n  border: 2px solid #ff6b35;\n}\n.btn--accent[_ngcontent-%COMP%]:hover {\n  background-color: #e55a24;\n  border-color: #e55a24;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);\n}\n.btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 12 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_li_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 28);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", link_r1.route);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function FooterComponent_li_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r2);
  }
}
function FooterComponent_a_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r3 = ctx.$implicit;
    \u0275\u0275property("href", "mailto:" + email_r3, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r3, " ");
  }
}
var FooterComponent = class _FooterComponent {
  constructor() {
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    this.quickLinks = [
      { label: "Home", route: "/" },
      { label: "About", route: "/about" },
      { label: "Services", route: "/services" },
      { label: "Capabilities", route: "/capabilities" },
      { label: "Projects", route: "/projects" },
      { label: "Contact", route: "/contact" }
    ];
    this.services = [
      "Stamping Tools",
      "Jigs & Fixtures",
      "Checking Gauges",
      "Welding Fixtures",
      "Prototype Parts",
      "EDM Wire Cutting"
    ];
    this.contactInfo = {
      emails: [
        "impacttechtool@gmail.com",
        "ittdesignteam@gmail.com"
      ],
      phone: "+91-XXXXXXXXXX",
      address: "India"
    };
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 61, vars: 7, consts: [[1, "footer"], [1, "footer__main"], [1, "container"], [1, "footer__grid"], [1, "footer__company"], [1, "footer__logo"], [1, "footer__logo-icon"], [1, "footer__logo-text"], [1, "footer__company-name"], [1, "footer__tagline"], [1, "footer__description"], [1, "footer__social"], ["href", "#", "aria-label", "LinkedIn", 1, "footer__social-link"], [1, "material-icons"], ["href", "#", "aria-label", "Twitter", 1, "footer__social-link"], ["href", "#", "aria-label", "Facebook", 1, "footer__social-link"], [1, "footer__links"], [1, "footer__title"], [1, "footer__list"], [4, "ngFor", "ngForOf"], [1, "footer__contact"], [1, "footer__contact-item"], ["class", "footer__link", 3, "href", 4, "ngFor", "ngForOf"], [1, "footer__link", 3, "href"], [1, "footer__bottom"], [1, "footer__bottom-content"], [1, "footer__copyright"], ["aria-label", "Scroll to top", 1, "footer__scroll-top", 3, "click"], [1, "footer__link", 3, "routerLink"], ["routerLink", "/services", 1, "footer__link"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "span", 6);
        \u0275\u0275text(7, "IT");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
        \u0275\u0275text(10, "IMPACT TECH TOOL");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "Precision Engineering");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "p", 10);
        \u0275\u0275text(14, " One Stop Solution for Design, Stamping Tooling, Fixtures, Gauges and Proto Build. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "a", 12)(17, "span", 13);
        \u0275\u0275text(18, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "a", 14)(20, "span", 13);
        \u0275\u0275text(21, "tag");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "a", 15)(23, "span", 13);
        \u0275\u0275text(24, "public");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(25, "div", 16)(26, "h4", 17);
        \u0275\u0275text(27, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "ul", 18);
        \u0275\u0275template(29, FooterComponent_li_29_Template, 3, 2, "li", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 16)(31, "h4", 17);
        \u0275\u0275text(32, "Our Services");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "ul", 18);
        \u0275\u0275template(34, FooterComponent_li_34_Template, 3, 1, "li", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "div", 20)(36, "h4", 17);
        \u0275\u0275text(37, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 21)(39, "span", 13);
        \u0275\u0275text(40, "email");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div");
        \u0275\u0275template(42, FooterComponent_a_42_Template, 2, 2, "a", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 21)(44, "span", 13);
        \u0275\u0275text(45, "phone");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "a", 23);
        \u0275\u0275text(47);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 21)(49, "span", 13);
        \u0275\u0275text(50, "location_on");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 24)(54, "div", 2)(55, "div", 25)(56, "p", 26);
        \u0275\u0275text(57);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "button", 27);
        \u0275\u0275listener("click", function FooterComponent_Template_button_click_58_listener() {
          return ctx.scrollToTop();
        });
        \u0275\u0275elementStart(59, "span", 13);
        \u0275\u0275text(60, "keyboard_arrow_up");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(29);
        \u0275\u0275property("ngForOf", ctx.quickLinks);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.services);
        \u0275\u0275advance(8);
        \u0275\u0275property("ngForOf", ctx.contactInfo.emails);
        \u0275\u0275advance(4);
        \u0275\u0275property("href", "tel:" + ctx.contactInfo.phone, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate(ctx.contactInfo.phone);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.contactInfo.address);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" \xA9 ", ctx.currentYear, " Impact Tech Tool. All Rights Reserved. ");
      }
    }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ['\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #0f1a4a;\n  color: white;\n}\n.footer__main[_ngcontent-%COMP%] {\n  padding: 4rem 0 2rem;\n}\n.footer__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1.5fr;\n  gap: 3rem;\n}\n@media (max-width: 1023px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 2rem;\n  }\n}\n@media (max-width: 767px) {\n  .footer__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 1023px) {\n  .footer__company[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 767px) {\n  .footer__company[_ngcontent-%COMP%] {\n    grid-column: span 1;\n  }\n}\n.footer__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.footer__logo-icon[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  background:\n    linear-gradient(\n      135deg,\n      #ff6b35 0%,\n      #ff8c5a 100%);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.footer__logo-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.footer__company-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  line-height: 1.2;\n  color: white;\n}\n.footer__tagline[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  opacity: 0.8;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n  color: white;\n}\n.footer__description[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  line-height: 1.7;\n  margin-bottom: 1.5rem;\n  font-size: 0.95rem;\n}\n.footer__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.footer__social-link[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  transition: all 0.3s ease;\n}\n.footer__social-link[_ngcontent-%COMP%]:hover {\n  background-color: #ff6b35;\n  transform: translateY(-3px);\n}\n.footer__social-link[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.footer__title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n  color: white;\n  position: relative;\n  padding-bottom: 0.75rem;\n}\n.footer__title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 40px;\n  height: 3px;\n  background-color: #ff6b35;\n  border-radius: 2px;\n}\n.footer__list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.footer__list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.footer__link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n  display: inline-block;\n}\n.footer__link[_ngcontent-%COMP%]:hover {\n  color: #ff6b35;\n  padding-left: 5px;\n}\n.footer__contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n  align-items: flex-start;\n}\n.footer__contact-item[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #ff6b35;\n  font-size: 1.25rem;\n  margin-top: 2px;\n}\n.footer__contact-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.footer__bottom[_ngcontent-%COMP%] {\n  background-color: #0a1033;\n  padding: 1.5rem 0;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.footer__bottom-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n@media (max-width: 767px) {\n  .footer__bottom-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 1rem;\n  }\n}\n.footer__copyright[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.footer__scroll-top[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background-color: #ff6b35;\n  border: none;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.footer__scroll-top[_ngcontent-%COMP%]:hover {\n  background-color: #e55a24;\n  transform: translateY(-3px);\n}\n.footer__scroll-top[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 0 2rem;\n}\n@media (max-width: 767px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 12 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  constructor(router, animationService) {
    this.router = router;
    this.animationService = animationService;
    this.title = "Impact Tech Tool";
  }
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AnimationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-navbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "app-footer");
      }
    }, dependencies: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\n.main-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 15 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
