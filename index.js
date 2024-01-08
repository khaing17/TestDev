const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const nav = document.querySelector("header");
const heroSection = document.getElementById("section-hero");
console.log(nav);

/**For Menu Functionality */
const openMenu = () => {
  menu?.classList.remove("w-0", "h-0", "opacity-0");
  menu?.classList.add("w-screen", "h-screen", "opacity-100");
};

function closeMenu() {
  menu?.classList.remove("w-screen", "h-screen", "opacity-100");
  menu?.classList.add("w-0", "h-0", "opacity-0");
}

/**For Sticky Navbar */
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

const stickyNav = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav?.classList.add("fixed", "top-0", "bg-white", "w-full");
  } else {
    nav?.classList.remove("fixed", "top-0", "bg-white");
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
