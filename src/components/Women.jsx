import { useEffect, useState } from 'react'
import Data from '../index'
import { Card } from './Card'
const Women = () => {
  const [womendata, setWomendata] = useState([])

  useEffect(() => {
    const women = Data.filter((val) => val.category !== 'men')
    setWomendata(women)
  }, [])

  return (
    <div className="grid grid-cols-4 gap-6 my-12">
      {womendata.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Women
