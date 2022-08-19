import { Container, BoxMatch, CaixaMatches, Titulo, Voltar, Logo, Perfil, Foto, SemMatches } from './styled';
import LogoImg from '../../Assets/Images/logoastro.png';
import VoltarImg from '../../Assets/Images/voltar.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

function TelaMatches(props) {
    const [matches, setMatches] = useState([])
    const [loading, setLoading] = useState(true)

    const getMatches = () => {
      const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/matches'

      axios.get(url)
      .then((sucess) => {
        setMatches(sucess.data.matches)
        setLoading(false)
      })
      .catch((error) => {
        alert(error.data.response.message)
      })
    }

    useEffect(() => {
      getMatches()
    },[])

    const onClickVoltar = () => {
      props.clickInicio()
    }

    const renderizarMatches = () => {
      if(matches.length > 0) {
        return(
          <CaixaMatches>
            {matches.map((match) => {
              return(
                <Perfil key={match.id}> 
                  <Foto img={match.photo} alt={match.photo_alt}></Foto>
                  <p>{match.name}</p>
                </Perfil>
              )
            })}
          </CaixaMatches>
        )
      } else {
          return(
            <SemMatches>
              <p>Você ainda não tem matches.</p>
            </SemMatches>
          )
      }
    }
    
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Voltar onClick={onClickVoltar} src={VoltarImg} alt='voltar'/>
            <Logo onClick={onClickVoltar} src={LogoImg} alt='Logo'/>
        </Titulo>
        {loading ? <Loading/> : renderizarMatches()}
      </BoxMatch>
    </Container>
  );
}

export default TelaMatches;