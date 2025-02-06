import SpecificProductDetails from "@/app/components/SpecificProductDetails";


const ShopItemServer = async ({ params }: { params: Promise<{ id: string }> }) => {
  const productId = (await params).id
  return (
    <SpecificProductDetails productId={productId} />
  );
};

export default ShopItemServer;
