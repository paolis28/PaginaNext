import Link from 'next/link';
import styles from './Navigation.module.css'
import Image from 'next/image'

const Links =[{
    label:'Pide Aquí',
    route: '/'
  },{
    label: 'Menu',
    route: '/menu'
  },{
    label: 'Cupones',
    route: '/cupones'
  },{
    label:'Restaurantes',
    route: '/'
  },{
    label:'Delivery',
    route: '/'
  },{
    label:'Novedades',
    route: '/'
  },{
    label:'Sabor Real',
    route: '/'
  }]

export function Navigation(){
    return(
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Image src="/favicon.png" alt='' width='50' height='50'></Image>
        </div>

          <div className={styles.links}>
              <ul className={styles.navigation}>
                {Links.map(({label,route})=>(
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>
        <button className={styles.btRegistro}>Registrarse</button>
      </nav>
    </header>
    )
}