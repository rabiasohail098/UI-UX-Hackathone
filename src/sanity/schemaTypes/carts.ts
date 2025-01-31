export default {
  name: 'carts',
  title: 'Cart',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'foods' }], // Reference to the product
    },
 
    {
      name: 'quantity',
      title: 'Quantity',
      type: 'number',
      validation: (Rule:any) => Rule.min(1).required(),
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'users' }], // Reference to the user
    },
  ],
};