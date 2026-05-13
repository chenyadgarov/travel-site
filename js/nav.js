// const navTemplate=`
//   <nav aria-label="ניווט ראשי">
//       <ul class="main-nav">
//         <li><a href="../index.html">בית</a></li>
//         <li><a href="trips.html">טיולים</a>
//         </li>
//         <li id="destinations-nav"><a href="destinations.html">יעדים</a>
//           <ul id="destinations-ul">
//             <li><a href="argentina.html">ארגנטינה</a></li>
//             <li><a href="brazil.html">ברזיל</a></li>
//             <li><a href="mexico.html">מקסיקו</a></li>
//             <li><a href="florida.html">פלורידה</a></li>
//           </ul>
//         </li>
//         <li><a href="experiences.html">חוויות</a></li>
//         <li><a href="pic.html"> תמונות</a></li>
//         <li><a href="story.html"> הסיפור שלנו</a></li>
//       </ul>
//     </nav>`;
    // document.addEventListener("DOMContentLoaded",()=>
    // {
    //   const navElement = document.querySelector("#nav-placeholder");
    // if (navElement) {
    //     navElement.innerHTML = navTemplate;
    // }
    // })
    document.addEventListener("DOMContentLoaded", () => {
    const navElement = document.querySelector("#nav-placeholder");
    if (!navElement) return;
//check if is index.html or not
    const isHomePage = window.location.pathname.endsWith('index.html')|| window.location.pathname.endsWith('/');;
    const toRoot = isHomePage ? "" : "../";
    const toPages = isHomePage ? "html-files/" : "";
    const navTemplate=`
    <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;600;700&display=swap" rel="stylesheet">
  <nav aria-label="main-nav">
      <ul class="main-nav">
        <li><a href="${toRoot}index.html">בית</a></li>
        <li><a href="${toPages}trips.html">טיולים</a>
        </li>
        <li id="destinations-nav"><a href="${toPages}destinations.html">יעדים</a>
          <ul id="destinations-ul">
            <li><a href="${toPages}argentina.html">ארגנטינה</a></li>
            <li><a href="${toPages}brazil.html">ברזיל</a></li>
            <li><a href="${toPages}mexico.html">מקסיקו</a></li>
            <li><a href="${toPages}florida.html">פלורידה</a></li>
          </ul>
        </li>
        <li><a href="${toPages}experiences.html">חוויות</a></li>
        <li><a href="${toPages}pic.html"> תמונות</a></li>
        <li><a href="${toPages}story.html"> הסיפור שלנו</a></li>
      </ul>
    </nav>`;
    navElement.innerHTML = navTemplate;
});