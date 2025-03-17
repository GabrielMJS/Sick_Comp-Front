import React from 'react';

interface SickCompProps {
    title: string;
    description: string;
}

const SickComp: React.FC<SickCompProps> = ({ title, description }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default SickComp;