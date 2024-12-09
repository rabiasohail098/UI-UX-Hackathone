import React from 'react';

const Foodmenu = () => {
  const menuItems = [
    {
      title: 'Caffè macchiato',
      description: 'Toasted French bread topped with romano, cheddar',
      calories: '560 CAL',
      price: '32$',
      highlighted: true,
    },
    {
      title: 'Aperol Spritz Capacianno',
      description: 'Gorgonzola, ricotta, mozzarella, taleggio',
      calories: '700 CAL',
      price: '43$',
      highlighted: false,
    },
    {
      title: 'Caffe Latte Campuri',
      description: 'Ground cumin, avocados, peeled and cubed',
      calories: '1000 CAL',
      price: '14$',
      highlighted: false,
    },
    {
      title: 'Tormentoso BushTea Pintoage',
      description: 'Spreadable cream cheese, crumbled blue cheese',
      calories: '560 CAL',
      price: '35$',
      highlighted: false,
    },
    {
        title: 'Caffè macchiato',
        description: 'Toasted French bread topped with romano, cheddar',
        calories: '560 CAL',
        price: '32$',
        highlighted: false,
      },
      {
        title: 'Aperol Spritz Capacianno',
        description: 'Gorgonzola, ricotta, mozzarella, taleggio',
        calories: '700 CAL',
        price: '43$',
        highlighted: false,
      },
      {
        title: 'Caffe Latte Campuri',
        description: 'Ground cumin, avocados, peeled and cubed',
        calories: '1000 CAL',
        price: '14$',
        highlighted: false,
      },
      {
        title: 'Tormentoso BushTea Pintoage',
        description: 'Spreadable cream cheese, crumbled blue cheese',
        calories: '560 CAL',
        price: '35$',
        highlighted: false,
      },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-gray-800">
          Our Food Menu
        </h2>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque
          massa congue.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center mb-12">
        <ul className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm sm:text-base">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map(
            (category, index) => (
              <li
                key={index}
                className="cursor-pointer  hover:underline font-semibold  hover:text-orange-500 transition-colors duration-300"
              >
                {category}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center border-b pb-4 hover:bg-gray-100 transition-all duration-300 px-4 sm:px-6"
          >
            <div>
              <h3
                className={`text-lg sm:text-xl font-bold ${
                  item.highlighted ? 'text-orange-500' : 'text-gray-800'
                }`}
              >
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
              <p className="text-sm sm:text-base text-gray-600">{item.calories}</p>
            </div>
            <span className="text-lg sm:text-xl font-bold text-orange-500">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodmenu;
