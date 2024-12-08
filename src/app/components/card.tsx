import React from 'react'
interface Propstype{
    img:string;
    title:string;
    price:string;
}

const card:React.FC<Propstype> = ({img,title,price}:Propstype) => {
  return (
    <div>
        <h2>{title}</h2>
        <div>
            {img}
        </div>
        <p>{price}</p>
    </div>
  )
}

export default card

interface Propstype1{
    img:string;
    title:string;
    price:string;
    sell:string;
}

export const card1:React.FC<Propstype1> = ({img,title,price,sell}:Propstype1)=>{
return(
    <>
    <h2>{title}</h2>
    <div>{img}</div>
    <p>{price}</p>
    <span>{sell}</span>
    </>
)
}

interface Propstype2{
    img:string;
    name:string;
    chef:string
}

export const Chef:React.FC<Propstype2>= ({img,name,chef}:Propstype2)=>{
    return(
<div>
    <div>
        {img}
    </div>
    <h2>{name}</h2>
    <p>{chef}</p>
</div>
    )
}