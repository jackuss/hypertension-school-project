import MembersController from './MembersController';
import MemberModalController from './modals/MemberModalController';
import MembersService from './MembersService';

var membersModule = angular.module('members', [])
    .controller('MembersController', MembersController)
    .controller('MemberModalController', MemberModalController)
    .service('MembersService', MembersService);

export default membersModule;