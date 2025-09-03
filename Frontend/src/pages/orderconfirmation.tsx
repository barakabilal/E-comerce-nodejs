import React from 'react';

// Success Icon Component
const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

// Main Order Confirmation Component
const OrderConfirmation = () => {
    return (
        <div className="bg-slate-800 text-gray-200 m-4 font-sans">
            {/* Main Content */}
            <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="max-w-md w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl shadow-indigo-500/10 p-8 text-center">
                    
                    {/* Success Icon */}
                    <div className="mx-auto flex items-center justify-center h-16 w-16 bg-green-500/10 rounded-full mb-6">
                        <SuccessIcon />
                    </div>

                    {/* Confirmation Message */}
                    <h1 className="text-3xl font-bold text-white mb-2">Thank You for Your Order!</h1>
                    <p className="text-gray-400 mb-6">Your order has been placed successfully.</p>
                    <p className="text-gray-400 text-sm">A confirmation email has been sent to your inbox.</p>

                    {/* Order Details Section */}
                    <div className="border-t border-b border-gray-700 my-8 py-6 space-y-4 text-left">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Order Number:</span>
                            <span className="font-semibold text-white">#BTECH-2025-0903A</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Payment Status:</span>
                            <span className="font-semibold text-green-400">Paid</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Estimated Delivery:</span>
                            <span className="font-semibold text-white">September 8, 2025</span>
                        </div>
                    </div>

                    {/* Product Summary */}
                    <div className="text-left mb-8">
                        <h2 className="text-lg font-semibold text-white mb-4">Order Summary</h2>
                        <div className="flex items-center space-x-4">
                            <div className="w-20 h-20 bg-gray-700 rounded-lg flex-shrink-0">
                                <img src="https://placehold.co/80x80/65459B/FFFFFF?text=Phone" alt="Product" className="w-full h-full object-cover rounded-lg" />
                            </div>
                            <div className="flex-grow">
                                <p className="font-semibold text-white">Galaxy S25 Ultra</p>
                                <p className="text-sm text-gray-400">Qty: 1</p>
                            </div>
                            <p className="font-semibold text-white">$2,499</p>
                        </div>
                    </div>
                    
                    {/* Total */}
                    <div className="flex justify-between items-center border-t border-gray-700 pt-4 font-bold text-lg">
                        <span className="text-white">Total</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">$2,499.00</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                            Track Your Order
                        </a>
                        <a href="#" className="w-full bg-gray-700 hover:bg-gray-600 text-gray-200 font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out">
                            Continue Shopping
                        </a>
                    </div>
                </div>
            </main>

            
        </div>
    );
};

export default OrderConfirmation;