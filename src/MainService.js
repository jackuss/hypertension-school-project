class MainService {
    /*@ngInject;*/
    constructor($http, $q, LOCALHOTST_URL, $state, $timeout, $cookies) {
        this.cookies = $cookies;
        this.timeout = $timeout;
        this.state = $state;
        this.baseUrl = LOCALHOTST_URL;
        this.http = $http;
        this.q = $q;
        this.status = 'guest';
        this.token = null;
        this.userTypeSet = false;
    }



    logInToApp(login, password) {
        console.log("url" + this.baseUrl.url);
        var d = this.q.defer();
        var parameters = {
                login: login,
                password: password
            };

        this.http.get(this.baseUrl.url + '/authorization', {params: parameters}).then(response => {
            d.resolve(response);
            this.status = "user";
            this.token = response.data.token;
            this.cookies.put('auth', this.token);
            this.cookies.put('x-access-token', this.token);
        }, error => {
            d.reject(error.message);
        });

        return d.promise;
    }

    authenticate(type) {
        var d = this.q.defer();

        if(!this.userTypeSet) {
            this.init();
            this.setUserType().then(response => {
                console.log(response);
                this.status = response.data.type;

                console.log(type);
                console.log(this.status);
                if(type !== this.status) {
                    console.log(this.status);
                    this.timeout(() => {
                        switch (this.status) {
                            case 'guest': console.log("going loginPage"); this.state.go('loginPage'); break;
                            case 'user': this.state.go('userPage'); break;
                        }
                    }, 0);

                    d.reject();
                } else {
                    d.resolve();
                }
            }, error => {
                console.log("B³¹d kuraw maæ");
            });
        } else {
            console.log(type);
            console.log(this.status);
            if(type !== this.status) {
                console.log(this.status);
                this.timeout(() => {
                    switch (this.status) {
                        case 'guest': console.log("going loginPage"); this.state.go('loginPage'); break;
                        case 'user': this.state.go('userPage'); break;
                    }
                }, 0);
                console.log("reject");
                d.reject();
            } else {
                d.resolve();
            }
        }
        return d.promise;
    }

    setUserType() {
        var token = this.cookies.get('auth');
        var parameters = {
            token: token
        };
        var header = {
            'test': 'kuraw mac'
        };
        /*this.http.get(this.baseUrl.url + '/authorizedUser', {params: parameters, headers: header}).then(response => {
            console.log(response);
            this.status = response.data.type;
        }, error => {
            console.log(error.message);
        });*/

        return this.http.get(this.baseUrl.url + '/authorizedUser', {params: parameters, headers: header});
    }

    setToken(token) {
        this.token = token;
    }

    init() {
        console.log("init");
        this.userTypeSet = true;
    }
}

export default MainService;