import styled from "styled-components";

export const Carregando = styled.div`
     height: 78vh;
     width: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     @keyframes coracao-pulse {
        0% {
            transform: scale(0.70);
        }
        
        70% {
            transform: scale(1);
        }
        
        100% {
            transform: scale(0.70)
        }
    }
     img {
        height: 200px;
        animation: coracao-pulse 2s infinite;
     }
`