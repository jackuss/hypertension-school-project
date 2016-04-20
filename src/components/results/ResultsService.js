export default class ResultsService {
    /*@ngInject*/
    constructor ($http, $q) {
        this.http = $http;
        this.q = $q;
    }

    getScheduleData() {
        var d = this.q.defer();

        this.http.get('/mockData/mockSchedule.json').then(response => {
            d.resolve(response.data);
        }, error => {
            console.log("Nie mo¿na pobraæ terminarzu");
        });

        return d.promise;
    }
}

export default ResultsService;