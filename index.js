
// Menu data structure
// Updated menuLinks array
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '/catalog',
    subLinks: [
      { text: 'featured', href: '/catalog/featured' },
      { text: 'new arrivals', href: '/catalog/new-arrivals' },
    ],
  },
  {
    text: 'orders',
    href: '/orders',
    subLinks: [
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '/account',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'settings', href: '/account/settings' },
    ],
  },
];

const topMenuLinks = document.querySelectorAll("#top-menu a");

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


for (let i = 0; i < menuLinks.length; i++) {
  const anchorLink = document.createElement("a");
  anchorLink.href = menuLinks[i].href;
  anchorLink.textContent = menuLinks[i].text;
  topMenuEl.appendChild(anchorLink);
}

function activeLink(linkText) {
  // Your logic here
  console.log(`Clicked on ${linkText}`);
}
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName !== "A") {
    return;
  } else { 
    activeLink(e.target.textContent);
  }
});

console.log(menuLinks);
topMenuEl.addEventListener("click", (e) => {
  e.preventDefault();  
  if (e.target.tagName !== "A") {
    return;
  } else { 
    activeLink(e.target.textContent);
  }
});

// Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = "100%";


subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";


subMenuEl.classList.add("flex-around");

subMenuEl.addEventListener("click", function (event) {

    event.preventDefault();

   if (event.target.tagname !== "A") {
        return;
    }

    const clickedLink = event.target;
     
    console.log(event.target.textContent);

    if(!event.target.classList.contains("active")) {
        event.target.classList.add("active");
    } else {
        event.target.classList.remove("active");
    }

    topMenuLinks.forEach((link) => {
        if (link !== event.target) {
            link.classList.remove("active");
        }
    });

    subMenuEl.style.top = "0";

    const topMenuLinks = document.querySelectorAll("#top-menu a");
    topMenuLinks.forEach((link) => {
        link.classList.remove("active");
    });
   
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});

//Test: 
subMenuEl.addEventListener("mouseover", function () {
  subMenuEl.style.backgroundColor = "red";
});

// Test: 
subMenuEl.addEventListener("mouseout", function () {
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
});

