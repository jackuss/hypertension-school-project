class LkfsGalleryDirective {
    /*@ngInject*/
    constructor() {
        this.restrict = "E";
        this.templateUrl = "./controls/lkfsGallery/lkfsGalleryTemplate.html";
        this.controller = 'LkfsGalleryController';
        this.controllerAs = 'gallery';
        this.bindToController = true;
        this.replace = true;
        this.scope = {
            images: '=',
            test: '@'
        }
    }

    link(scope, element, attrs) {

    }
}

export default LkfsGalleryDirective;