import Link from 'next/link'

export default function Nav(){
    return(
        <nav>
            <ul>
               <li><Link href='/'><a>Principal</a></Link></li> 
               <li><Link href='/v1'><a>Volume 1</a></Link></li>
            </ul>
        </nav>  
    )
}
