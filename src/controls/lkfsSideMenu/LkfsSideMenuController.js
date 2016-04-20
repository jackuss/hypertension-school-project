export default class LkfsSideMenuController {
    /*@ngInject*/
    constructor () {
        this.items = [
            {name: 'O nas', state: 'galery'},
            {name: 'Galeria', state: 'galery'},
            {name: 'Klubowicze', state: 'members'},
            {name: 'Wyniki / terminarz', state: 'results'},
            {name: 'Kontakt', state: 'members'}
        ];
    }

}

export default LkfsSideMenuController;