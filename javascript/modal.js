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
//enter number in 555-555-5555 format for phone number href purposes
function contactModal(zoneStr, zoneStatesStr, zonePresStr, phoneNumberStr = "555-555-5555", zoneChaptersStr, contactEmailStr) {
    this.zone = zoneStr;
    this.zoneStates = zoneStatesStr;
    this.zoneChapters = zoneChaptersStr;
    this.zonePres = zonePresStr;
    this.contactEmail = contactEmailStr;
    this.contactPhone = phoneNumberstr;
    this.contactSrc = `tel:+${phoneNumberStr}`;
}

function modalElements(contactModal = new contactModal()) {
    let zone = document.createElement("h2");
    let zoneStatesTitle = document.createElement("h3");
    let zoneStates = document.createElement("p");
    let zonePresTitle = document.createElement("h3");
    let zonePres = document.createElement("p");
    let phoneTitle = document.createElement("h3");
    let phoneNumber = document.createElement("a");
    let emailTitle = document.createElement("h3");
    let email = document.createElement("p");
    let modal = document.createElement("div");
    modal.id = "contactModal";
    
    zone.innerText = contactModal.zone;
    zoneStatesTitle.innerText = "States Covered:";
    zoneStates.innerText = contactModal.zoneStates;
    zonePresTitle.innerText = "Zone President";
    zonePres.innerText = contactModal.zonePres;

    phoneTitle.innerText = "Contact Number";
    phoneNumber.href = contactModal.contactSrc;
    phoneNumber.innerText = phoneNumberBuilder(contactModal.contactPhone);

    emailTitle.innerText = "Email:"
    email.innerText = contactModal.contactEmail;
    // title.className = "modalTitle";
    // zoneStatesTitle.className = "modalSubtitle";
    // phoneTitle.className = "modalSubtitle";
    
    //order matters as they will be displayed on page in order
    let elements = [zone, zoneStatesTitle, zoneStates, zonePresTitle, zonePres, phoneTitle, phoneNumber,  emailTitle, email];
    for(let i = 0; i < elements.length; i++) {
        modal.appendChild(elements[i]);
    }

    return modal;
}

function createModal(contactModal = new contactModal()) {

} 


function phoneNumberBuilder(pNumberStr = "555-555-5555") {//build phone number, returns default phone number if nothing is given.
    pNumberArr = pNumberStr.split('-');
    let result;
    try {
        if(pNumberStr == "555-555-5555") {
            throw "default number";
        }
        result = `(${pNumberArr[0]}) ${pNumberArr[1]}-${pNumberArr[3]}`
    }
    catch {
        result = "(800) 637-7974"
    }
    return result;
}