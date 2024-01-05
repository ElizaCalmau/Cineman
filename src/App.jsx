import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import { Hero } from './pages/Hero/Hero'
import { Movies } from './pages/Movies/Movies'

function App() {

  return(
    <Provider store={store}>

      <Router>

        <Switch>

          <Route path='/' exact>
            <Hero/>
            <Movies/>
          </Route>

        </Switch>
      </Router>
    </Provider>
    
  )
}

export default App
