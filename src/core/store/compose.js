import { compose } from 'redux';
import { getIsProduction } from '../../utils';


export default (getIsProduction() === false
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // eslint-disable-line
