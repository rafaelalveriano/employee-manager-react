import Router from './router'
import { Provider } from 'react-redux'
import store from './redux'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
