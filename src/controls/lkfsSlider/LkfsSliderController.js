export default class LkfsSliderController {
    /*@ngInject*/
    constructor ($timeout) {
        this.timeout = $timeout;
        this.slides = [];
        this.test = "siemanko";
        this.active = -1;
        this.init();
    }


    init() {
        for(var i = 1; i < 5; i++) {
            this.slides.push({
                image: 'http://dummyimage.com/600x150/000/fff.jpg&text=image+' + i,
                id: i
            });
        }

        this.initSlide = {
            image: "http://dummyimage.com/600x150/000/fff.jpg&text=image+0",
            id: 0
        }
    }

    next() {
        console.log(this.active)
        var temp = "img[id=" + this.active + "]"
        angular.element(document).find(temp).css('display', 'none')
        if(this.active < (this.slides.length - 1)) {
            this.active++;
        } else {
            this.active = 0;
        }
        temp = "img[id=" + this.active + "]"
        angular.element(document).find(temp).css('display', 'block')
        angular.element(document).find(temp).animate({
            opacity: 0.25,
            left: "+=50",
            height: "toggle"
        })
    }

    previous() {
        if(this.active > 0) {
            this.active--;
        } else {
            this.active = this.slides.length - 1;
        }
    }
}

export default LkfsSliderController;