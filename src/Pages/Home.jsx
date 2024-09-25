import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  // console.log(props.data)
const viewhandle=(a,b)=>{
  console.log(a)
  console.log(b)
}



  const [products, setproducts] = useState([])

  const getAllData = async () => {
    let res = await fetch('https://dummyjson.com/products?sortBy=title&order=asc')
    let data = await res.json()
    console.log(data.products)
    setproducts(data.products)
    console.log(products)
  

  }
  useEffect(() => {
    getAllData()
  },[])

const carthandle=(ans)=>{
props.getArray(ans)
}

  return (
    <div className='row m-0 p-0 d-flex justify-content-center gap-3 bg-dark'>
      {products?.map((obj,i) => {
        return <div className="card" style={{ width: '18rem' }}>
          <img src={obj.thumbnail} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5  className="card-title text-primary text-truncate"> {obj.title}</h5>
            <p className="card-text"> {obj.price}$</p>
            <Link onClick={()=>viewhandle(obj,i)}  to ="/Viewdetails" state ={obj} className="btn btn-primary ">View Details</Link>
            <button onClick={()=>{carthandle(obj,i)}} className="btn btn-secondary  ms-2 ">Add to cart</button>
          </div>
        </div>

      })
      }

    </div>


  )
}

export default Home