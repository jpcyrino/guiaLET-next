import Link from 'next/link';

export default function Indice(){
    return (
        <article>
            <h1>Índice</h1>
            {artigos.map((li) => {
                return (
                    <div>
                        <h3><Link href={li.pagina}><a>{li.titulo}</a></Link></h3>
                        {li.autores.map(a => <p>{a}</p>)}
                    </div>
                );
            })}
        </article>
    );
}


export const artigos = [
    {
        titulo: 'Apresentação',
        autores: ['Danniel Carvalho', 'João Paulo Lazzarini Cyrino'],
        pagina: '/v1/apresentacao'
    },
    {
        titulo: 'Uma Introdução ao Estudo da História',
        autores: ['Ana Carolina Barbosa Pereira'],
        pagina: '/v1/1_introducao_historia'
    }
]