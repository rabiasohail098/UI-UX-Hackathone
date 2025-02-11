export default {
  name: 'users',
  title: 'Users',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'cart',
      title: 'Cart',
      type: 'reference',
      to: [{ type: 'carts' }], // Reference to the user's cart
    },
    {
      name: 'isAdmin',
      title: 'Admin',
      type: 'boolean', // ✅ Admin field (true/false)
      description: 'Check if this user is an admin',
    },
    {
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }], // Reference to user's orders
    },
  ],
};