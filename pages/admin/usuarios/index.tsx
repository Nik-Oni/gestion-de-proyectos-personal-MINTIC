import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
  return (
      <div>
        <Head>
          <title>Admin usuarios | Gestion de Proyectos</title>
        </Head>
        <div>Pagina de admin de usuarios</div>
        <Link href='/'>
            <a> Ir al home</a>
        </Link>

      </div>
  )
}

export default index