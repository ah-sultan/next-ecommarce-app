import WishlistCard from '@/components/Wishlist/WishlistCard';
import { useSelector } from 'react-redux';
import { wishlistSelectedItem } from '@/redux/slice/wishlistSlice';


const WishlistPage = () => {

    const products = useSelector(wishlistSelectedItem)

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    products.map((product, index) => {

                        const { id, title, price, description, category, image, rating } = product

                        return (
                            <WishlistCard key={index} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating} />
                        )

                    })
                }
            </div>
        </div>
    );
};

export default WishlistPage;
