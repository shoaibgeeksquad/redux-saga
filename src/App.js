import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from './redux/reducer'
import Table from './components/table'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer, applyMiddleware(sagaMiddleware));

const App=()=>{
  return(
    <Provider store={store}>
      <Table />
    </Provider>
  )
}
export default App;