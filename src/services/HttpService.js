/*
class HttpService {

    /!*@ngInject;*!/
    constructor($cookies) {
        this.cookies = $cookies;
    }

    request(config) {

        config.headers = {
            'dupa': this.cookies.get('auth')
        };

        return config;
    }
}
*/

export default HttpService;

/*@ngInject;*/
function HttpService($cookies) {

    return {
        request: function(config) {
            config.headers = {
                'dupa': $cookies.get('auth')
            };

            return config;
        }
    };
}

export default HttpService;