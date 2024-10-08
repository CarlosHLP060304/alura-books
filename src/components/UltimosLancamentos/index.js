import { Livros } from '../Livros'
import {livros} from './dadosUltimosLancamentos'

export default function UltimosLancamentos(){
    return (
        <section>
            <h2>Últimos Lançamentos</h2>
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
        </section>
    )
}