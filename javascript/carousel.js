let slideButtons = {
    left: document.getElementById('leftButton'),
    right: document.getElementById('rightButton')
}

let carouselElements = {
    carousel: document.getElementById('carousel'),
    carouselShowing: document.getElementById('carouselShowing'),
    carouselView1: document.getElementById('carouselShow1'),
    carouselView2: document.getElementById('carouselShow2'),
    carouselView3: document.getElementById('carouselShow3'),
    carouselView4: document.getElementById('carouselShow4'),
    carouselView5: document.getElementById('carouselShow5'),
    carouselViews: [carouselView1, carouselView2, carouselView3, carouselView4, carouselView5],
    currentViewIndex: 0,
    previousViewIndex: carouselViews.length - 1,
    nextViewIndex = 1,
    changeViewIndex: function(upOrDown = true, index = 0) {
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
    }
}

slideButtons.left.addEventListener('click', function(event) {
    event.preventDefault();
    slideLeft();
})

slideButtons.right.addEventListener('click', function(event) {
    event.preventDefault();
    slideRight()
})

function slideRight() {


}

function slideLeft() {

}