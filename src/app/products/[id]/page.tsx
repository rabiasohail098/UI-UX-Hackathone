"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface Params{
    params:{
      [id:string]:number|never
    }
   
}
interface Data{
  [x:string]:never|number|string
    id:number;
    img:string;
    title:string;
    price:string;
}
const data: Data[] = [
  { 
    id: 1, 
    img: '/images/sh1.png', 
    title: 'Fresh Lime',
    price: '$45.00'
 },
  { 
    id: 3, 
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00' 
},
  { 
    id: 4, 
    img: '/images/sh4.png', 
    title: 'Cheese Butter', 
    price: '$10.00' 
},
  { 
    id: 6, 
    img: '/images/sh6.png', 
    title: 'Chicken Chup', 
    price: '$25.00' 
},
  { 
    id: 9, 
    img: '/images/sh3.png', 
    title: 'Pizza', 
    price: '$43.00' 
},
  { 
    id: 11,
     img: '/images/sh5.png',
    title: 'Sandwiches', 
    price: '$25.00' 
},
  { 
    id: 4, 
    img: '/images/sh4.png', 
    title: 'Cheese Butter', 
    price: '$10.00' },
];

const Page = ({ params }: Params) => {
  const router = useRouter();
  const productId = Number(params?.id);
  const filteredItem = data.find((item) => item.id === productId);

  if (!filteredItem) {
    router.push('/error'); 
    return null;
  }

  return (
    <div className='justify-center items-center rounded-md shadow-lg shadow-gray-500 py-12 border-gray-200 my-12 mx-auto  bg-black w-full md:w-[600px] h-auto md:h-[800px]'>
      <div key={filteredItem.id} className="shadow-md space-y-6 mx-6 py-6  border-2 border-gray-400 rounded-lg">
        <Image src={filteredItem.img} alt={filteredItem.title} width={512} height={767} />
        <h2 className="md:text-4xl text-3xl text-[#ffffff] pl-4 font-bold ">{filteredItem.title}</h2>
        <p className="text-orange-500 font-semibold text-2xl md:text-3xl  pl-4">{filteredItem.price}</p>
      </div>
      </div>
  );
};

export default Page;
