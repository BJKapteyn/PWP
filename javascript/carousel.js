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
            if(index == carouselElements.carouselViews.length - 1) {
                return 0;
            }
            else {
                return index + 1;
            }
        }
        else {
            if(index == 0) {
                return carouselElements.carouselViews.length;
            }
            else {
                return index - 1;
            }
        }
    },
    changeViewIndexes: function(upOrDown = true) {
        debugger;
        carouselUtilities.currentViewIndex = carouselUtilities.changeIndex(upOrDown, carouselElements.currentViewIndex);
        carouselUtilities.leftViewIndex = carouselUtilities.changeIndex(upOrDown, carouselElements.leftViewIndex);
        carouselUtilities.rightViewIndex = carouselUtilities.changeIndex(upOrDown, carouselElements.rightViewIndex);
    }
}

slideButtons.left.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(false);
})

slideButtons.right.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(true)
})

//true is slide right false is slide left
function slideCarousel(leftOrRight) {
    let currentView = carouselUtilities.carouselViews.item(carouselUtilities.currentViewIndex);
    let leftView = carouselUtilities.carouselViews.item(carouselUtilities.leftViewIndex);
    let rightView = carouselUtilities.carouselViews.item(carouselUtilities.rightViewIndex)

    if(leftOrRight) {
        debugger;
        currentView.style.right = "-102%";
        leftView.style.right = "102%";
        leftView.style.display = "inline-block";
        leftView.style.right = "0%"

        setTimeout(function() {

        }, 1000)
    
    }

    //increment indexes
    carouselUtilities.changeViewIndexes(leftOrRight);
}

function slideLeft() {
    carouselUtilities.changeViewIndexes(false);
}

window.onload = function() {
    carouselUtilities.leftViewIndex = carouselUtilities.carouselViews.length - 1;
}