import { renderPage } from "./ui.js"
import { initialLoading } from "./data.js"

function init() {
    initialLoading()
        .then((posts) => {
            renderPage(posts)
        })
}





export { init };