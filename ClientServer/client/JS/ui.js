const $mainContainer = document.querySelector(".mainContainer");

function renderPage(text) {
    $mainContainer.append('<h1 class="main-title">Blog</h1>');
    text.forEach(function (post) {
        const title = post.postTitle;
        const textPost = post.content;

        const template = `
        <div class="post">
            <h3>${title}</h3>
            <p>${textPost}</p>
    
    </div>`;
        $mainContainer.innerHTML += template;
    })
}




export { renderPage };
