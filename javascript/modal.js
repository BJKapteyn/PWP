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

function modalElements() {
    this.title = document.createElement("h2");
    this.zoneStatesTitle = document.createElement("h3");
    this.zoneStates = document.createElement("p");
    this.phoneTitle = document.createElement("h3");
    this.phoneNumber = document.createElement("p");
    this.emailTitle = document.createElement("h3");
    this.email = document.createElement("p");
    this.elements = [this.title, this.zoneStatesTitle, this.zoneStates, this.phoneTitle, this.phoneNumber, this.emailTitle, this.email];
    this.buildModal = function(elements, contactModal = new contactModal()) {
        let modal = document.createElement("div");
        modal.className = "contactModal";

        for(let i = 0; i < elements.length; i++) {
            modal.appendChild(elements[i]);
        }

        return modal;
    }
}

function createModal(contactModal = new contactModal()) {

} 

window.onload = function() {

}