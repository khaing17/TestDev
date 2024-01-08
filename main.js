const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.querySelector("header");
const heroSection = document.getElementById("section-hero");
const popularSection = document.getElementById("section-popular");
console.log(popularSection);
const topOfPopularSection = popularSection?.offsetTop;
console.log(topOfPopularSection);

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
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(heroSection);
/**For Smooth Scroll*/
const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

navLinks.forEach((navLink) =>
  navLink.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default behavior of the link

    const id = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(id);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  })
);
