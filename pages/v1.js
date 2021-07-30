import Link from "next/link"
import { cont } from "../components/content"

const indice = cont[0].indice;


export default function IndiceV1(){

    return (
        <article>
            <h1>Volume 1</h1>
            <h2>Índice</h2>
            {indice.map((i,x) => i.hasOwnProperty('titulo') ? <div key={x}>
                <h3><Link href={i.pagina}><a>{i.titulo}</a></Link></h3>
                {i.autoria.map((a,y) => <p key={y}>{a}</p>)}
            </div> : <></>)}
        </article>
    )

}