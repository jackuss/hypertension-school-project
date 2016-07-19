export default class LkfsSideMenuController {
    /*@ngInject*/
    constructor () {
        this.items = [
            {name: 'O nas', state: 'home', icon: 'glyphicon glyphicon-info-sign'},
            {name: 'Galeria', state: 'galery', icon: 'glyphicon glyphicon-picture'},
            {name: 'Klubowicze', state: 'members', icon: 'fa fa-users'},
            {name: 'Wyniki / terminarz', state: 'results', icon: 'glyphicon glyphicon-calendar'},
            {name: 'Kontakt', state: 'contact', icon: 'glyphicon glyphicon-envelope'}
        ];
    }

}

export default LkfsSideMenuController;