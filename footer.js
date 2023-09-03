
const date = new Date();
const footerContents = `
<span class="nowrap">&copy;${date.getFullYear()} Tausiq Samantaray</span>
        <span style="margin-right: 1rem;"  class="nowrap">Made with ❤️ by Tausiq Samantaray 
        <a href="https://github.com/tausiq2003/tausiq2003.github.io" target="_blank" class="links"><i class="fa-brands fa-github"></i></a></span>
`;
const footer = document.querySelector('footer');
footer.innerHTML += footerContents;
