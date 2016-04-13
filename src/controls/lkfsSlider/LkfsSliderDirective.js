class LkfsSliderDirective {
    /*@ngInject*/
    constructor($timeout) {
        this.timeout = $timeout;
        this.restrict = "E";
        this.templateUrl = "./controls/lkfsSlider/lkfsSliderTemplate.html";
        this.controller = 'LkfsSliderController';
        this.controllerAs = 'slider';
        this.replace = true;
    }

    link(scope, element, attrs) {
        element.find('.carousel').carousel();
    }
}

export default LkfsSliderDirective;