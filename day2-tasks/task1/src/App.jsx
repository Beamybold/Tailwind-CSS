import React from 'react';

function ProductGrid() {
  const products = [
    { title: 'Jollof Rice', price: '₦1,500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_9kgUog9S_pdKVCSDELmgeoRhsxv4gKV1g&s' },
    { title: 'Ankara Fabric', price: '₦5,000', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYeL1mYgjH8I62a8diTCLbHhJp4-M4Uur2oQ&s' },
    { title: 'Suya', price: '₦1,000', image: 'https://via.placeholder.com/150?text=Suya' },
    { title: 'Aso-Ebi', price: '₦15,000', image: 'https://via.placeholder.com/150?text=Aso-Ebi' },
    { title: 'Palm Wine', price: '₦1,200', image: 'https://via.placeholder.com/150?text=Palm+Wine' },
    { title: 'Agbada', price: '₦25,000', image: 'https://via.placeholder.com/150?text=Agbada' },
    { title: 'Chin Chin', price: '₦500', image: 'https://via.placeholder.com/150?text=Chin+Chin' },
    { title: 'Puff Puff', price: '₦300', image: 'https://via.placeholder.com/150?text=Puff+Puff' },
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-4">{product.price}</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
