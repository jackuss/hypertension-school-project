export default class LkfsTopBarController {
    /*@ngInject*/
    constructor () {
        this.slides = [];
        this.interval = 3000;
        this.active = 0;
        this.initSlides();
    }


    initSlides() {
        console.log('dupa blada')
        for(var i = 1; i < 5; i++) {
            this.slides.push({
                image: 'http://dummyimage.com/600x150/000/fff.jpg&text=image+' + i,
                id: i
            });
        }
    }
}

export default LkfsTopBarController;