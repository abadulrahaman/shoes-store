import { useNavigate } from 'react-router-dom'
import { Card } from './Card'
import Data from '../index' // Ensure Data is correctly imported

const Home = () => {


//   console.log('data: ', Data) // This is console all data from Data
  return (
    <div className="grid grid-cols-4 gap-6 my-12">
      {Data.map((item) => (
        <Card key={item.id} item={item} /> // Pass the whole item as a prop
      ))}

    </div>
  )
}

export default Home
