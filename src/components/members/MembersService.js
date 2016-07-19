class MembersService {
    /*@ngInject*/
    constructor ($q, $http) {
        this.q = $q;
        this.http = $http;
    }

    getMembers() {
        var d = this.q.defer();

        this.http.get('http://52.28.46.91:3000/members').then(response => {
            d.resolve(response.data);
            //console.log(response);
        }, error => {
            console.log("Error, cannot get members data !");
        });

        return d.promise;
    }

    getAchievements(id, index) {
        var d = this.q.defer();
        var res = {}

        this.http.get('http://52.28.46.91:3000/members/achievements/' + id).then(response => {
            res.data = response.data;
            res.index = index;
            d.resolve(res);
            //console.log(response);
        }, error => {
            console.log("Error, cannot get achievements !");
        });

        return d.promise;
    }
}

export default MembersService;