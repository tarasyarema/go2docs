function go2docs() {
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log(url)
        chrome.tabs.create({'url': `https://pkg.go.dev/search?q=${url}`})
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('go').addEventListener('click', go2docs)
})
