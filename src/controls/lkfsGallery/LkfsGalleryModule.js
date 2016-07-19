import LkfsGalleryController from './LkfsGalleryController';
import LkfsGalleryModalController from './modals/LkfsGalleryModalController';
import LkfsGalleryDirective from './LkfsGalleryDirective';


var lkfsGallery = angular.module('lkfsGallery', [])
    .controller('LkfsGalleryController', LkfsGalleryController)
    .controller('LkfsGalleryModalController', LkfsGalleryModalController)
    .directive('lkfsGallery', () => new LkfsGalleryDirective());

export default lkfsGallery;
