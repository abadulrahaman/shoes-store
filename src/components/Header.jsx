import { BsCart3 } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center py-6 border-[1px] border-transparent border-b-gray-900">
      <div className="flex gap-20 items-center">
        <Link to='/'>
          <h1 className="text-3xl font-bold">Sneakers</h1>
        </Link>
        <nav>
          <ul className="flex items-center gap-5">
            <li>
              <Link to={'/all'}>All</Link>
            </li>
            <li>
              <Link to={'/men'}>Men</Link>
            </li>
            <li>
              <Link to={'/women'}>Women</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className='flex items-center gap-10'>
            <Link to={'/cart'}>
                <BsCart3 className='text-2xl'/>
            </Link>

            <Link to='/'>
                <img 
                  onClick={() => (
                    navigate('/')
                  )}
                  className='h-16' 
                  src="images/image-avatar.png" 
                  alt="Error" 
                />
            </Link>
      </div>
    </div>
  )
}

export default Header;
