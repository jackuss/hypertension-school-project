class MembersService {
    /*@ngInject*/
    constructor ($q, $http) {
        this.q = $q;
        this.http = $http;
    }

    getMembers() {
        var d = this.q.defer();

        this.http.get('http://localhost:3000/members').then(response => {
            d.resolve(response.data);
        }, error => {
            console.log("Error, cannot get members data !");
        });

        return d.promise;
    }
}

export default MembersService;