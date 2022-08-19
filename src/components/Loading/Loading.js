import LoadingImg from '../../Assets/Images/loading.png'
import { Carregando } from './styled'

function Loading() {
    return(
        <Carregando>
            <img src={LoadingImg} alt='Carregando...'/>
        </Carregando>
    )
}

export default Loading;