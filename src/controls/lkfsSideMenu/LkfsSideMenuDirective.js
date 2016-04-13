class LkfsSideMenuDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = "E";
        this.templateUrl = "./controls/lkfsSideMenu/lkfsSideMenuTemplate.html";
        this.controller = 'LkfsSideMenuController';
        this.controllerAs = 'menu';
        this.replace = true;
    }

    link(scope, element, attrs) {

    }
}

export default LkfsSideMenuDirective;