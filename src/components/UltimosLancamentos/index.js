import CardRecomenda from '../CardRecomenda'
import { Livros } from '../Livros'
import { Titulo } from '../Titulo'
import {livros} from './dadosUltimosLancamentos'
import imagemLivro from '../../images/livro.png'
export default function UltimosLancamentos(){
    return (
        <section>
            <Titulo cor="#1AB">Últimos Lançamentos</Titulo>
            <Livros>
                {
                    livros.map(
                        livro => {
                            return (
                                <li>
                                    <h4>{livro.nome}</h4>
                                    <img src={livro.src}/>
                                </li>
                            )
                        }
                    )
                }
            </Livros>
            <CardRecomenda titulo="Talvez você se interesse..." subtitulo="Angular 11" descricao="Livro sobre Angular" img={imagemLivro}/>
        </section>
    )
}