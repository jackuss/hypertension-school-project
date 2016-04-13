export default class GaleryController {
    /*@ngInject*/
    constructor() {
        this.images = [];
        this.imageIndex = 0;

        this.init();
    }

    init() {
        for (var i = 0; i < 20; i++) {
            this.images.push({
                url: 'http://dummyimage.com/700x500/000/fff.jpg&text=image+' + i,
                id: i
            });
        }
    }

    right() {
        if(this.imageIndex === (this.images.length - 1)) {
            this.imageIndex = 0;
        } else {
            this.imageIndex++;
        }
    }

    left() {
        if(this.imageIndex === 0) {
            this.imageIndex = (this.images.length - 1);
        } else {
            this.imageIndex--;
        }
    }
}

export default GaleryController;