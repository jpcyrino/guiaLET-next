import Link from 'next/link';

export default function Nav(){
    return(
        <nav>
            <ul>
                {paginas.map((li,x) => (<li key={x}><Link href={li.link}><a>{li.menu}</a></Link></li>))}
            </ul>
        </nav>  
    )
}

const paginas = [
    {
        menu: 'Principal',
        link: '/'
    },
    {
        menu: 'Volume I',
        link: '/v1/indice'
    }
];