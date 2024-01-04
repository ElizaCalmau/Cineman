import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import { Title } from './pages/TItle'



function App() {
  
  return(
    <Provider store={store}>
      <Title/>
    </Provider>
    
  )
}

export default App
