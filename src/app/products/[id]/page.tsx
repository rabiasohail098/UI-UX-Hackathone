"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
interface Data {
  id: number;
  img: string;
  title: string;
  price: string;
}

interface Params {
  params: {
    id: string;
  };
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      <div key={filteredItem.id} className="shadow-md p-4 rounded-lg">
        <Image src={filteredItem.img} alt={filteredItem.title} width={312} height={267} />
        <h2 className="text-xl font-bold mt-2">{filteredItem.title}</h2>
        <p className="text-gray-600">{filteredItem.price}</p>
      </div>
    </div>
  );
};

export default Page;
