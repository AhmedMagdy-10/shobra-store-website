import React from 'react';

interface PlaceholderScreenProps {
    title: string;
    icon: React.ReactNode;
}

const PlaceholderScreen: React.FC<PlaceholderScreenProps> = ({ title, icon }) => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
            <div className="text-center">
                <div className="text-gray-300 mb-4 flex justify-center">{icon}</div>
                <p className="text-2xl font-bold text-gray-400">{title}</p>
                <p className="text-gray-500 mt-2">قريباً...</p>
            </div>
        </div>
    );
};

export default PlaceholderScreen;