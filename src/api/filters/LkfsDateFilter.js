
/*export function /!*@ngInject*!/ LkfsDateFilter($filter) {
    return (input) => {
        return 'dupa';
    };
}*/

var LkfsDateFilter = /*@ngInject*/($filter) => {
    return (input) => {
        return $filter('date')(input, 'dd.MM.yyyy');
    };
};


export default LkfsDateFilter;