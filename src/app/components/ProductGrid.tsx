
import Image from "next/image"
type Product = {
    _id:string,
    name:string,
    description:string,
    price:number,
    image_url:string
}
interface ProductGridProps {
    products: Product[];
    addToCart: (product: Product) => void;
}

export default function ProductGrid({ products, addToCart }: ProductGridProps) {
    return (
        <div className="grid grid-cols-3 gap-12 w-[70%] mx-auto">
            {products.map((product: Product) => {
                return (
                    <div key={product._id}>
                        <Image src={product.image_url} width={100} height={100} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={() => addToCart(product)} className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 hover:from-orange-400 hover:via-orange-500 hover:to-orange-600 text-white rounded-2xl text-2xl px-4 py-2">
                            add to cart
                        </button>
                    </div>
                );
            })}
        </div>
    );
}