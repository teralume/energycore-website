(() => {
  "use strict";

  const APP_URL = "http://localhost:4200/iam/login";
  const DEFAULT_LANGUAGE = "en";
  const SUPPORTED_LANGUAGES = ["en", "es"];

  const translations = {
    en: {
      meta: {
        title: "EnergyCore | Energy intelligence for every space",
        description:
          "EnergyCore helps homes, professionals, and organizations monitor consumption, control connected devices, automate routines, and make better energy decisions.",
      },
      a11y: {
        skip: "Skip to main content",
        mainNav: "Main navigation",
        footerNav: "Footer navigation",
        brandHome: "EnergyCore home",
        openNav: "Open navigation",
        closeNav: "Close navigation",
        language: "Language",
        designedFor: "Designed for",
        audienceTabs: "EnergyCore audiences",
      },
      nav: {
        features: "Platform",
        how: "How it works",
        solutions: "For everyone",
        pricing: "Plans",
      },
      cta: {
        try: "Try EnergyCore",
        explore: "Explore the platform",
      },
      hero: {
        eyebrow: "Energy intelligence for every space",
        titleStart: "See the energy.",
        titleAccent: "Shape what happens next.",
        lead: "EnergyCore brings live consumption, connected devices, smart routines, and clear decisions into one calm command center.",
        proofTitle: "One platform, multiple realities.",
        proofText:
          "Built for homes, independent professionals, and organizations.",
        imageAlt:
          "A three-dimensional smart home and office connected to a glowing green energy core",
        imageCaption:
          "EnergyCore connects devices, spaces, and energy insight in one visual system.",
        signalControl: "Unified control",
        signalRoutine: "Adaptive routines",
      },
      audience: {
        label: "Designed to scale with",
        homes: "Homes",
        pros: "Professionals",
        orgs: "Organizations",
      },
      story: {
        eyebrow: "Energy should not be invisible",
        title: "Turn scattered signals into decisions you can act on.",
        body: "Bills arrive after the energy is already gone. Devices live in separate interfaces. Routines depend on memory. EnergyCore brings that fragmented picture together while it can still help.",
        link: "See the EnergyCore flow",
      },
      features: {
        eyebrow: "A clearer operating system for energy",
        title: "Everything important, connected by design.",
        lead: "From a single room to multiple locations, EnergyCore keeps monitoring, action, and learning in the same loop.",
        monitorKicker: "Live understanding",
        monitorTitle: "Know what is consuming energy now.",
        monitorText:
          "Read current demand, daily consumption, estimated cost, peaks, and trends without translating a wall of raw data.",
        controlKicker: "Connected control",
        controlTitle: "Act from the same place.",
        controlText:
          "Organize devices by space or group, then control them with clear operational states.",
        deviceActive: "Active device",
        routineKicker: "Smart routines",
        routineTitle: "Let the right actions repeat themselves.",
        routineText:
          "Schedule routines, apply operation modes, and reduce the effort behind consistent habits.",
        alertKicker: "Signals that matter",
        alertTitle: "Get context before consumption becomes a surprise.",
        alertText:
          "Set alert rules and notification preferences around the conditions that deserve attention.",
        alertPeak: "Consumption peak",
        alertNow: "Now",
        alertGoal: "Goal progress",
        alertToday: "Today",
        alertRoutine: "Routine completed",
        alertDone: "Done",
        goalKicker: "Continuous improvement",
        goalTitle: "Set goals. Learn from history. Export what matters.",
        goalText:
          "Follow energy goals, inspect historical readings, and turn reports into a more intentional next decision.",
      },
      how: {
        eyebrow: "From signal to action",
        title: "A simple loop with room to grow.",
        connectTitle: "Connect your spaces",
        connectText:
          "Create locations and rooms, then pair supported devices and arrange them around real life.",
        understandTitle: "Understand the picture",
        understandText:
          "Follow live demand, cost estimates, history, peaks, and the progress of your energy goals.",
        automateTitle: "Automate with intention",
        automateText:
          "Create routines, modes, alerts, and preferences that turn insight into consistent action.",
      },
      solutions: {
        eyebrow: "One core, shaped around you",
        title: "Useful at home. Ready for real operations.",
        lead: "Choose a perspective to see how the same connected foundation adapts to different needs.",
        homesTab: "Homes",
        prosTab: "Professionals",
        orgsTab: "Organizations",
        visualLive: "EnergyCore is reading the space",
      },
      pricing: {
        eyebrow: "Clear plans, real room to grow",
        title: "Start with what fits. Scale when it matters.",
        lead: "All prices are monthly and shown in Peruvian soles.",
        starterName: "Starter",
        starterText: "Focused essentials for a home or compact setup.",
        professionalName: "Professional",
        professionalText: "More automation and insight for active users.",
        enterpriseName: "Enterprise",
        enterpriseText: "Capacity for multiple spaces and larger operations.",
        month: "/month",
        recommended: "Recommended",
        chooseStarter: "Try Starter",
        chooseProfessional: "Try Professional",
        chooseEnterprise: "Try Enterprise",
        devices5: "Up to 5 devices",
        routines3: "Up to 3 routines",
        alerts5: "Up to 5 alerts",
        coreDashboard: "Core monitoring dashboard",
        devices20: "Up to 20 devices",
        routines15: "Up to 15 routines",
        alerts30: "Up to 30 alerts",
        reports: "Historical insight and report exports",
        devices100: "Up to 100 devices",
        routines100: "Up to 100 routines",
        alerts9999: "High-capacity alert management",
        multiLocation: "Multiple locations and access profiles",
        note: "Plan availability and capabilities follow the current EnergyCore catalog.",
      },
      faq: {
        eyebrow: "Before you plug in",
        title: "Straight answers for a smarter start.",
        lead: "EnergyCore is designed to make the first decision as clear as the data that follows.",
        q1: "Who can use EnergyCore?",
        a1: "EnergyCore supports personal, professional, and organizational contexts. Its locations, rooms, groups, and access profiles let the structure grow with the user.",
        q2: "Which devices can I organize?",
        a2: "The current platform catalog includes smart plugs, lights, motion sensors, and switches, organized around locations and rooms.",
        q3: "Does the landing page collect my data?",
        a3: "No. This static website does not include forms or tracking requests. Account access happens in the separate EnergyCore web application.",
        q4: "How do I get started?",
        a4: "Choose “Try EnergyCore” to open the web application login. From there, you can access your account and begin configuring your spaces.",
      },
      final: {
        eyebrow: "Your next energy decision starts here",
        title: "Give every watt a clearer purpose.",
        text: "Bring your devices, routines, spaces, and energy goals into one focused system.",
        mascotAlt:
          "The EnergyCore mascot, a friendly energy robot with a glowing lightning reactor",
      },
      university: {
        kicker: "Academic context",
        title: "Developed at Universidad Peruana de Ciencias Aplicadas.",
        text: "EnergyCore is an academic software engineering project created by Teralume.",
        link: "Visit the university",
      },
      footer: {
        tagline: "Energy intelligence for every space.",
        by: "A product by",
        rights: "All rights reserved.",
      },
    },
    es: {
      meta: {
        title: "EnergyCore | Inteligencia energética para cada espacio",
        description:
          "EnergyCore ayuda a hogares, profesionales y organizaciones a monitorear el consumo, controlar dispositivos conectados, automatizar rutinas y tomar mejores decisiones energéticas.",
      },
      a11y: {
        skip: "Saltar al contenido principal",
        mainNav: "Navegación principal",
        footerNav: "Navegación del pie de página",
        brandHome: "Inicio de EnergyCore",
        openNav: "Abrir navegación",
        closeNav: "Cerrar navegación",
        language: "Idioma",
        designedFor: "Diseñado para",
        audienceTabs: "Audiencias de EnergyCore",
      },
      nav: {
        features: "Plataforma",
        how: "Cómo funciona",
        solutions: "Para todos",
        pricing: "Planes",
      },
      cta: {
        try: "Probar EnergyCore",
        explore: "Explorar la plataforma",
      },
      hero: {
        eyebrow: "Inteligencia energética para cada espacio",
        titleStart: "Observa la energía.",
        titleAccent: "Decide qué ocurre después.",
        lead: "EnergyCore reúne consumo en tiempo real, dispositivos conectados, rutinas inteligentes y decisiones claras en un centro de control sereno.",
        proofTitle: "Una plataforma, distintas realidades.",
        proofText:
          "Creada para hogares, profesionales independientes y organizaciones.",
        imageAlt:
          "Una casa y una oficina inteligentes en tres dimensiones conectadas a un núcleo de energía verde",
        imageCaption:
          "EnergyCore conecta dispositivos, espacios e información energética en un solo sistema visual.",
        signalControl: "Control unificado",
        signalRoutine: "Rutinas adaptables",
      },
      audience: {
        label: "Diseñado para crecer con",
        homes: "Hogares",
        pros: "Profesionales",
        orgs: "Organizaciones",
      },
      story: {
        eyebrow: "La energía no debería ser invisible",
        title: "Convierte señales dispersas en decisiones que puedes ejecutar.",
        body: "Los recibos llegan cuando la energía ya se consumió. Los dispositivos viven en interfaces separadas. Las rutinas dependen de la memoria. EnergyCore reúne esa imagen fragmentada mientras todavía puede ayudarte.",
        link: "Conocer el flujo de EnergyCore",
      },
      features: {
        eyebrow: "Un sistema más claro para gestionar energía",
        title: "Todo lo importante, conectado desde el diseño.",
        lead: "Desde una habitación hasta múltiples sedes, EnergyCore mantiene monitoreo, acción y aprendizaje dentro del mismo ciclo.",
        monitorKicker: "Comprensión en vivo",
        monitorTitle: "Conoce qué consume energía ahora.",
        monitorText:
          "Revisa demanda actual, consumo diario, costo estimado, picos y tendencias sin descifrar una pared de datos crudos.",
        controlKicker: "Control conectado",
        controlTitle: "Actúa desde el mismo lugar.",
        controlText:
          "Organiza dispositivos por espacio o grupo y contrólalos mediante estados operativos claros.",
        deviceActive: "Dispositivo activo",
        routineKicker: "Rutinas inteligentes",
        routineTitle: "Permite que las acciones correctas se repitan.",
        routineText:
          "Programa rutinas, aplica modos de operación y reduce el esfuerzo detrás de los hábitos constantes.",
        alertKicker: "Señales que importan",
        alertTitle: "Obtén contexto antes de que el consumo sea una sorpresa.",
        alertText:
          "Configura reglas de alerta y preferencias de notificación alrededor de las condiciones que merecen atención.",
        alertPeak: "Pico de consumo",
        alertNow: "Ahora",
        alertGoal: "Progreso de meta",
        alertToday: "Hoy",
        alertRoutine: "Rutina completada",
        alertDone: "Listo",
        goalKicker: "Mejora continua",
        goalTitle:
          "Define metas. Aprende del historial. Exporta lo importante.",
        goalText:
          "Sigue metas energéticas, revisa lecturas históricas y convierte los reportes en una próxima decisión más intencional.",
      },
      how: {
        eyebrow: "De la señal a la acción",
        title: "Un ciclo sencillo con espacio para crecer.",
        connectTitle: "Conecta tus espacios",
        connectText:
          "Crea sedes y habitaciones, vincula dispositivos compatibles y organízalos alrededor de la vida real.",
        understandTitle: "Comprende el panorama",
        understandText:
          "Sigue demanda, costos estimados, historial, picos y el progreso de tus metas energéticas.",
        automateTitle: "Automatiza con intención",
        automateText:
          "Crea rutinas, modos, alertas y preferencias que convierten la información en acciones constantes.",
      },
      solutions: {
        eyebrow: "Un núcleo, adaptado a ti",
        title: "Útil en casa. Preparado para operaciones reales.",
        lead: "Elige una perspectiva y descubre cómo la misma base conectada se adapta a distintas necesidades.",
        homesTab: "Hogares",
        prosTab: "Profesionales",
        orgsTab: "Organizaciones",
        visualLive: "EnergyCore está leyendo el espacio",
      },
      pricing: {
        eyebrow: "Planes claros, espacio real para crecer",
        title: "Empieza con lo adecuado. Escala cuando importe.",
        lead: "Todos los precios son mensuales y se muestran en soles peruanos.",
        starterName: "Starter",
        starterText:
          "Funciones esenciales para un hogar o una configuración compacta.",
        professionalName: "Professional",
        professionalText:
          "Más automatización e información para usuarios activos.",
        enterpriseName: "Enterprise",
        enterpriseText:
          "Capacidad para múltiples espacios y operaciones de mayor tamaño.",
        month: "/mes",
        recommended: "Recomendado",
        chooseStarter: "Probar Starter",
        chooseProfessional: "Probar Professional",
        chooseEnterprise: "Probar Enterprise",
        devices5: "Hasta 5 dispositivos",
        routines3: "Hasta 3 rutinas",
        alerts5: "Hasta 5 alertas",
        coreDashboard: "Panel principal de monitoreo",
        devices20: "Hasta 20 dispositivos",
        routines15: "Hasta 15 rutinas",
        alerts30: "Hasta 30 alertas",
        reports: "Historial detallado y exportación de reportes",
        devices100: "Hasta 100 dispositivos",
        routines100: "Hasta 100 rutinas",
        alerts9999: "Gestión de alertas de alta capacidad",
        multiLocation: "Múltiples sedes y perfiles de acceso",
        note: "La disponibilidad y las capacidades siguen el catálogo actual de EnergyCore.",
      },
      faq: {
        eyebrow: "Antes de conectarte",
        title: "Respuestas directas para un inicio más inteligente.",
        lead: "EnergyCore busca que la primera decisión sea tan clara como los datos que vendrán después.",
        q1: "¿Quién puede usar EnergyCore?",
        a1: "EnergyCore admite contextos personales, profesionales y organizacionales. Sus sedes, habitaciones, grupos y perfiles de acceso permiten que la estructura crezca con el usuario.",
        q2: "¿Qué dispositivos puedo organizar?",
        a2: "El catálogo actual incluye enchufes inteligentes, luces, sensores de movimiento e interruptores, organizados alrededor de sedes y habitaciones.",
        q3: "¿La landing page recopila mis datos?",
        a3: "No. Este sitio estático no incluye formularios ni solicitudes de seguimiento. El acceso a la cuenta ocurre en la aplicación web independiente de EnergyCore.",
        q4: "¿Cómo comienzo?",
        a4: "Selecciona “Probar EnergyCore” para abrir el inicio de sesión de la aplicación web. Desde allí podrás acceder a tu cuenta y configurar tus espacios.",
      },
      final: {
        eyebrow: "Tu próxima decisión energética empieza aquí",
        title: "Dale a cada watt un propósito más claro.",
        text: "Reúne dispositivos, rutinas, espacios y metas energéticas dentro de un sistema enfocado.",
        mascotAlt:
          "La mascota de EnergyCore, un robot energético amigable con un reactor luminoso en forma de rayo",
      },
      university: {
        kicker: "Contexto académico",
        title: "Desarrollado en la Universidad Peruana de Ciencias Aplicadas.",
        text: "EnergyCore es un proyecto académico de ingeniería de software creado por Teralume.",
        link: "Visitar la universidad",
      },
      footer: {
        tagline: "Inteligencia energética para cada espacio.",
        by: "Un producto de",
        rights: "Todos los derechos reservados.",
      },
    },
  };

  const solutionContent = {
    en: {
      homes: {
        eyebrow: "Everyday clarity",
        title: "Make the invisible part of your home understandable.",
        text: "See which devices are active, organize rooms, follow cost estimates, and build routines around the way your household actually moves.",
        items: [
          "Room-by-room organization",
          "Practical schedules and modes",
          "Consumption goals and alerts",
        ],
      },
      professionals: {
        eyebrow: "Focused autonomy",
        title:
          "Keep your workspace efficient without adding another daily chore.",
        text: "Bring equipment, schedules, and cost visibility together so that energy control supports your work instead of interrupting it.",
        items: [
          "Device groups by activity",
          "Repeatable workday routines",
          "History and report exports",
        ],
      },
      organizations: {
        eyebrow: "Operational perspective",
        title: "Coordinate multiple spaces with clearer access and context.",
        text: "Structure locations, rooms, devices, alerts, and access profiles around the way your organization operates.",
        items: [
          "Multiple locations",
          "Role-based access profiles",
          "Higher device and routine capacity",
        ],
      },
    },
    es: {
      homes: {
        eyebrow: "Claridad cotidiana",
        title: "Haz comprensible la parte invisible de tu hogar.",
        text: "Descubre qué dispositivos están activos, organiza habitaciones, sigue costos estimados y crea rutinas alrededor de la forma en que realmente vive tu hogar.",
        items: [
          "Organización por habitaciones",
          "Horarios y modos prácticos",
          "Metas de consumo y alertas",
        ],
      },
      professionals: {
        eyebrow: "Autonomía enfocada",
        title:
          "Mantén eficiente tu espacio de trabajo sin agregar otra tarea diaria.",
        text: "Reúne equipos, horarios y visibilidad de costos para que el control energético apoye tu trabajo en vez de interrumpirlo.",
        items: [
          "Grupos de dispositivos por actividad",
          "Rutinas laborales repetibles",
          "Historial y exportación de reportes",
        ],
      },
      organizations: {
        eyebrow: "Perspectiva operativa",
        title: "Coordina múltiples espacios con acceso y contexto más claros.",
        text: "Estructura sedes, habitaciones, dispositivos, alertas y perfiles de acceso alrededor de la forma en que opera tu organización.",
        items: [
          "Múltiples sedes",
          "Perfiles de acceso por roles",
          "Mayor capacidad de dispositivos y rutinas",
        ],
      },
    },
  };

  const state = {
    language: DEFAULT_LANGUAGE,
    solution: "homes",
  };

  const getTranslation = (path) => {
    return path
      .split(".")
      .reduce((value, key) => value?.[key], translations[state.language]);
  };

  const updateSolutionPanel = () => {
    const content = solutionContent[state.language][state.solution];
    const panel = document.querySelector("#panel-solution");
    const activeTab = document.querySelector(
      `[data-solution="${state.solution}"]`,
    );

    if (!panel || !activeTab) return;

    panel.setAttribute("aria-labelledby", activeTab.id);
    panel.querySelector("[data-solution-eyebrow]").textContent =
      content.eyebrow;
    panel.querySelector("[data-solution-title]").textContent = content.title;
    panel.querySelector("[data-solution-text]").textContent = content.text;
    panel.querySelector("[data-solution-list]").innerHTML = content.items
      .map((item) => `<li>${item}</li>`)
      .join("");
  };

  const setLanguage = (language) => {
    if (!SUPPORTED_LANGUAGES.includes(language)) return;

    state.language = language;
    document.documentElement.lang = language;
    document.title = translations[language].meta.title;
    document.querySelector('meta[name="description"]').content =
      translations[language].meta.description;
    document.querySelector('meta[property="og:title"]').content =
      translations[language].meta.title;
    document.querySelector('meta[property="og:description"]').content =
      translations[language].meta.description;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = getTranslation(element.dataset.i18n);
      if (typeof value === "string") element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nAriaLabel);
      if (typeof value === "string") element.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = getTranslation(element.dataset.i18nAlt);
      if (typeof value === "string") element.setAttribute("alt", value);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.dataset.lang === language;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    updateSolutionPanel();
    localStorage.setItem("energycore-language", language);
  };

  const setupLanguage = () => {
    const savedLanguage = localStorage.getItem("energycore-language");
    setLanguage(
      SUPPORTED_LANGUAGES.includes(savedLanguage)
        ? savedLanguage
        : DEFAULT_LANGUAGE,
    );

    document.querySelectorAll("[data-lang]").forEach((button) => {
      button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });
  };

  const setupAppLinks = () => {
    document.querySelectorAll(".js-app-link").forEach((link) => {
      link.href = APP_URL;
    });
  };

  const setupNavigation = () => {
    const header = document.querySelector("[data-header]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const menu = document.querySelector("[data-nav-menu]");

    if (!header || !toggle || !menu) return;

    const closeMenu = () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", getTranslation("a11y.openNav"));
      document.body.classList.remove("nav-open");
    };

    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute(
        "aria-label",
        getTranslation(open ? "a11y.closeNav" : "a11y.openNav"),
      );
      document.body.classList.toggle("nav-open", open);
    });

    menu
      .querySelectorAll("a")
      .forEach((link) => link.addEventListener("click", closeMenu));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) closeMenu();
    });

    const updateHeader = () =>
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
  };

  const setupScrollProgress = () => {
    const progress = document.querySelector(".page-progress span");
    if (!progress) return;

    const update = () => {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      const value = available > 0 ? Math.min(window.scrollY / available, 1) : 0;
      progress.style.transform = `scaleX(${value})`;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  };

  const setupReveal = () => {
    const elements = [...document.querySelectorAll(".reveal")];
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((element) => observer.observe(element));
  };

  const setupSolutionTabs = () => {
    const tabs = [...document.querySelectorAll("[data-solution]")];

    const activate = (tab) => {
      state.solution = tab.dataset.solution;
      tabs.forEach((item) => {
        const active = item === tab;
        item.setAttribute("aria-selected", String(active));
        item.tabIndex = active ? 0 : -1;
      });
      updateSolutionPanel();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
          return;
        event.preventDefault();

        let nextIndex = index;
        if (event.key === "ArrowLeft")
          nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;

        activate(tabs[nextIndex]);
        tabs[nextIndex].focus();
      });
    });
  };

  const setupActiveNavigation = () => {
    const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;

        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          link.classList.toggle("is-active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-25% 0px -60%", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
  };

  const setupAccordion = () => {
    const details = [...document.querySelectorAll(".accordion details")];
    details.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        details.forEach((other) => {
          if (other !== item) other.open = false;
        });
      });
    });
  };

  const setupRipples = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("pointerdown", (event) => {
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement("span");
        ripple.className = "button-ripple";
        ripple.style.left = `${event.clientX - rect.left}px`;
        ripple.style.top = `${event.clientY - rect.top}px`;
        button.append(ripple);
        ripple.addEventListener("animationend", () => ripple.remove(), {
          once: true,
        });
      });
    });
  };

  const setupHeroMotion = () => {
    const visual = document.querySelector("[data-hero-visual]");
    if (!visual) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    let frame = 0;
    const setMotion = (x = 0, y = 0) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        visual.style.setProperty("--hero-rx", `${(-y * 2.2).toFixed(2)}deg`);
        visual.style.setProperty("--hero-ry", `${(x * 3.4).toFixed(2)}deg`);
        visual.style.setProperty("--hero-tx", `${(x * 5).toFixed(2)}px`);
        visual.style.setProperty("--hero-ty", `${(y * 4).toFixed(2)}px`);
      });
    };

    visual.addEventListener("pointermove", (event) => {
      if (event.pointerType === "touch") return;
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      setMotion(x, y);
    });

    visual.addEventListener("pointerleave", () => setMotion());

    if (!("IntersectionObserver" in window)) {
      visual.classList.add("is-animated");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => visual.classList.toggle("is-animated", entry.isIntersecting),
      { threshold: 0.12 },
    );
    observer.observe(visual);
  };

  document.querySelector("[data-year]").textContent = new Date().getFullYear();
  setupAppLinks();
  setupLanguage();
  setupNavigation();
  setupScrollProgress();
  setupReveal();
  setupSolutionTabs();
  setupActiveNavigation();
  setupAccordion();
  setupRipples();
  setupHeroMotion();
})();
