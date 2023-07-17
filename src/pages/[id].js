import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductDetails = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://via.placeholder.com/500x500"
                        alt="Product"
                        className="w-full"
                    />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-4">Product Title</h2>
                    <p className="text-gray-600 mb-4">Product description goes here.</p>
                    <div className="flex items-center mb-4">
                        <span className="text-lg font-semibold mr-2">$99.99</span>
                        <span className="text-gray-500">In Stock</span>
                    </div>
                    <div className="flex items-center mb-4">
                        {/* Product Rating */}
                        <span className="text-xl flex">
                            <AiFillStar className="text-yellow-500" />
                            <AiFillStar className="text-yellow-500" />
                            <AiFillStar className="text-yellow-500" />
                            <AiOutlineStar className="text-yellow-500" />
                            <AiOutlineStar className="text-yellow-500" />
                        </span>
                        <span className="text-gray-500 ml-2">(3.5)</span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
