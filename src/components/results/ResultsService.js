export default class ResultsService {
    /*@ngInject*/
    constructor ($http, $q) {
        this.http = $http;
        this.q = $q;
    }

    getScheduleData() {
        var d = this.q.defer();

        this.http.get('http://52.28.46.91:3000/schedule').then(response => {
            d.resolve(response.data);
            console.log(response.data);
        }, error => {
            console.log("Nie mo¿na pobraæ terminarzu");
        });

        return d.promise;
    }

    getModalScheduleData(id) {
        var d = this.q.defer();

        this.http.get('http://52.28.46.91:3000/scheduleDetails/' + id).then(response => {
            d.resolve(response.data);
            console.log(response.data)
        }, error => {
            console.log("Nie mo¿na pobraæ szczegó³ów!");
        });

        return d.promise;
    }

    getResultsData() {
        var d = this.q.defer();

        this.http.get('http://52.28.46.91:3000/results').then(response => {
            d.resolve(response.data);
        }, error => {
            console.log("Nie mo¿na pobraæ wyników");
        });

        return d.promise;
    }

    getResultsDetailsData() {
        var d = this.q.defer();

        this.http.get('http://52.28.46.91:3000/resultsDetails').then(response => {
            d.resolve(response.data);
        }, error => {
            console.log("Nie mo¿na pobraæ szczegó³ów wyników");
        });

        return d.promise;
    }
}

export default ResultsService;