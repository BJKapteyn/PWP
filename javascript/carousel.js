let slideButtons = {
    left: document.getElementById('leftButton'),
    right: document.getElementById('rightButton')
}
debugger;
//contains elements and views with incrementing function
let carouselUtilities = new {
    carousel: document.getElementById('carousel'),
    carouselShowing: document.getElementById('carouselShowing'),
    carouselView1: document.getElementById('carouselShow1'),
    carouselView2: document.getElementById('carouselShow2'),
    carouselView3: document.getElementById('carouselShow3'),
    carouselView4: document.getElementById('carouselShow4'),
    carouselView5: document.getElementById('carouselShow5'),
    //
    carouselViews: [this.carouselView1, this.carouselView2, this.carouselView3, this.carouselView4, this.carouselView5],
    currentViewIndex: 0,
    leftViewIndex: this.carouselViews.length - 1,
    rightViewIndex: 1,
    changeIndex: function(upOrDown = true, index = 0) {
        if(upOrDown) {
            if(index == this.carouselViews.length - 1) {
                return 0;
            }
            else {
                return index + 1;
            }
        }
        else {
            if(index == 0) {
                return this.carouselViews.length;
            }
            else {
                return index - 1;
            }
        }
    },
    changeViewIndexes: function(upOrDown = true) {
        this.currentViewIndex = this.changeIndex(upOrDown, this.currentViewIndex);
        this.leftViewIndex = this.changeIndex(upOrDown, this.leftViewIndex);
        this.rightViewIndex = this.changeIndex(upOrDown, this.rightViewIndex);
    }
}

slideButtons.left.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(true);
})

slideButtons.right.addEventListener('click', function(event) {
    event.preventDefault();
    slideCarousel(false)
})

//true is slide right false is slide left
function slideCarousel(leftOrRight) {
    let currentView = carouselUtilities.carouselViews[carouselUtilities.currentViewIndex];
    if(leftOrRight) {
        let leftView = carouselUtilities.carouselViews[carouselUtilities.rightViewIndex];
        currentView.classList.add("right");
        currentView.classList.remove("center");
    
    }
    document.getElementById().classList.re

    //increment indexes
    carouselUtilities.changeViewIndexes(leftOrRight);
}

function slideLeft() {
    carouselUtilities.changeViewIndexes(false);
}