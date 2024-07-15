import ProductCard from "./ProductCard";
import image from '../../assets/qr_code_on_table.jpg';

const Products = () => {
    return(
        <div className="mt-28 mb-12 px-4 flex flex-col gap-8">
            <h2 className="title">Products</h2>
            <div className="flex flex-col justify-center items-center gap-8">
                <ProductCard image={image} alt="Imagen" title="QR Code For Your Store" description="Testing testing testing testing testing"/>
                <ProductCard image={image} alt="Imagen" title="Webapps" description="Testing testing testing testing testing"/>
            </div>
        </div>
    )
}

export default Products;