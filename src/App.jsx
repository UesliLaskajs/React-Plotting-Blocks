import './App.css';
import Header from './components/header';
import Navigation from './components/navigation';
import Main from './components/main';
import Advertisment from './components/advertisment';
const App=()=>{

  return(
    <div className="app_container">
      <Header/>
      <div className='container_flex'>
          <Navigation/>
          <Main>
            <div className="flex-3"></div>
            <div className="flex-3"></div>
            <div className="flex-3"></div>
          </Main>
      </div>
      <Advertisment/>
    </div>
    
  )
}
export default App;