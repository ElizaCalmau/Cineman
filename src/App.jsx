import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import { Movies } from './pages/Movies'
import { Input } from './pages/Input'


function App() {
  
  return(
    <Provider store={store}>
      <Input/>
      <Movies/>
      <h2>store input value as state with using useState hook, and pass ass prop to input</h2>
    </Provider>
    
  )
}

export default App
