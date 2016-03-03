class LkfsTopBarDirective {

    constructor() {
        this.restrict = "E";
        this.templateUrl = "./controls/topBar/lkfsTopBarTemplate.html";
        this.controller = 'LkfsTopBarController';
        this.controllerAs = 'topBar';
        this.replace = true;
    }

    link(scope, element, attrs) {

    }
}

export default LkfsTopBarDirective;