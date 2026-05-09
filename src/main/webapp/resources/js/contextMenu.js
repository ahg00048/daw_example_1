// Context Menu ====================================================================================

const contextMenu = document.getElementById("contextMenu");
const cmHeaderColor = document.getElementById("current_color_header");
const cmMainColor = document.getElementById("current_color_main");
const cmFooterColor = document.getElementById("current_color_footer");

const setContexMenu = (x, y) => {
    contextMenu.style.visibility = "visible";

    const maxLeftValue = window.innerWidth - contextMenu.offsetWidth;
    const maxTopValue = window.innerHeight - contextMenu.offsetHeight;

    contextMenu.style.top = `${Math.min(y, maxTopValue)}px`;
    contextMenu.style.left = `${Math.min(x, maxLeftValue)}px`;
}

const resetContextMenu = () => {
    contextMenu.style.visibility = "hidden";
}

document.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();

    setContexMenu(ev.clientX, ev.clientY);
})

document.addEventListener("click", (ev) => {
    resetContextMenu();
})

cmHeaderColor.addEventListener("change", (ev) => {
    changeColor(headerEl, cmHeaderColor.value);
    socket_header.send(cmHeaderColor.value);
})

cmMainColor.addEventListener("change", (ev) => {
    changeColor(mainEl, cmMainColor.value);
    socket_main.send(cmMainColor.value);
})

cmFooterColor.addEventListener("change", (ev) => {
    changeColor(footerEl, cmFooterColor.value);
    socket_footer.send(cmFooterColor.value);
})

// Colored elements ====================================================================================

const headerEl = document.getElementById("header");
const mainEl = document.getElementById("main");
const footerEl = document.getElementById("footer");

function changeColor(element, newColor) {
    console.log("PreChange: " + element.style.backgroundColor);
    element.style.backgroundColor = newColor;
    console.log("PostChange: " + newColor);
}

function getColor(element) {
    console.log("GetColor: " + element.style.backgroundColor);
    return window.getComputedStyle(element).backgroundColor;
}

// Websockets ==========================================================================================

const socket_main = new WebSocket("ws://localhost:8080/Ejemplo_1-1.0-SNAPSHOT/color_main");
socket_main.onopen = (e) => { if (e.data != null) changeColor(mainEl, e.data); cmMainColor.value = e.data; };
socket_main.onmessage = (e) => { changeColor(mainEl, e.data); cmMainColor.value = e.data; }

const socket_header = new WebSocket("ws://localhost:8080/Ejemplo_1-1.0-SNAPSHOT/color_header");
socket_header.onopen = (e) => { if (e.data != null) changeColor(headerEl, e.data); cmHeaderColor.value = e.data; }
socket_header.onmessage = (e) => { changeColor(headerEl, e.data); cmHeaderColor.value = e.data; }

const socket_footer = new WebSocket("ws://localhost:8080/Ejemplo_1-1.0-SNAPSHOT/color_footer");
socket_footer.onopen = (e) => { if (e.data != null) changeColor(footerEl, e.data); cmFooterColor.value = e.data }
socket_footer.onmessage = (e) => { changeColor(footerEl, e.data); cmFooterColor.value = e.data }

// ====================================================================================================

async function initialize()
{
    console.log(getColor(headerEl));
    socket_header.send(getColor(headerEl))
    socket_main.send(getColor(mainEl))
    socket_footer.send(getColor(footerEl))
}

setTimeout(initialize, 1000);