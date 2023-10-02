'use client'
import styles from '../components/Navbar.module.css';
import menuEstilos from '../menu/menu.module.css';
import Image from 'next/image';
import {NavbarMe} from '../components/NavbarMe'
import Link from 'next/link'

// export const metadata={
//   title:'BURGUER KING MEXICO'
// };

const Links2 =[
  {    
    label:'A la parrilla',
    route: '#a-la-parrilla'
  },{
    label: 'Bebidas y Café',
    route: '#bebidas'
  },{
    label: 'Complementos',
    route: '#complementos'
  },{
    label:'De Pollo',
    route: '#depollo'
  },{
    label:'Desayunos',
    route: '#desayunos'
  },{
    label:'Ensaladas',
    route: '#ensaladas'
  },{
    label:'Niños',
    route: '#niños'
  },{
    label:'Postres',
    route: '#postres'
  }]

export default function menu(){
    return(
        <>
        <NavbarMe></NavbarMe>
        <header>
            <nav>
            <div className={styles.seccionLinks}>
                <ul className={styles.link2}>
                {Links2.map(({label,route})=>(
                    <li key={route}>
                        <Link href={route} className={styles.menuLinks2}>
                            {label}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
            </nav>
        </header>

        <main className={menuEstilos.main}>
            <div className={menuEstilos.alaParrilla} id="a-la-parrilla">
              <div className={menuEstilos.navi}>
                <ul className={menuEstilos.navigation}>
                  <li>
                    <Link href={'/menu'} style={{color: "rgb(99, 24, 3)"}}>Home</Link>
                  </li>
                  <li>/</li>
                  <li>
                    <Link href={'/menu'} style={{color: "rgb(99, 24, 3)"}}>Menu</Link>
                  </li>
                  <li className={menuEstilos.liView}>
                    <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                    textDecoration: "none;"}}>View 
                    All</Link>
                  </li>
                </ul>
              </div>
            <h2>A la parrilla</h2>

            <div className={menuEstilos.containerParrilla}>
  {/* -------------------COLUMNA 1------------------ */}
  <div className={menuEstilos.columna1}>
    <Link className={menuEstilos.link} href={"/StackerChipotle"}>
      <div>
        <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img1-stackerChipotle.png" width="370" height="250" alt='burguer' />
        <h2>Stacker Chipotle Triple</h2>
      </div>
    </Link>
    
    <Link className={menuEstilos.link} href="/Producto.html?nombre=Guacamole%20Crunch%20King&imagen=../img/Menu/alaParrilla/img4-GuacamoleCrunchKing.png&descripcion=Con doble carne a la parrilla, cremoso guacamole, lechuga fresca, rodajas de jalapeño, queso Monterrey, tocino y cebollitas crujientes. ¡Un mundo nuevo lleno de sabor!">

<div >
    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img4-GuacamoleCrunchKing.png"
    width="370" height="250" alt='burguer'/>
    <h2>Guacamole Crunch King</h2>
</div></Link>

<Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER® Doble&imagen=../img/Menu/alaParrilla/img7-WhopperDobleQueso.png&descripcion=Nuestra WHOPPER® doble está preparada con dos carnes de res a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinillos y cebollas en rodajas, sobre un pan suave con ajonjolí.¡Pídela en COMBO con papas a la francesa y refresco frío!1000 CAL.">
<div >
    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img7-WhopperDobleQueso.png"
    width="370" height="250" alt='burguer'/>
    <h2>WHOPPER® Doble</h2>
</div></Link>

<Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER® BBQ&imagen=../img/Menu/alaParrilla/img10-WhopperBBQTocino.png&descripcion=

Nuestra WHOPPER® doble está preparada con dos carnes de res a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinillos y cebollas en rodajas, sobre un pan suave con ajonjolí.

¡Pídela en COMBO con papas a la francesa y refresco frío!
1000 CAL.
">
<div >
    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img10-WhopperBBQTocino.png"
    width="370" height="250" alt='burguer'/>
    <h2>WHOPPER® BBQ</h2>
</div></Link>

<Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Long Rodeo&imagen=../img/Menu/alaParrilla/img13-LongRodeo.png&descripcion=Carne de res a la parrilla, queso americano, aros de cebolla crujientes, salsa BBQ ¿ya se te antojó, verdad? ¡Pídela en COMBO con papas a la francesa y refresco frío!

670 CAL.">
<div >
    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img13-LongRodeo.png"
    width="370" height="250" alt='burguer'/>
    <h2>Long Rodeo</h2>
</div></Link>

  </div>

  {/* --------------------------------COLUMNA 2------------------ */}
      <div className={menuEstilos.columna2}>
          <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Stacker Chipotle Cuádruple&imagen=../img/Menu/alaParrilla/img2-BKStackerChipotl.png&descripcion=Deliciosa hamburguesa con cuatro carnes, aros de cebolla, Cebolla crujiente, queso suizo, salsa de queso chipotle, salsa stacker (Mayonesa con pepinillos) y tocino crujiente.">
            <div>
              <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img2-BKStackerChipotl.png" width="370" height="250" alt='burguer' />
              <h2>Stacker Chipotle Cuádruple</h2>
            </div>
          </Link>
          <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER® con Queso&imagen=../img/Menu/alaParrilla/img5-WhopperconQuesopng.png&descripcion=Nuestra WHOPPER® Doble con Queso está preparada con dos carnes de res a la parrilla, jugosos tomates, lechuga recién cortada, mayonesa, pepinillos y cebollas en rodajas, sobre un pan suave con ajonjolí. ¡Pídela en COMBO con papas a la francesa y refresco frío!
      1000 CAL. ">
      <div className={menuEstilos.csimg1}>
          <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img5-WhopperconQuesopng.png" 
          width="370" height="250" alt='burguer'/>
          <h2>WHOPPER® con Queso</h2>
      </div></Link>

      <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER® Vegetal&imagen=../img/Menu/alaParrilla/img8-WhopperVegetal.png&descripcion=

      Lechuga recién cortada, tomates frescos, pepinillos, cebollas en rodajas y un medallón de carne vegetal hecha de plantas. ¡Todo el sabor y textura de la clásica Whopper® -con deleitable y jugosa carne- pero ahora ¡hecha a base de plantas!
      Los ingredientes principales son soya, trigo, aceite vegetal y hierbas. Además, contiene 0% colesterol y en comparación a una Whopper® original, contiene 30% menos calorías y 40% menos grasa.
      
      *La carne de hamburguesa hecha a base de plantas es cocinada en la misma parrilla que la hamburguesa de carne.
      ">
      <div className={menuEstilos.csimg1}>
          <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img8-WhopperVegetal.png" 
          width="370" height="250" alt='burguer'/>
          <h2>WHOPPER® Vegetal</h2>
      </div></Link>

      <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=BIG KING®&imagen=../img/Menu/alaParrilla/img11-bigkingnueva.png&descripcion=

      Dos carnes a la parrilla, queso amarillo, lechuga, cebolla, pepinillos y salsa agridulce con tres rebanadas de pan suave con ajonjolí.
      
      
      570 CAL.
      ">
      <div className={menuEstilos.csimg1}>
          <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img11-bigkingnueva.png" 
          width="370" height="250" alt='burguer'/>
          <h2>BIG KING®</h2>
      </div></Link>

      <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=X-TREME®&imagen=../img/Menu/alaParrilla/img14-Xtreme.png&descripcion=Nuestra deliciosa X-Treme® lleva dos carnes de res a la parrilla, preparadas con jugosos tomates, salsa especial X-treme, mayonesa, pepinillos, cebollas en rodajas, queso amarillo y queso americano, sobre un pan suave con ajonjolí.¡Pídela en COMBO con papas a la francesa y refresco frío!
      1010 CAL.">
      <div className={menuEstilos.csimg1}>
          <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img14-Xtreme.png" 
          width="370" height="250" alt='burguer'/>
          <h2>X-TREME®</h2>
      </div></Link>
        </div>

        {/* --------------------------------COLUMNA 3------------------ */}
        <div className={menuEstilos.columna3}>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Stacker Chipotle Doble&imagen=../img/Menu/alaParrilla/img3-BKStackerChipotle.png&descripcion=Deliciosa hamburguesa con doble carne, aros de cebolla, Cebolla crujiente, queso suizo, salsa de queso chipotle, salsa stacker (Mayonesa con pepinillos) y tocino crujiente.">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img3-BKStackerChipotle.png" 
          width="370" height="250" alt='burguer'/>
                        <h2>Stacker Chipotle Doble</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER Jr.®&imagen=../img/Menu/alaParrilla/img6-Whopper.png&descripcion=Nuestra WHOPPER Jr.® lleva carne de res a la parrilla, jitomates, lechuga , mayonesa, pepinillos y cebollas, sobre un pan suave con ajonjolí. ¡Pídela en COMBO con papas a la francesa y refresco frío!
                    420 CAL. ">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img6-Whopper.png" 
          width="370" height="250" alt='burguer'/>
                        <h2>WHOPPER Jr.®</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=WHOPPER® Angry&imagen=../img/Menu/alaParrilla/img9-WhopperAngrydoble.png&descripcion=Nuestra WHOPPER® Angry lleva una carne de res a la parrilla, preparada con deliciosas tiras de tocino, jugosos tomates, lechuga recién cortada, mayonesa, jalapeños y cebollitas angry, sobre un pan suave con ajonjolí. ¡Pídela en COMBO con papas a la francesa y refresco frío!
                    980 CAL.">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img9-WhopperAngrydoble.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>WHOPPER® Angry</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Bacon King&imagen=../img/Menu/alaParrilla/img12-Baconking.png&descripcion=Nuestra BACON KING® cuenta con dos carnes de res a la parrilla, cubiertas con una porción abundante de crujiente tocino, queso americano, cátsup y cremosa mayonesa, sobre un pan suave con ajonjolí. ¡Pídela en COMBO con papas a la francesa y refresco frío!
                    1325 CAL">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img12-Baconking.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Bacon King</h2>
                    </div></Link>

<Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Stacker King&imagen=../img/Menu/alaParrilla/img15-stackerking.png&descripcion=La hamburguesa más grande de todos los tiempos llega a tus dos manos.Con tocino crujiente, queso derretido, salsa Stacker y con 1, 2, 3 o, ¡hasta 4 carnes! Pidela a tu manera.">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/alaParrilla/img15-stackerking.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Stacker King</h2>
                    </div></Link>
          </div>
      </div>
    </div>
    {/* ------------------- CONTENEDOR DE LA SECCION DE BEBIDAS ------------------ */}
        <div className={menuEstilos.containerG} id="bebidas">
            <ul>
                <li className={menuEstilos.titulo} >Bebidas</li>
                <li className={menuEstilos.liView}>
                  <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Jugo de naranja&imagen=../img/Menu/bebidas/img1-Jugo.png&descripcion=Único y refrescante 140 CAL. / 473 ML.">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/bebidas/img1-Jugo.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Jugo de naranja</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Epura&imagen=../img/Menu/bebidas/img4-aguaepura.png&descripcion=¡Acompaña tus combos con una botella de Epura!
                    600 ML.">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/bebidas/img4-aguaepura.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Epura</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna2}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Café Americano&imagen=../img/Menu/bebidas/img2-cafe.png&descripcion=De grano suave, nuestro café americano es una mezcla 100% arábica de América Latina, con notas dulces que te ofrecen un sabor suave, equilibrado y perfecto para comenzar el día.">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/bebidas/img2-cafe.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Café Americano</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna3}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Pepsi®&imagen=../img/Menu/bebidas/img3-pepsilogos.png&descripcion=Acompaña tus COMBOS con un refresco grande del sabor que tú quieras!
                    CH 140 CAL. / 473 ML.
                    M 190 CAL. / 591 ML.
                    G 290 CAL. / 887 ML.">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/bebidas/img3-pepsilogos.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Pepsi®</h2>
                    </div></Link>
                </div>
            </div>
        </div>


         {/* -----------------CONTENEDOR DE LA SECCION DE COMPLEMENTOS----------------- */}
        <div className={menuEstilos.containerG} id="complementos">
            <ul>
                <li className={menuEstilos.titulo}>Complementos</li>
                <li className={menuEstilos.liView}>
                  <Link className={menuEstilos.link} href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Boneless Buffalo&imagen=../img/Menu/complementos/img1-BonelessBufalo.png&descripcion=¿Antojo de algo diferente? Prueba nuestras nuevas y jugosas alitas de pechuga de pollo tipo boneless, cuidadosamente preparadas para ofrecer un sabor jugoso y delicioso bañados en una salsa picante de Buffalo.">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img1-BonelessBufalo.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Boneless Buffalo</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Papas Shake Jalapeño&imagen=../img/Menu/complementos/img4-PapasShakeJalapeno.png&descripcion=Nuestras famosas papas a la francesa con un toque intenso de sabor Jalapeño. ¡Agita tu antojo!">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img4-PapasShakeJalapeno.png" width="370" 
                    height="250" alt='burguer'/>
                        <h2>Papas Shake Jalapeño</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Aros de Cebolla&imagen=../img/Menu/complementos/img7-Arosdecebolla.png&descripcion=Recién hechos y crujientes, nuestros aros de cebolla son el regalo perfecto para sumergirse con alguna de nuestras deliciosas salsas.
                    G 590 CAL.
                    M 490 CAL.
                    CH 360 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img7-Arosdecebolla.png" width="370" 
                    height="250" alt='burguer'/>
                        <h2>Aros de Cebolla</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=PAPAS%20SUPREMAS%20%23AtuManera&imagen=../img/Menu/complementos/img10-PapasSupremasBBQ.png&descripcion=Las deliciosas Papas Supremas ahora también bañadas en salsa BBQ con trocitos sabor tocino y cebollitas crujientes.">
                        <div className={menuEstilos.cs1img1}>
                        <Image className={menuEstilos.img} src="/img/Menu/complementos/img10-PapasSupremasBBQ.png" width="370" 
                        height="250" alt='burguer'/>
                            <h2>PAPAS SUPREMAS #AtuManera</h2>
                        </div>
                    </Link>
                    
                </div>

                <div className={menuEstilos.columna2}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Boneless BBQ&imagen=../img/Menu/complementos/img2-BonelessBBQ.png&descripcion=¿Antojo de algo diferente? Prueba nuestras nuevas y jugosas alitas de pechuga de pollo tipo boneless, cuidadosamente preparadas para ofrecer un sabor jugoso y delicioso bañados en una salsa picante de BBQ.">
                    <div className={menuEstilos.cs2img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/complementos/img2-BonelessBBQ.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Boneless BBQ</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Papas Shake Fuego&imagen=../img/Menu/complementos/img5-PapasShakeFuego.png&descripcion=Nuestras famosas papas a la francesa con un toque intenso de sabor Fuego. ¡Agita tu antojo!">
                    <div className={menuEstilos.cs2img1}>
                        <Image className={menuEstilos.img} src="/img/Menu/complementos/img5-PapasShakeFuego.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Papas Shake Fuego</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Papas a la Francesa&imagen=../img/Menu/complementos/img8-Papas.png&descripcion=Más deliciosas que nunca, nuestras famosas papas a la francesa son de corte regular, saladito, doradas por fuera y suaves por dentro.
                    G 470 CAL.
                    M 390 CAL.
                    CH 310 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                        <Image className={menuEstilos.img} src="/img/Menu/complementos/img8-Papas.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Papas a la Francesa</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna3}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Boneless Carolina Reapera&imagen=../img/Menu/complementos/img3-BonelessCarolineReaper.png&descripcion=¿Antojo de algo diferente? Prueba nuestras nuevas y jugosas alitas de pechuga de pollo tipo boneless, cuidadosamente preparadas para ofrecer un sabor jugoso y delicioso bañados en una salsa picante de Carolina Reaper.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img3-BonelessCarolineReaper.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Boneless Carolina Reaper</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Papas Hashbrown&imagen=../img/Menu/complementos/img6-hashbrown.png&descripcion=La mejor manera de comer papas – en forma de croqueta.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img6-hashbrown.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Papas Hashbrown</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Papas Supremas&imagen=../img/Menu/complementos/img9-PapasSupremasQueso.png&descripcion=Descubre las nuevas papas supremas bañadas en salsa sabor a queso con trocitos sabor tocino y cebollitas crujientes!">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/complementos/img9-PapasSupremasQueso.png" width="370" 
                        height="250" alt='burguer'/>
                        <h2>Papas Supremas</h2>
                    </div></Link>
                </div>
            </div>
        </div>

        {/* -----------------CONTENEDOR DE LA SECCION DE POLLO ----------------- */}
        <div className={menuEstilos.containerG} id="depollo">
            <ul>
                <li className={menuEstilos.titulo}>De Pollo</li>
                <li className={menuEstilos.liView}>                  
                  <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=3 Quesos y Tocino&imagen=../img/Menu/dePollo/img1-KingQuesosTocino.png&descripcion=¡Prueba nuestro nuevo sándwich de jugosa pechuga de pollo crujiente con una combinación de 3 quesos distintos!">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/dePollo/img1-KingQuesosTocino.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>3 Quesos y Tocino</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=King de Pollo®&imagen=../img/Menu/dePollo/img4-Kingpolloqueso.png&descripcion=Nuestro original King de Pollo® se prepara con pollo empanizado con dos rebanadas de queso amarillo y combinación de lechugas y mayonesa cremosa sobre un pan suave alargado con ajonjolí.
                    700 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img4-Kingpolloqueso.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>King de Pollo®</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Furiosa Crispy King&imagen=../img/Menu/dePollo/img7-FuriosaKing.png&descripcion=Preparada con nuestro pollo crujiente, cebolla angry, jitomate, lechuga fresca picada, jalapeños, mayonesa cremosa y salsa angry y tocino. Servida en un suave pan brioche.

                    1475 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img7-FuriosaKing.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Furiosa Crispy King</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Crispy Chicken con Queso&imagen=../img/Menu/dePollo/img10-Crispychicken.png&descripcion=Nuestro clásico pollo crujiente Jr. se arma con lechuga fresca picada, queso amarillo, una capa de mayonesa cremosa, servida sobre un pan suave con ajonjolí, tostado perfectamente.
                    430 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img10-Crispychicken.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Crispy Chicken con Queso</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna2}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Spicy Ranch&imagen=../img/Menu/dePollo/img2-KingSpicyRanch.png&descripcion=¡Prueba nuestro nuevo sándwich de jugosa pechuga de pollo crujiente con una combinación de salsa búfalo y aderezo ranch!">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img2-KingSpicyRanch.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Spicy Ranch</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Crispy King&imagen=../img/Menu/dePollo/img5-CrispyKing.png&descripcion=Nuestro clásico pollo crujiente. Se arma con lechuga fresca picada, jitomate, una capa de mayonesa cremosa, servida sobre un pan suave.

                    1130 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img5-CrispyKing.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Crispy King</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=King de Pollo con Guacamole&imagen=../img/Menu/dePollo/img8-Kingpolloguacamole.png&descripcion=Preparada con una receta ancestral, pero más nueva que nunca. A la exquisita King de Pollo(R) con cebolla blanca rebanada, lechuga fresca, jalapeños y queso monterrey, le agregamos el más rico guacamole. Tu crees que la conoces, pero no. Pruébala y después nos dices.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img8-Kingpolloguacamole.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>King de Pollo con Guacamole</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna3}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Classic Crispy King&imagen=../img/Menu/dePollo/img3-CrispyKingClassic.png&descripcion=¡Prueba nuestro nuevo sándwich de jugosa pechuga de pollo crujiente!">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img3-CrispyKingClassic.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Classic Crispy King</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=BBQ Bacon Crispy King&imagen=../img/Menu/dePollo/img6-BBQBaconcrispyking.png&descripcion=

                    ¡Para los amantes del BBQ y el tocino!
                    
                    Al sabroso sabor a pollo crujiente que ya conoces con lechuga fresca picada, jitomate, una capa de mayonesa cremosa, servida sobre un pan suave, le agregamos el delicioso sabor a tocino rebanado, salsa BBQ Hot Spicy, cebolla blanca rebanada y queso monterrey. ¡No te lo imagines, pruebala!
                    ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img6-BBQBaconcrispyking.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>BBQ Bacon Crispy King</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Nuggets 10 piezas&imagen=../img/Menu/dePollo/img9-Nuggets10.png&descripcion=Hechos con carne blanca, nuestros nuggets de pollo son tiernos y jugosos por dentro, empanizados con el sazón de la casa, y son perfectos para acompañarlos con cualquiera de nuestras deliciosas salsas. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/dePollo/img9-Nuggets10.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Nuggets 10 piezas</h2>
                    </div></Link>
                </div>
            </div>
        </div>
    
        {/* ------------------ CONTENEDOR DE LA SECCION DE DESAYUNOS------------------------ */}
        <div className={menuEstilos.containerG} id="desayunos">
            <ul>
                <li className={menuEstilos.titulo}>Desayunos</li>
                <li className={menuEstilos.liView}>                  
                  <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Desayuno del Rey&imagen=../img/Menu/desayunos/img1-Desayunorey.png&descripcion=Desayuna como Rey con este completo desayuno que incluye: Tres hotcakes, huevo revuelto, papas Hasbrown y jamón.
                    630 CAL.">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/desayunos/img1-Desayunorey.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Desayuno del Rey</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Croissan'wich®&imagen=../img/Menu/desayunos/img4-Croissanwich.png&descripcion=Nuestro CROISSAN'WICH® es un cuernito relleno de jamón, omelette de huevo, queso americano derretido y deliciosos frijoles refritos. Una excelente opción para comenzar el día.
                    310 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img4-Croissanwich.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Croissan'wich®</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Hot Cakes 3 piezas&imagen=../img/Menu/desayunos/img7-Hotcakes.png&descripcion=Tres hotcakes calientitos para empezar el día.
                    3 PIEZAS 320 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img7-Hotcakes.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Hot Cakes 3 piezas</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna2}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Desayuno Premium&imagen=../img/Menu/desayunos/img2-Desayunopremium.png&descripcion=Dos hotcakes, delicioso el huevo a la mexicana, dos molletes y una jugosa salchicha">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img2-Desayunopremium.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Desayuno Premium</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Extra Long Jamón y Queso&imagen=../img/Menu/desayunos/img5-longjamonqueso.png&descripcion=Pan suave alargado con ajonjolí relleno de jamón y queso americano derretido, servido sobre una cama de lechuga fresca cortada y mayonesa cremosa.
                    490 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img5-longjamonqueso.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Extra Long Jamón y Queso</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Croissant Jamón y Queso&imagen=../img/Menu/desayunos/img8-CroissantJamónQueso.png&descripcion=El clásico y delicioso cuernito con jamón y queso derretido.350 CAL.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img8-CroissantJamónQueso.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Croissant Jamón y Queso</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna3}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Desayuno Meat Lovers&imagen=../img/Menu/desayunos/img3-Desayunomeatlovers.png&descripcion=Cuatro rebanadas de jamón, una porción de salchicha, 3 rebanadas completas de tocino y dos hotcakes.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img3-Desayunomeatlovers.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Desayuno Meat Lovers</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Extra Long Huevo y Tocino&imagen=../img/Menu/desayunos/img6-longhueevotocino.png&descripcion=Pan suave alargado con ajonjolí relleno de huevo revuelto, crujiente tocino y cremosa mayonesa.520 CAL.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/desayunos/img6-longhueevotocino.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Extra Long Huevo y Tocino</h2>
                    </div></Link>
                </div>
            </div>
        </div>

        {/* ------------------- CONTENEDOR DE LA SECCION DE ENSALADAS ----------------- */}
        <div className={menuEstilos.containerG} id="ensaladas">
            <ul>
                <li className={menuEstilos.titulo}>Ensaladas</li>
                <li className={menuEstilos.liView}>
                  <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Ensalada del Chef&imagen=../img/Menu/ensaladas/img1-Ensaladachef.png&descripcion=Deliciosa combinación de lechugas y vegetales frescos con una combinación de salsas de la casa. ¡Vas a querer felicitar al chef! 120 CAL.
                    CON POLLO 360 CAL. ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/ensaladas/img1-Ensaladachef.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Ensalada del Chef</h2>
                    </div></Link>
                </div>
            </div>
        </div>

        {/* ------------------- CONTENEDOR DE LA SECCION DE NIÑOS ------------------- */}
        <div className={menuEstilos.containerG} id="niños">
            <ul>
                <li className={menuEstilos.titulo}>Niños</li>
                <li className={menuEstilos.liView}>
                  <Link className={menuEstilos.link} href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Nuggets 6 piezas&imagen=../img/Menu/niños/img1-Nuggets6.png&descripcion=Hechos con carne blanca, nuestros nuggets de pollo son tiernos y jugosos por dentro, empanizados con el sazón de la casa, y son perfectos para acompañarlos con cualquiera de nuestras deliciosas salsas. 320 CAL ">
                    <div className={menuEstilos.cs1img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/niños/img1-Nuggets6.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Nuggets 6 piezas</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna2}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Hamburguesa de Pollo&imagen=../img/Menu/niños/img2-Hamburguesapollo.png&descripcion=Hamburguesa de pollo con una rebanada de queso amarillo derretido y catsup, sobre un pan suave con ajonjolí. 270 CAL ">
                    <div className={menuEstilos.cs2img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/niños/img2-Hamburguesapollo.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Hamburguesa de Pollo</h2>
                    </div></Link>
                </div>

                <div className={menuEstilos.columna3}>
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Hamburguesa de Carne&imagen=../img/Menu/niños/img3-Hamburguesacarne.png&descripcion=Nuestra hamburguesa con queso lleva nuestra deliciosa carne a la parrilla cubierta con una rebanada de queso amarillo derretido y salsa de tomate, sobre un pan suave con ajonjolí. 340 CAL">
                    <div className={menuEstilos.cs3img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/niños/img3-Hamburguesacarne.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Hamburguesa de Carne</h2>
                    </div></Link>
                </div>
            </div>
        </div>

        {/* ------------------- CONTENEDOR DE LA SECCION DE POSTRES ------------------- */}
        <div className={menuEstilos.containerG} id="postres">
            <ul>
                <li className={menuEstilos.titulo}>Niños</li>
                <li className={menuEstilos.liView}>
                  <Link href={'/menu'} style={{color: "rgb(255, 32, 32);", fontWeight: "bold;", 
                  textDecoration: "none;"}}>View All</Link>
                </li>
            </ul>

            <div className={menuEstilos.containerProducto}>
                <div className={menuEstilos.columna1}>
                <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Malteada Chocolate Abuelita&imagen=../img/Menu/postres/img1-Malteadachocolateabu.png&descripcion=Prueba nuestra nueva malteada de Chocolate Abuelita, deliciosa bebida que combina la riqueza del chocolate con una textura cremosa.">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/postres/img1-Malteadachocolateabu.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Malteada Chocolate Abuelita</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Pay S'more&imagen=../img/Menu/postres/img4-SmoresPay.png&descripcion=Pay S'more

                    Pay con sabor a malvavisco tostado, chocolate y galleta Graham.​
                    ">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/postres/img4-SmoresPay.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Pay S'more</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Malteada Turin&imagen=../img/Menu/postres/img7-Malteadaturín.png&descripcion=Toda la intensidad de nuestro increíble helado de vainilla mezclado con suave y cremoso chocolate con leche Turin.

                    Bébelo de inicio a fin en tu malteada mezclada a la perfección.">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/postres/img7-Malteadaturín.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Malteada Turin</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Brownie con Chocolate HERSHEY'S®&imagen=../img/Menu/postres/img10-Brownie.png&descripcion=Prueba el nuevo y delicioso brownie de chocolate semiamargo, una pequeña dosis de felicidad en cada mordida. Cada uno envuelto en bolsita individual.">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/postres/img10-Brownie.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Brownie con Chocolate HERSHEY'S®</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Pay de Dulce de Leche&imagen=../img/Menu/postres/img13-paydulceleche.png&descripcion=Delicioso pay relleno de dulce de leche">
                    <div className={menuEstilos.cs1img1}>
                      <Image className={menuEstilos.img} src="/img/Menu/postres/img13-paydulceleche.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Pay de Dulce de Leche</h2>
                    </div></Link>


                </div>
                <div className={menuEstilos.columna2}>
                <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Sundae S'more&imagen=../img/Menu/postres/img2-SmoresSundae.png&descripcion=Helado de vainilla con malvaviscos y chocolate.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img2-SmoresSundae.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Sundae S'more</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Cono Relleno Nutella&imagen=../img/Menu/postres/img5-ConoNutella.png&descripcion=El final es tan bueno como el comienzo. Nuestro delicioso helado, ahora con cono relleno de la crema de avellanas más famosa y deliciosa para un final sencillamente delicioso.">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img5-ConoNutella.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Cono Relleno Nutella</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Cono&imagen=../img/Menu/postres/img8-Cono2.png&descripcion=¡Un postre clásico y dulce! Chocolate, vainilla o combinado.
                    SENCILLO 100 CAL.
                    DOBLE 180 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img8-Cono2.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Cono</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Pay HERSHEY'S®&imagen=../img/Menu/postres/img11.payherseys.png&descripcion=Da la bienvenida a nuestro Pay HERSHEY'S® Primero, una corteza de chocolate crujiente y una parte de relleno cremoso de chocolate, adornado con un delicioso relleno de chocolate HERSHEY'S® y chispas de chocolate. La marca HERSHEY'S® se utiliza bajo licencia de Burger King Corporation. 240 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img11.payherseys.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Pay HERSHEY'S®</h2>
                    </div></Link>

                    
                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Sundae Chocolate / Fresa&imagen=../img/Menu/postres/img14-Sundae.png&descripcion=Cremoso helado de vainilla con un fudge de chocolate.
                    250 CAL. ">
                    <div className={menuEstilos.cs2img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img14-Sundae.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Sundae Chocolate / Fresa</h2>
                    </div></Link>
                </div>


                <div className={menuEstilos.columna3}>
                <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Malteada S'more&imagen=../img/Menu/postres/img3-SmoresMalteada.png&descripcion=Helado de vainilla perfectamente mezclado con sabor a malvaviscos, chocolate y galleta Graham.">
                    <div class="cs3-img1">
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img3-SmoresMalteada.png" width="370" 
                      height="250" alt='burguer'/>
                        <h2>Malteada S'more</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=King Fusion Nutella&imagen=../img/Menu/postres/img6-KingFusiónnutella.png&descripcion=

                    ¡No hay forma de que esta fusión salga mal!
                    
                    Toda la intensidad de nuestro delicioso helado de vainilla ahora cubierto con la crema de avellanas más famosa y deliciosa.
                    
                    Comelo de inicio a fin en tu King Fusion Nutella.
                    ">
                    <div className={menuEstilos.cs3img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img6-KingFusiónnutella.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>King Fusion Nutella</h2>
                    </div></Link>


                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Cono Relleno&imagen=../img/Menu/postres/img9-ConoRelleno.png&descripcion=Nuestro delicioso helado, ahora con cono relleno de chocolate para un final sencillamente delicioso.
                    SENCILLO 220 CAL.
                    DOBLE 280 CAL. ">
                    <div className={menuEstilos.cs3img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img9-ConoRelleno.png" width="370" height="250" 
                    alt='burguer'/>
                        <h2>Cono Relleno</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Pay de Manzana&imagen=../img/Menu/postres/img12-paymanzana.png&descripcion=Con un relleno de manzana y envuelto en costra de hojaldre, nuestro Pay de Manzana se se sirve calientito, recién salido de la cocina.
                    250 CAL.">
                    <div className={menuEstilos.cs3img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img12-paymanzana.png" width="370"
                     height="250" alt='burguer'/>
                        <h2>Pay de Manzana</h2>
                    </div></Link>

                    <Link className={menuEstilos.link} href="../pages/Producto.html?nombre=Malteada de Fresa, Vainilla o Chocolate&imagen=../img/Menu/postres/img15.Malteadas.png&descripcion=¡Cremosas, dulces, deliciosas!

                    Enfríate con nuestras batidas cremosas. Helado de vainilla perfectamente mezclado con salsa de chocolate o fresa hecho al momento para ti.">
                    <div className={menuEstilos.cs3img1}>
                    <Image className={menuEstilos.img} src="/img/Menu/postres/img15.Malteadas.png" width="370"
                     height="250" alt='burguer'/>
                        <h2>Malteada de Fresa, Vainilla o Chocolate</h2>
                    </div></Link>
                </div>
                </div>
            </div>
        </main>
        
        <footer className={menuEstilos.footer}>
<div className={menuEstilos.fooContainer}>
    <div className={menuEstilos.logo}>
        <Image className={menuEstilos.logo} src='/img/Menu/Logo-3.svg' width='40' height='20' 
        alt="logo"/>
    </div>

    <div className={menuEstilos.linksFoo}>
        <h2>Información</h2>
        <ul>
            <li className={menuEstilos.li}>
                <Link className={menuEstilos.link} href="/">Sitemap HTML</Link>
            </li>
            <li className={menuEstilos.li}>
                <Link className={menuEstilos.link} href="/">Restaurantes</Link>
            </li>
            <li className={menuEstilos.li}>
                <Link className={menuEstilos.link} href="/">Contáctanos</Link>
            </li>
            <li className={menuEstilos.li}>
                <Link className={menuEstilos.link} href="/">Preguntas frecuentes</Link>
            </li>
            <li className={menuEstilos.li}>
                <Link className={menuEstilos.link} href="/">Aviso de privacidad 
                Integral</Link>
            </li>
        </ul>
    </div>
</div>
<hr style={{ color: 'rgba(131, 131, 131, 0.354)' }} />
<div className={menuEstilos.redes}>
    <p>TM & © 2022 Burger King Corporation. All Rights reserved</p>

    <Image className={menuEstilos.imfR} src='/img/Menu/Facebook.svg' width='30'height='30' 
    alt="red"/>
    <Image src='/img/Menu/Twitter.svg' width='30'height='30' alt="red"/>
    <Image src='/img/Menu/Youtube.svg'  width='30'height='30' alt="red"/>
    <Image src='/img/Menu/Instagram.svg'  width='30'height='30' alt="red"/>
</div>
</footer>
        </>
    )
}
