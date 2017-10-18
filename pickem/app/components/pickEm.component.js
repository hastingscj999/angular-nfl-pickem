import template from '../views/pickEm.html';
// import controller from './goatsList.controller';
import '../styles/pickEm.scss';

const pickemComponent = {
    restrict: 'E',
    bindings: {
        goats: '<'
    },
    template,
    // controller,
    // controllerAs: 'vm'
};

export default pickemComponent;