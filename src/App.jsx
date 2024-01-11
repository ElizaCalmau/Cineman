import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import { Hero } from './pages/Hero/Hero'
import { Movies } from './pages/Movies/Movies'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { Title } from './components/Title/Title'
import { Search } from './components/Search/Search'

function App() {

  return(
    <BrowserRouter>
    <Provider store={store}>
      <Title/>
      <Switch>
            <Route path="/" exact>
              <Hero/>
              <Search/>
              <Movies/>
            </Route>
            <Route path='/:id'>
              <MoviePage/>
            </Route>
      </Switch>
  </Provider>
    </BrowserRouter>
    
  )
}

export default App
