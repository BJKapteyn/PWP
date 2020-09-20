let modalElements = {
    modalStandin: document.querySelector("#modalStandin"),
    modalBackgroudn: document.querySelector("#modalBackground")
}

function clearElement(parentElement = document.querySelector("")) {
    parentElement.removeChild(parentElement.firstChild)
}

//Each zone on the SVG map
let vectorZones = {
    zoneB: document.querySelector("#zoneB"),
    zoneC: document.querySelector("#zoneC"),
    zoneC: document.querySelector("#zoneD"),
    zoneC: document.querySelector("#zoneF"),
    zoneC: document.querySelector("#zoneH")
}

//contains info on what should go in the modal
function contactModal(titleStr, zoneStatesStr, zonePresStr, phoneNumberStr) {
    this.title = titleStr;
    this.zoneStates = zoneStatesStr;
    this.zonePres = zonePresStr;
    this.contactPhone = `tel:+${phoneNumberStr}`;
}

function modalElements(contactModal = new contactModal()) {
    let title = document.createElement("h2");
    let zoneStatesTitle = document.createElement("h3");
    let zoneStates = document.createElement("p");
    let phoneTitle = document.createElement("h3");
    let phoneNumber = document.createElement("p");
    let emailTitle = document.createElement("h3");
    let email = document.createElement("p");
    let elements = [this.title, this.zoneStatesTitle, this.zoneStates, this.phoneTitle, this.phoneNumber, this.emailTitle, this.email];
    let modal = document.createElement("div");
    
    // title.className = "modalTitle";
    // zoneStatesTitle.className = "modalSubtitle";
    // phoneTitle.className = "modalSubtitle";

    modal.id = "contactModal";

    for(let i = 0; i < elements.length; i++) {
        modal.appendChild(elements[i]);
    }

    return modal;
}

function createModal(contactModal = new contactModal()) {

} 

window.onload = function() {

}