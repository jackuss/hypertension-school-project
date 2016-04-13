import LkfsSliderController from './LkfsSliderController';
import LkfsSliderDirective from './LkfsSliderDirective';


var lkfsSliderModule = angular.module('lkfsSlider', [])
    .controller('LkfsSliderController', LkfsSliderController)
    .directive('lkfsSlider', () => new LkfsSliderDirective());

export default lkfsSliderModule;
