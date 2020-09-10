let navElements = {
    navBarContainer: document.getElementById('navContainer'),
    navBar: document.getElementById('navBar'),
    navButtons: document.querySelectorAll(".navButton")
}

function dockElement() {
    navElements.navBar.style.backgroundColor = "rgba(0,0,0,0.0)";
    navElements.navBarContainer.style.right = "155px";

    for(let i = 0; i < navElements.navButtons.length; i++) {
        navElements.navButtons.item(i).style.color = "";
    }
}

function unDockElement() {
    navElements.navBarContainer.style.right = "50%";
    navElements.navBar.style.backgroundColor = "rgba(0,0,0,0.5)";
    debugger;

    for(let i = 0; i < navElements.navButtons.length; i++) {
        navElements.navButtons.item(i).style.color = "white";
    }
}

function dockUnDock() {
    console.log(window.pageYOffset);
    let offset = window.pageYOffset;
    if(offset >= 100 || offset <= 300) {
        if (window.pageYOffset >= 175) {
            unDockElement();
        }
        else {
            dockElement();
        }
    }
}

window.onscroll = function() {
    dockUnDock();
}

window.onload = function() {

}