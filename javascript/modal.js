let iframe = document.getElementById("iframeMap")

let modalElements = {
    modalStandin: document.getElementById("modalStandin"),
    modalBackground: document.querySelector("#modalBackground")
}

function clearElement(parentElement = document.querySelector("")) {
    parentElement.removeChild(parentElement.firstChild)
}

//Each zone on the SVG map
let vectorZones = {
    zoneB: document.getElementById("zoneB"),
    zoneC: document.getElementById("zoneC"),
    zoneD: document.getElementById("zoneD"),
    zoneF: document.getElementById("zoneF"),
    zoneH: document.getElementById("zoneH"),
    zoneL: document.getElementById("zoneL")
}

//contains info on what should go in the modal
//enter number in 555-555-5555 format for phone number href purposes
function contactModal(zoneStr, zoneStatesStr, zonePresStr, phoneNumberStr = "555-555-5555", zoneChaptersStr, contactEmailStr) {
    this.zone = zoneStr;
    this.zoneStates = zoneStatesStr;
    this.zonePres = zonePresStr;
    this.contactPhone = phoneNumberBuilder(phoneNumberStr);
    this.zoneChapters = zoneChaptersStr;
    this.contactEmail = contactEmailStr;
    this.contactSrc = `tel:+${phoneNumberStr}`;
}

let contactModals = {
    modalZoneB: new contactModal(
        "Zone B",
        "New England area, New York, Pennsylvainia, Maryland",
        "Don Palermo",
        "800-637-7974",
        "Westchester #21; Delco #352; Greater Rochester #683; and Carroll County #935",
        "pwpdonp@yahoo.com"
    ),
    modalZoneC: new contactModal (
        "Zone C",
        "Delaware, Virginia",
        "Loree Mara",
        "800-637-7974",
        "Single Parents of Hampton Roads #216",
        ""
    ),
    modalZoneD: new contactModal (
        "Zone D",
        "Michigan, Ohio, Indiana, Kentucky, West Virginia",
        "Harriet West",
        "800-637-7974",
        "Ann Arbor #38; Flint #110; Val Porte #193; Marion #398; Single Parents Heart of the" +
        " Bluegrass #434; Wabash County #734; CYA of Jefferson County #847; Loganland #1035.",
        "hwest2236@gmail.com"
    ),
    modalZoneF: new contactModal (
        "Zone F",
        "Illinois, Missouri, Wisconsin, Minnesota, North Dakota, South Dakota, Nebraska",
        "Pat Davidson",
        "800-637-7974",
        "Grand Island #164; Three Trails #505; Belleville #559",
        "pat8018@hotmail.co"
    ),
    modalZoneH: new contactModal (
        "Zone H",
        "California, Oregon, Washington, Nevada and other Western states.)",
        "SueEllen Hayes",
        "800-637-7974",
        "La Mirada #176; Emerald Empire #1102",
        "sth0110@aol.com"
    ),
    modalZoneL: new contactModal (
        "Zone L",
        "(Covers North Carolina, South Carolina, Georgia, Florida, Alabama, Tennessee, Mississippi)",
        "Elizabeth McEwen",
        "800-637-7974",
        "Greater Spartanburg #388; Shelby #555; South Suburban Atlanta #581; South West Miami #835",
        "tcfm@twc.com"
    )
}

function createModalElements(contactModal = new contactModal()) {
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
    phoneNumber.innerText = contactModal.contactPhone;

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
    let zoneElements = Object.entries(vectorZones);
    console.log(zoneElements[0]);
}