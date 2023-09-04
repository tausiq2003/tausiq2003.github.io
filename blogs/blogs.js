const blogs = [];

async function getBlogs() {
  const response = await fetch('./blogs.json');
  blogs.push(...await response.json());
  showBlogs();
}

getBlogs();

function showBlogs() {
  let contentBlogs = '';
  blogs.forEach(blog => {
    contentBlogs += `
      <div class="blog">
        <img src="${blog.image}" alt="${blog.title}" style="width: 100%; border-radius: 10px; margin-left: 0;">
        <h2>${blog.title}</h2>
        <a href="${blog.link}" style="float: right;margin-right: 1rem;" target="_blank">Read Blog...</a>  
      </div>
    `;
  });
  document.getElementById('blogs').innerHTML = contentBlogs;
}