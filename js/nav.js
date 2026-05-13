document.addEventListener("DOMContentLoaded", () => {
  const navElement = document.querySelector("#nav-placeholder");
  if (!navElement) return;

  // בודק אם אנחנו בדף הבית
  const isHomePage =
    window.location.pathname.endsWith("index.html") ||
    window.location.pathname.endsWith("/");

  const toRoot = isHomePage ? "" : "../";
  const toPages = isHomePage ? "html-files/" : "";

  const navTemplate = `
    <nav aria-label="ניווט ראשי">
      <ul class="main-nav">
        <li><a href="${toRoot}index.html">בית</a></li>

        <li><a href="${toPages}trips.html">טיולים</a></li>

        <li id="destinations-nav">
          <a href="${toPages}destinations.html">יעדים</a>
          <ul id="destinations-ul">
            <li><a href="${toPages}argentina.html">ארגנטינה</a></li>
            <li><a href="${toPages}brazil.html">ברזיל</a></li>
            <li><a href="${toPages}mexico.html">מקסיקו</a></li>
            <li><a href="${toPages}florida.html">פלורידה</a></li>
          </ul>
        </li>

        <li><a href="${toPages}experiences.html">חוויות</a></li>
        <li><a href="${toPages}pic.html">תמונות</a></li>
        <li><a href="${toPages}story.html">הסיפור שלנו</a></li>
      </ul>
    </nav>
  `;

  navElement.innerHTML = navTemplate;
});