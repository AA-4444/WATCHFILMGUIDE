document.addEventListener("DOMContentLoaded", () => {

  const navLinks = [
    { href: "index.html#top", key: "top10" },
    { href: "index.html#new", key: "newest" },
    { href: "index.html#genres", key: "genres" },
    { href: "index.html#years", key: "years" }
  ];

  function buildNavLinks() {
    return navLinks
      .map(link => `<a href="${link.href}" data-i18n="${link.key}"></a>`)
      .join("");
  }

 const headerHTML = `
 <header class="site-header">
 
   <div class="header-container">
 
     <a href="index.html" class="logo">WATCHFILMGUIDE</a>
 
     <nav class="nav">
       ${buildNavLinks()}
     </nav>
 
     <div class="header-actions">
 
       <input type="text" class="search" placeholder="Search movies...">
 
       <button class="lang" id="langToggle">UA</button>
 
       <button class="menu-toggle" id="menuToggle">☰</button>
 
     </div>
 
   </div>
 
   <div class="mobile-menu" id="mobileMenu">
     ${buildNavLinks()}
     <input type="text" class="mobile-search" placeholder="Search movies...">
   </div>
 
 </header>
 `;

  const footerHTML = `
  <footer class="site-footer">

    <div class="footer-container">

      <div class="footer-top">
        <div class="footer-brand">WATCHFILMGUIDE</div>
        <button class="back-to-top" id="scrollTopBtn">↑</button>
      </div>

      <div class="footer-links">
        <a href="legal.html?page=privacy" data-i18n="privacy"></a>
        <a href="legal.html?page=terms" data-i18n="terms"></a>
        <a href="legal.html?page=cookies" data-i18n="cookies"></a>
        <a href="legal.html?page=contacts" data-i18n="contacts"></a>
      </div>

      <div class="copyright">
        © <span id="footerYear"></span> WATCHFILMGUIDE
      </div>

    </div>

  </footer>
  `;

  const header = document.querySelector("site-header");
  const footer = document.querySelector("site-footer");

  if (header) header.outerHTML = headerHTML;
  if (footer) footer.outerHTML = footerHTML;

  /* YEAR */

  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();


  /* MOBILE MENU */

  const menuBtn = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
  }


  /* LANGUAGE BUTTON */

  const langBtn = document.getElementById("langToggle");

  if (langBtn) {
    langBtn.addEventListener("click", () => {

      if (typeof window.switchLanguage === "function") {
        window.switchLanguage();
      }

    });
  }


  /* SCROLL TO TOP */

  const scrollBtn = document.getElementById("scrollTopBtn");

  if (scrollBtn) {
    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

});