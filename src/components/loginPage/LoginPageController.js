export default class LoginPageController {
    /*@ngInject*/
    constructor (MainService, $state, $http) {
        this.http = $http;
        this.state = $state;
        this.mainService = MainService;
    }

    log() {
        this.mainService.logInToApp(this.loginLog, this.passwordLog).then(response => {
            if(response.data.success) {
                this.state.go('userPage')
            }
        });
    }
}

export default LoginPageController;