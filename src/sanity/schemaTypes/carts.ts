// schemas/cart.js
export default {
    name: 'carts',
    title: 'Cart',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'foods' }], // 'product' aapka existing product schema hai
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
        validation: (Rule:any) => Rule.min(1).required(),
      },
      {
        name: 'userId',
        title: 'User ID',
        type: 'string',
      },
    ],
  };
  