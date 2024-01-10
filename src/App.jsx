import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Hero } from './pages/Hero/Hero'
import { Movies } from './pages/Movies/Movies'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { Title } from './components/Title/Title'

function App() {

  return(
    <BrowserRouter>
    <Provider store={store}>
      <Title/>
      <Switch>
            <Route path='/:id'>
              <MoviePage/>
            </Route>
            <Route path='/contacts'>
              <h1>contacts</h1>
            </Route>
            <Route path="/" exact>
              <Hero/>
              <Movies/>
            </Route>
            <Route path="/contacts">
              <h1>contacts</h1>
            </Route>
      </Switch>
  </Provider>
    </BrowserRouter>
    
  )
}

export default App
