var LkfsTimeFilter = /*@ngInject*/($filter) => {
    return (input) => {
        return $filter('date')(input, 'HH:mm');
    };
};

export default LkfsTimeFilter;


/*
class LkfsTimeFilter {
    constructor($filter) {
        this.filter = $filter;
    }

    filterMethod(input) {
        return this.filter('date')(input, 'HH:mm');
        return 'dupa';
    }

    static factory() {
        var filterFactory = new LkfsTimeFilter();
        return filterFactory.filterMethod;
    }
}

LkfsTimeFilter.$inject = ['$filter'];

*/
