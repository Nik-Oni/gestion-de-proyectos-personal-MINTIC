import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
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
