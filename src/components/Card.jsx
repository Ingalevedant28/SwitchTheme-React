import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}