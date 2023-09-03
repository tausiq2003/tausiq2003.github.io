const navbar = `
    <nav>
        <h4 id="title"><a href="/tausiq2003.github.io/index.html">Tausiq Samantaray</a></h4>
        <ul>
          <li><a href="/tausiq2003.github.io/index.html#about" class="nav-anchor">about</a></li>
          <li><a href="/tausiq2003.github.io/blogs/blogs.html" class="nav-anchor">blogs</a></li>
          <li><a href="/tausiq2003.github.io/projects/projects.html" class="nav-anchor">projects</a></li>
          <li><a href="/tausiq2003.github.io/index.html#contact" class="nav-anchor">contact</a></li>
        </ul>
        <button class="menu-button">
          <div class="menu-icon"></div>
      </button>
    </nav>
`;
function addNavbar() {
    const header = document.querySelector('header');
    header.innerHTML += navbar; 
  }
  
addNavbar();
const title = document.querySelector("#title");
title.addEventListener("mouseover",() => {
    title.childNodes[0].innerHTML = "index.html";
    title.style.textDecoration = "underline";
    // make the change little bit slow
    


}); 
// title.addEventListener("mousedown", () => {
//     title.style.color = "rgb(255, 74, 74)";

// });
title.addEventListener("mouseout",() => {
    title.childNodes[0].innerHTML = "Tausiq Samantaray";
    title.style.textDecoration = "none";
    // make the change little bit slow
}); 