import { Container, BoxMatch, Titulo, Logo, People, Perfis,Foto, Footer, Restart, LikeDislike } from './styled'
import AstroLogo from '../../Assets/Images/logoastro.png'
import AstroPeople from '../../Assets/Images/people.png'
import Dislike from '../../Assets/Images/dislike.png'
import Like from '../../Assets/Images/like.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading/Loading'
import RecomecarButton from '../../Assets/Images/recomecar.png'


function TelaInicial(props) {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);

  const getProfile = () => {
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/person'
    axios.get(url)
    .then((sucess) => {
      setProfile(sucess.data.profile)
      setLoading(false)
    })
    .catch((error) => {
      alert(error.response.data.message)
    })
  }

  const postProfile = (escolha) => {
    setLoading(true);
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/choose-person'
    const body = {
      "id": profile.id,
	    "choice": escolha
    }

    axios.post(url, body)
    .then((sucess) => {
      console.log(sucess, 'deu match')
      getProfile()
    })
    .catch((error) => {
      alert(error.data.response.message)
    })
  }

  const resetMatches = () => {
    setLoading(true);
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/sarah/clear'

    axios.put(url)
    .then((sucess) => {
      getProfile()
    })
    .catch((error) => {
      alert(error.data.response.message)
    })
  }

  useEffect(() => {
    getProfile()
  },[])

  const onClickIr = () => {
    props.clickMatches()
  }

  const onClickInicio = () => {
    props.clickInicio()
  }

  const loadProfile = () => {
    if(profile && profile.id) {
      return(
        <div>
          <Perfis>
              <Foto img={profile.photo} alt={profile.photo_alt}>
                <div>
                  <h3>{profile.name}, {profile.age}</h3>
                  <p>{profile.bio}</p>
                </div>
              </Foto>
          </Perfis>
          <Footer>
          <LikeDislike 
            onClick={() => postProfile(false)}
            bgColor='#F59B8F'
            src={Dislike} 
            alt='Não Gostei'/>
          <LikeDislike
            onClick={() => postProfile(true)}
            bgColor='#43ABA2'
            src={Like} 
            alt='Gostei'/>
          </Footer>
        </div>
      )
    } else if(profile === null) {
        return (
          <Restart>
            <p>Ops... Seus matches acabaram! </p>
            <img 
              onClick={resetMatches}
              src={RecomecarButton} 
              alt='Recomeçar'/>
          </Restart>
      )
    } else {
        return(
          <Loading/>
      )
    }
  }
  
  return (
    <Container>
      <BoxMatch>
        <Titulo>
            <Logo onClick={onClickInicio} src={AstroLogo} alt='Logo'/>
            <People onClick={onClickIr} src={AstroPeople} alt='Seus Matches'/>
        </Titulo>
        {loading ? <Loading/> : loadProfile()}
      </BoxMatch>
    </Container>
  );
}

export default TelaInicial;
