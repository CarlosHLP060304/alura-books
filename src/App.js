import styled from 'styled-components';
// import './App.css'
import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import UltimosLancamentos from './components/UltimosLancamentos';


const AppContainer = styled.div`
 width:100vw;
 height:100vh;
` 

function App() {
  return (
    // <div className="App">
    //   <Header/>
    // </div> 
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;