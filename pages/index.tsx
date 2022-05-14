import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
      <Head>
        <title>Home</title>
      </Head>
      <p>
        Pagina de Index
      </p>
      <Link href='/admin/usuarios'>
        <p className='cursor-pointer'> ir a admin Usuarios</p>
      </Link>
    </div>
  )
}

export default Home
