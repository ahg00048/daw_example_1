// context menu

const contextMenu = document.getElementsByClassName("contextMenu")[0]

const setContexMenu = (x, y, color) => {
    contextMenu.style.visibility = "visible"

    const maxLeftValue = window.innerWidth - contextMenu.offsetWidth;
    const maxTopValue = window.innerHeight - contextMenu.offsetHeight;

    contextMenu.style.top = `${Math.min(y, maxTopValue)}px`;
    contextMenu.style.left = `${Math.min(x, maxLeftValue)}px`;

    const children = contextMenu.childNodes
    for (let child of children) {

    }
}

const resetContextMenu = () => {
    contextMenu.style.visibility = "hidden"
}

document.addEventListener("contextmenu", (ev) => {
    ev.preventDefault();

    const color = "#FF0000";
    setContexMenu(ev.clientX, ev.clientY, color);
})

document.addEventListener("click", (ev) => {
    let text = ev.target.text;
    alert(text);
    resetContextMenu();
})

// ===================================================================

const header = document.getElementById("header")
const background = document.getElementById("main")
const footer = document.getElementById("footer")

function updateElementColor(element, color) {
    element.style.backgroundColor = color
}


