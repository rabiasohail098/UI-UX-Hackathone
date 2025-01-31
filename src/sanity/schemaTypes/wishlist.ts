// schemas/cart.js
export default {
    name: 'wishlist',
    title: 'Wish List',
    type: 'document',
    fields: [
      {
        name: 'product',
        title: 'Product',
        type: 'reference',
        to: [{ type: 'foods' }], // 'product' aapka existing product schema hai
      },
    
      {
        name: 'userId',
        title: 'User ID',
        type: 'string',
      },
    ],
  };
  