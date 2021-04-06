import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers';
import itemsSaga from './items-sagas';
import usersSaga from './usres-sagas'

const sagaMiddleware = createSagaMiddleware()

export default createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(itemsSaga);
sagaMiddleware.run(usersSaga);
