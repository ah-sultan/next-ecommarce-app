import ProductCard from "../ProductCard/ProductCard"


function AllProducts(props) {
  return (
    <div className="container mx-auto py-10 px-10">
        <div className="grid grid-cols-4 gap-10">
            {
                props?.products?.map((product, index) => {
                    const {id, title, price, description, category,image, rating} = product
                    return(
                        <ProductCard key={index} id={id} title={title} price={price} description={description} category={category} image={image} rating={rating}/>
                    )  
                })
            }
        </div>
    </div>
  )
}

export default AllProducts