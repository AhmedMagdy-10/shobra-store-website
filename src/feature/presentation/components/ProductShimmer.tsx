import React from 'react';

const ProductShimmer: React.FC = () => (
    <div className="bg-white rounded-2xl border-2 border-gray-200 p-3 animate-pulse">
        <div className="bg-gray-200 h-32 rounded-xl mb-2" />
        <div className="bg-gray-200 h-3 w-full rounded mb-2" />
        <div className="bg-gray-200 h-3 w-2/3 rounded mb-2" />
        <div className="bg-gray-200 h-4 w-1/3 rounded mb-3" />
        <div className="bg-gray-200 h-9 w-full rounded-lg" />
    </div>
);

export default ProductShimmer;
