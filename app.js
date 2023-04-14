const doc_load = function () {
    let main = document.querySelector('div#main');
    main.innerText = 'It works!';
}

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", doc_load);
} else {
    doc_load();
}