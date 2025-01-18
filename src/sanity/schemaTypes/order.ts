export default {
  name: 'order',
  type: 'document',
  fields: [
    { name: 'customer', 
      type: 'reference',
       to: [
        { type: 'customer' }], 
         title: 'Customer' 
},
    { name: 'products', 
      type: 'array',
      of: [
     { type: 'reference', 
      to: [ 
          { type: 'product' } 
]
 }],
 title: 'Products' },


    { name: 'totalAmount',
      type: 'number',
      title: 'Total Amount' },
    {
       name: 'status',
       type: 'string',
       title: 'Order Status' }
  ]
};
