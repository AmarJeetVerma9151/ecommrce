import React from 'react'

const Cart = (props) => {

  let sum = 0
  for (let i = 0; i < props.getCart.length; i++) {
   
    sum = sum + props.getCart[i].price
  }
  const handleDelete = (obj, i) => {

    console.log(obj)
    console.log(i)
    let copyArr = [...props.getCart]
    copyArr.splice(i, 1)
    console.log(props.getCart)

    props.setGetCart(copyArr)

  }
  const handleincrement = (obj, i) => {
    let updatedobj = {
      ...obj,
      quantity: obj.quantity + 1,
      price: obj.price + (obj.price / obj.quantity)
    }

    let copyArr = [...props.getCart]
    copyArr[i] = updatedobj
    props.setGetCart(copyArr)
  }

  const handleDecrement=(obj,i)=>{
    let updatedobj = {
      ...obj,
      quantity: obj.quantity - 1,
      price: obj.price - (obj.price / obj.quantity)
    }
    if (updatedobj.quantity<1)
    {
      handleDelete(obj,i)
      return
    }

    let copyArr = [...props.getCart]
    copyArr[i] = updatedobj
    props.setGetCart(copyArr)
  }

  return (
    <div>
     { props.getCart.length>0 &&<table className="table align-middle">
        <thead>
          <tr>
            <th scope="col">s.no</th>
            <th scope="col">product</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">Quantity</th>

            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            props.getCart.map((ele, index) => {
              return <tr>
                <th scope="row">{index + 1}</th>
                <td><img style={{ width: "150px", height: "150px" }} src={ele.thumbnail} alt="" /></td>
                <td>{ele.title}</td>
                <td>{Math.ceil(ele.price)}$</td>
                <td>
                  <button onClick={() => handleincrement(ele, index)} className='btn btn-info'>+</button>{ele.quantity}<button onClick={()=>handleDecrement(ele,index)} className='btn btn-info'>-</button>
                </td>
                <td><button onClick={() => handleDelete(ele, index)} className='btn btn-danger'>Delete</button></td>
              </tr>
            })
          }
        </tbody>

        {
       !props.getCart.length && <h1 className='text-center '> please Add some item for display <br /> Total={Math.ceil (sum)}$</h1>
      }

      </table>}
      
        
    </div>
  )
}

export default Cart