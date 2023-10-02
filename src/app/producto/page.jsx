'use client'
import { NavbarMe } from '../components/NavbarMe';
import Image from 'next/image';
import styleproducto from '../producto/producto.module.css';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Producto() {
  const router = useRouter();
  const { nombre, imagen, descripcion } = router.query;

  const [nombreProducto, setNombreProducto] = useState('');
  const [imagenProducto, setImagenProducto] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');

  useEffect(() => {
    if (nombre && imagen && descripcion) {
      setNombreProducto(nombre.toString());
      setImagenProducto(imagen.toString());
      setDescripcionProducto(descripcion.toString());
    }
  }, [nombreProducto, imagenProducto, descripcionProducto]);
  
  return (
    <>
      <NavbarMe />
      <main>
        <div id="productoInfo" className={styleproducto.containerProducto}>
          <ul>
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/Menu">Menu</Link>
            </li>
          </ul>
          <div>
            <Image className={styleproducto.img} id="productoImagen" src={imagenProducto} alt="Imagen del producto" width={370} height={250} />
            <h1 className={styleproducto.h1} id="productoNombre">{nombreProducto}</h1>
            <div className={styleproducto.descripcion}>
              <p id="productoDescripcion">{descripcionProducto}</p>
              <hr style={{ color: 'rgba(99, 24, 3, 0.283)', marginTop: '0%' }}></hr>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

