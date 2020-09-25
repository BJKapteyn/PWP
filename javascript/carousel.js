let slideButtons = {
    left: document.getElementById('leftButton'),
    right: document.getElementById('rightButton'),
}

let carouselElements = {
    carousel: document.getElementById('carousel'),
    carouselShowing: document.getElementById('carouselShowing'),
    carouselView1: document.getElementById('carouselShow1'),
    carouselView2: document.getElementById('carouselShow2'),
    carouselView3: document.getElementById('carouselShow3'),
    carouselView4: document.getElementById('carouselShow4'),
    carouselView5: document.getElementById('carouselShow5')
}

//contains elements and views with incrementing function
let carouselUtilities = {
    //
    carouselViews: document.querySelectorAll('.carouselView'),
    currentViewIndex: 0,
    leftViewIndex: 0,//this is initialized onload
    rightViewIndex: 1,
    changeIndex: function(upOrDown = true, index = 0) {
        if(upOrDown) {
            if(index == this.carouselViews.length - 1) {
                return 0;
            }
            else {
                return (index + 1);
            }
        }
        else {
            if(index == 0) {
                return this.carouselViews.length - 1;
            }
            else {
                return (index - 1);
            }
        }
    },
    //increment all indexes at once
    changeViewIndexes: function(upOrDown = true) {
        carouselUtilities.currentViewIndex = carouselUtilities.changeIndex(upOrDown, this.currentViewIndex);
        carouselUtilities.leftViewIndex = carouselUtilities.changeIndex(upOrDown, this.leftViewIndex);
        carouselUtilities.rightViewIndex = carouselUtilities.changeIndex(upOrDown, this.rightViewIndex);
    }
}

slideButtons.left.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(false);
})

slideButtons.right.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(true);
})

//true is slide right false is slide left
function slideCarousel(leftOrRight) {
    //primethe z-index of the view to the 'left' and 'right' of the current view
    debugger;
    let currentView = carouselUtilities.carouselViews.item(carouselUtilities.currentViewIndex);
    currentView.style.zIndex = "3";
    
    let leftView = carouselUtilities.carouselViews.item(carouselUtilities.leftViewIndex);
    leftView.style.zIndex = "1";
    
    let rightView = carouselUtilities.carouselViews.item(carouselUtilities.rightViewIndex);
    rightView.style.zIndex = "1";
    
    if(leftOrRight) {
        rightView.style.zIndex = "2";//elevate the z-index
        currentView.classList.add("slideLeft");
    }
    else {
        leftView.style.zIndex = "2";
        currentView.classList.add("slideRight");

    }
    setTimeout(function() {
        currentView.style.zIndex = "1";

        leftOrRight ? currentView.classList.remove("slideLeft") :
                      currentView.classList.remove("slideRight");
    }, 500)

    //increment indexes

    carouselUtilities.changeViewIndexes(leftOrRight);
}

function slideLeft() {
    carouselUtilities.changeViewIndexes(false);
}

function initializedZIndexes() {
    debugger;
    let carouselViews = document.querySelectorAll(".carouselView");

    for(let i = 0; i < carouselViews.length; i++) {
        if(i == 0) {
            carouselViews.item(i).style.zIndex = "2";
        }
        else {
            carouselViews.item(i).style.zIndex = "1";
        }
    }
}

window.onload = function() {
    console.log("page loaded");
    initializedZIndexes();
    carouselUtilities.leftViewIndex = carouselUtilities.carouselViews.length - 1;
}