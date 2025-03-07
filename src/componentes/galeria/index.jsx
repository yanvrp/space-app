import { styled } from "styled-components"
import Titulos from "../titulo"
import Tags from "./tags"
import Populares from "./populares"
import Imagem from "./imagem"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`




const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulos>Navegue pela galeria</Titulos>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem foto={foto} key={foto.id} aoZoomSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} />)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria