import React from 'react'
import Image from 'next/image';
interface Propstype{
    img:string;
    title:string;
    price:string;
}

const Card:React.FC<Propstype> = ({img,title,price}:Propstype) => {
  return (
    <div className='w-[312px] h-[330px] py-3 text-left'>
         <div className='h-[267px] w-[312px]'>
            <Image src={img} alt="img" width={312} height={267} className="w-full"/>
        </div>
        <h2 className='font-inter text-[16px] text-left pl-2 font-bold w-[96px] h-[26px]'>{title}</h2>
        <p className='font-inter text-[16px] text-left pl-2 text-[#FF9F0D] w-[54px] h-[26px]'>{price}</p>
    </div>
  )
}

export default Card

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