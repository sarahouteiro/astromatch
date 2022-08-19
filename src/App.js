import { GlobalStyle } from './styled';
import TelaInicial from './Pages/TelaInicial/TelaInicial';
import TelaMatches from './Pages/TelaMatches/TelaMatches';
import { useState } from 'react';

function App() {
  const [ currentPage, setCurrentPage ] = useState('inicio')

  const selectPage = () => {
    switch(currentPage) {
      case 'inicio' :
        return <TelaInicial clickMatches={onClickMatches}/>
      case 'matches' :
        return <TelaMatches clickInicio={onClickInicio}/>
      default :
        return <TelaInicial clickMatches={onClickMatches}/>
    }
  }

  const onClickInicio = () => {
    setCurrentPage('inicio')
  }

  const onClickMatches = () => {
    setCurrentPage('matches')
  }

  return (
    <div>
      <GlobalStyle/>
      {selectPage()}
    </div>
  );
}

export default App;
