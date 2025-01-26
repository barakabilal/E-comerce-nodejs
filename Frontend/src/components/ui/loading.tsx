import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-900 border-opacity-75"></div>
            <p className="ml-4 text-lg text-gray-900 font-semibold">Loading...</p>
        </div>
    );
};

export default Loading;