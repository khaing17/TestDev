const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.querySelector("header");
const heroSection = document.getElementById("section-hero");
const popularSection = document.getElementById("section-popular");
const mobileNav = document.querySelector(".mobile-navs");
console.log(mobileNav);
const navLinkWindow = document.querySelectorAll(".menu-link a");
console.log(navLinkWindow);
const topOfPopularSection = popularSection?.offsetTop;

/**For Menu Functionality */
const openMenu = () => {
  menu?.classList.remove("w-0", "h-0", "opacity-0");
  menu?.classList.add("w-screen", "h-screen", "opacity-100");
  console.log("open");
};

const closeMenu = () => {
  menu?.classList.remove("w-screen", "h-screen", "opacity-100");
  menu?.classList.add("w-0", "h-0", "opacity-0");
};

menuBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);

/**For Mobile Menu Functionality  */
mobileNav?.addEventListener("click", (e) => {
  const nav = e?.target?.closest(".nav-link");
  if (nav) {
    closeMenu();
  }
});

/**For Sticky Navbar */
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav?.classList.add("sticky", "top-0", "bg-white");
  } else {
    nav?.classList.remove("sticky", "top-0", "bg-white");
  }
  console.log(nav?.classList);
  console.log(nav?.clientWidth);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.5,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(heroSection);

/**For Smooth Scroll*/
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default behavior of the link

    const id = e?.currentTarget?.getAttribute("href");
    const targetElement = document.querySelector(id);

    if (targetElement) {
      window.scroll({
        top: targetElement.offsetTop - nav?.clientHeight,
        behavior: "smooth",
      });
    }
  })
);

/**For Spying Scroll and add active class */
const changeNav = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".active").classList.remove("active");
      const id = entry.target.getAttribute("id");
      const newLink = document
        .querySelector(`[href="#${id}"]`)
        .classList.add("active");
    }
  });
};

// init the observer
const options = {
  threshold: 0.8,
};

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll("section");
console.log("Sections: " + sections);
sections.forEach((section) => {
  observer.observe(section);
});
