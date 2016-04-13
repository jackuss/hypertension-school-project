class MembersService {
    /*@ngInject*/
    constructor ($q, $http) {
        this.q = $q;
        this.http = $http;
    }

    getMembers() {
        var d = this.q.defer();

        this.http.get('/mockData/mockMembers.json').then(response => {
            d.resolve(response.data);
        }, error => {
            console.log("Error, cannot get members data !");
        });

        return d.promise;
    }
}

export default MembersService;