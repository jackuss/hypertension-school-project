export default class UserPageController {
    /*@ngInject*/
    constructor (MainService, $cookies, $state) {
        this.state = $state;
        this.cookies = $cookies;
        this.mainService = MainService;
        this.tittle = "user page";
    }

    logout() {
        this.cookies.remove('auth');
        this.state.go('loginPage');
        this.mainService.status = 'guest';
    }

}

export default UserPageController;