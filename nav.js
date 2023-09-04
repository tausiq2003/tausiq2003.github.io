const navbar = `
<div class = "nav">
<section class="header-title-line">
<h1 id="title"><a href="/index.html">Tausiq Samantaray</a></h1>
<button class="menu-button" tabindex="0">
  <div class="menu-icon"></div>
</button>
</section>
    <nav>
        <ul>
          <li><a href="/index.html#about" class="nav-anchor">about</a></li>
          <li><a href="/blogs/blogs.html" class="nav-anchor">blogs</a></li>
          <li><a href="/projects/projects.html" class="nav-anchor">projects</a></li>
          <li><a href="/index.html#contact" class="nav-anchor">contact</a></li>
          </ul>
    </nav>
</div>
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

    


}); 

title.addEventListener("mouseout",() => {
    title.childNodes[0].innerHTML = "Tausiq Samantaray";
    title.style.textDecoration = "none";
}); 