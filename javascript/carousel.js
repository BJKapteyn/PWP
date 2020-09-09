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
    carouselViews: [carouselElements.carouselView1, carouselElements.carouselView2, carouselElements.carouselView3, carouselElements.carouselView4, carouselElements.carouselView5],
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
        carouselElements.currentViewIndex = carouselElements.changeIndex(upOrDown, carouselElements.currentViewIndex);
        carouselElements.leftViewIndex = carouselElements.changeIndex(upOrDown, carouselElements.leftViewIndex);
        carouselElements.rightViewIndex = carouselElements.changeIndex(upOrDown, carouselElements.rightViewIndex);
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
    debugger;
    let currentView = carouselUtilities.carouselViews[carouselUtilities.currentViewIndex];
    if(leftOrRight) {
        let leftView = carouselUtilities.carouselViews[carouselUtilities.rightViewIndex];
        currentView.classList.add("right");
        setTimeout(function() {
            currentView.classList.remove("center");

        }, 1000)
    
    }

    //increment indexes
    carouselUtilities.changeViewIndexes(leftOrRight);
}

function slideLeft() {
    carouselUtilities.changeViewIndexes(false);
}

window.onload = function() {
    carouselUtilities.leftViewIndex = carouselUtilities.carouselViews.length;
}