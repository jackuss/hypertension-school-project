export default class GaleryController {
    /*@ngInject*/
    constructor() {
        this.images = [];
        this.imageIndex = 0;
        this.selectData = [];
        this.selectedItem = {};

        this.init();
    }

    init() {
        this.images[0] = [];
        this.images[1] = [];
        for (var i = 0; i < 20; i++) {
            this.images[0].push({
                thumb: 'http://dummyimage.com/700x500/000/fff.jpg&text=styczen+' + i,
                href: 'http://dummyimage.com/700x500/000/fff.jpg&text=styczen+' + i,
                description: 'opis'
            });
            this.images[1].push({
                thumb: 'http://dummyimage.com/700x500/000/fff.jpg&text=luty+' + i,
                href: 'http://dummyimage.com/700x500/000/fff.jpg&text=luty+' + i,
                description: 'opis'
            });
        }

        this.selectData.push({label: "--wybierz--", id: -1});
        this.selectData.push({label: "Liga styczeń 2016", id: 0});
        this.selectData.push({label: "Liga luty 2016", id: 1});

        this.selectedItem = this.selectData[0];
    }

    showGalery() {
        return (this.selectedItem.id !== -1);
    }



}

export default GaleryController;