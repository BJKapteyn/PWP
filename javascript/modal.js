let iframe = document.getElementById("iframeMap")

let modalElements = {
    modalStandin: document.getElementById("modalStandin"),
    modalBackground: document.querySelector("#modalBackground")
}

function clearElement(parentElement = document.querySelector("")) {
    parentElement.removeChild(parentElement.firstChild)
}

//Each zone on the SVG map
let vectorZones = [
    document.getElementById("zoneB"),
    document.getElementById("zoneC"),
    document.getElementById("zoneD"),
    document.getElementById("zoneF"),
    document.getElementById("zoneH"),
    document.getElementById("zoneL"),
    document.getElementById("noZone")
]

//contains info on what should go in the modal
//enter number in 555-555-5555 format for phone number href purposes
function contactModal(zoneStr, zoneStatesStr, zonePresStr, phoneNumberStr = "", zoneChaptersStr, contactEmailStr) {
    this.zone = zoneStr;
    this.zoneStates = zoneStatesStr;
    this.zonePres = zonePresStr;
    this.contactPhone = phoneNumberStr ? phoneNumberBuilder(phoneNumberStr) : "";
    this.zoneChapters = zoneChaptersStr;
    this.contactEmail = contactEmailStr;
    this.contactSrc = phoneNumberStr? `tel:+${phoneNumberStr}` : "";
}

//This needs to be in the same order and number as vectorZones to for initialization
let contactModalData = [
    new contactModal(
        "Zone B",
        "New England area, New York, Pennsylvainia, Maryland",
        "Don Palermo",
        "800-637-7974",
        "Westchester #21; Delco #352; Greater Rochester #683; and Carroll County #935",
        "pwpdonp@yahoo.com"
    ),
    new contactModal (
        "Zone C",
        "Delaware, Virginia",
        "Loree Mara",
        "",
        "Single Parents of Hampton Roads #216",
        "PWPZoneC@yahoo.com"
    ),
    new contactModal (
        "Zone D",
        "Michigan, Ohio, Indiana, Kentucky, West Virginia",
        "Harriet West",
        "800-637-7974",
        "Ann Arbor #38; Flint #110; Val Porte #193; Marion #398; Single Parents Heart of the" +
        " Bluegrass #434; Wabash County #734; CYA of Jefferson County #847; Loganland #1035.",
        "hwest2236@gmail.com"
    ),
    new contactModal (
        "Zone F",
        "Illinois, Missouri, Wisconsin, Minnesota, North Dakota, South Dakota, Nebraska, Kansas",
        "Pat Davidson",
        "800-637-7974",
        "Grand Island #164; Three Trails #505; Belleville #559",
        "pat8018@hotmail.com"
    ),
    new contactModal (
        "Zone H",
        "California, Oregon, Washington, Nevada, and other Western states",
        "SueEllen Hayes",
        "800-637-7974",
        "La Mirada #176; Emerald Empire #1102",
        "sth0110@aol.com"
    ),
    new contactModal (
        "Zone L",
        "North Carolina, South Carolina, Georgia, Florida, Alabama, Tennessee, Mississippi",
        "Elizabeth McEwen",
        "800-637-7974",
        "Greater Spartanburg #388; Shelby #555; South Suburban Atlanta #581; South West Miami #835",
        "tefm@twc.com"
    ),
    new contactModal (
        "No Chapters Established",
        "Alaska, Arkansas, Hawaii, Louisiana, Oklahoma, Texas",
        "",
        "800-637-7974",
        "Call the main number to find a chapter near you.",
        ""

    )
]

function createNoZoneModal() {

}

function createModalElements(contactModal = new contactModal()) {
    let elements = [];
    let modal = document.createElement("div");
    modal.id = "contactModal";
    
    if(contactModal.zone) {
        let zone = document.createElement("h2");
        zone.innerText = contactModal.zone;
        elements.push(zone);
    }
    if(contactModal.zoneStates) {
        let zoneStatesTitle = document.createElement("h3");
        let zoneStates = document.createElement("p");
        zoneStatesTitle.innerText = "States Covered:";
        zoneStates.innerText = contactModal.zoneStates;
        elements.push(zoneStatesTitle, zoneStates);
    }
    if(contactModal.zonePres) {
        let zonePresTitle = document.createElement("h3");
        let zonePres = document.createElement("p");
        zonePresTitle.innerText = "Zone President";
        zonePres.innerText = contactModal.zonePres;
        elements.push(zonePresTitle, zonePres);
    }
    if(contactModal.contactPhone) {
        let phoneTitle = document.createElement("h3");
        let phoneNumber = document.createElement("a");
        let phoneNumberText = document.createElement("p");
        phoneTitle.innerText = "Contact Number";
        phoneNumber.href = contactModal.contactSrc;
        phoneNumberText.innerText = contactModal.contactPhone;
        phoneNumber.appendChild(phoneNumberText);
        elements.push(phoneTitle, phoneNumber);
    }
    if(contactModal.contactEmail) {
        let emailTitle = document.createElement("h3");
        let email = document.createElement("p");
        emailTitle.innerText = "Email:"
        email.innerText = contactModal.contactEmail;
        elements.push(emailTitle, email);
    }
    
    //order matters as they will be displayed on page in order
    for(let i = 0; i < elements.length; i++) {
        modal.appendChild(elements[i]);
    }
    return modal;
}

function showModal(contactModal = new contactModal()) {
    modalElements.modalBackground.style.display = "block";
    modalElements.modalBackground.style.animationName = "fadeIn";
    modalElements.modalStandin.appendChild(createModalElements(contactModal));
    modalElements.modalStandin.style.display = "block";
} 

function hideModal() {
    modalElements.modalBackground.style.display = "none";
    removeChildElement(modalElements.modalStandin)
}

function removeChildElement(parentElement) {
    parentElement.removeChild(parentElement.firstChild);
}

function phoneNumberBuilder(pNumberStr = "555-555-5555") {//build phone number, returns default phone number if nothing is given.
    pNumberArr = pNumberStr.split('-');
    let result;
    try {
        if(pNumberStr == "555-555-5555") {
            throw "default number";
        }
        result = `1 (${pNumberArr[0]}) ${pNumberArr[1]}-${pNumberArr[2]}`
    }
    catch {
        result = "(800) 637-7974"
    }
    return result;
}

window.onload = function() {
    modalElements.modalBackground.addEventListener("click", function() {
        hideModal();
    });

    //create and add functionality to map zones
    for(let i = 0; i < vectorZones.length; i++) {
        vectorZones[i].addEventListener("click", function() {
            showModal(contactModalData[i]);
        });
    }
}