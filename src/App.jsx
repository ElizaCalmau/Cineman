import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './App.css'
import { Hero } from './pages/Hero/Hero'
import { Movies } from './pages/Movies/Movies'
import { MoviePage } from './pages/MoviePage/MoviePage'
import { Title } from './components/Title/Title'
import { Search } from './components/Search/Search'
import { Fav } from './pages/Fav/Fav'


function App() {

  return(
    <BrowserRouter>
      <Provider store={store}>
        <Title/>
        <nav>
          <NavLink to='/fav' className='navLink' activeClassName='activeNavLink'>Favourite</NavLink>
          <NavLink to='/rating' className='navLink' activeClassName='activeNavLink'>My Rating</NavLink>
        </nav>
        <Switch> 
            <Route path='/fav'>
                  <Fav/>
                </Route>
                <Route path='/rating'>
                  <h2 style={{color:'black'}}>rating</h2>
                </Route>
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
