import React from 'react';
import { ShoppingBag } from 'lucide-react';

const EmptyState: React.FC = () => (
    <div className="text-center py-12">
        <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
        <p className="text-lg text-gray-500">لا توجد منتجات</p>
    </div>
);

export default EmptyState