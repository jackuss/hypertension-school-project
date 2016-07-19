import ContactController from './ContactController';

var contactModule = angular.module('contact', [])
    .controller('ContactController', ContactController);

export default contactModule;