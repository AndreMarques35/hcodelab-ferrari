import Link from 'next/link'

const LinkItem = [
    {id:1, link:'/', label:'Home'},
    {id:2, link:'/historia', label:'História'},
    {id:3, link:'/galeria', label:'Galeria'},
    {id:4, link:'/contato', label:'Contato'},
]

const LinkMenu = (itens) => (
    <li>
        <Link href={itens.link}>
            <a title={itens.label}>{itens.label}</a>
        </Link>
    </li>
)    

export default function Menu() {
    return (
       <ul>
          {LinkItem.map((item)=> (
                <LinkMenu key={item.id} link={item.link} label={item.label} />
          ))}
          <style>jsx global>{`
            li {
                list-style: nome;
            }
          
            @media (min-width: 320px) {
                li{
                    width: 100%
                    line-height: 40px;
                    background: rgba(230, 228, 224, 0.85);
                    display: block;
                    padding-left: 5%;
                }
                a{
                    text-decoration:none;
                    color: #707070;
                    font-size:1.5em;
                    font_family: 'Open Sans';

                }
            }

            @media (min-width: 960px) {
                li {
                    display: inline-block;
                    width: 18%;
                    line-height: 75px;
                    text-align: center;
                } 
            }

          `}</style>
       </ul>            
            
    )
}