export default {
    name: 'food',
    type: 'document',
    title: 'Food',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Food Title',
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description:
          'Category of the food item (e.g., Burger, Sandwich, Drink, etc.)',
      },
      {
        name: 'price',
        type: 'number',
        title: 'Current Price',
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Rating',
        description: 'Customers rating',
      },
   
      {
        name: 'image',
        type: 'image',
        title: 'Food Image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Short description of the food item',
        },
        {
            name: "id",
            type: "string",
            title:"Id"
      },
      {
        name: 'stock',
        type: 'boolean',
        title: 'Available',
        description: 'Availability status of the food item',
      },
    ],
  };
  