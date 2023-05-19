document.getElementById("search-btn").addEventListener("click", search);

function warningOpen() {
    document.getElementById("warning").classList.remove("disabled");
    document.getElementById("warning-p").classList.remove("disabled");
}

function warningClose() {
    document.getElementById("warning").classList.add("disabled");
    document.getElementById("warning-p").classList.add("disabled");
}

function search() {
    let search = document.getElementById("search");
    var searchText = search.value;
    if (searchText.length > 0) {
        window.location.href = "search.html?search=" + searchText;
    } else {
        warningOpen();
        setTimeout(warningClose, 3000)
    }
}