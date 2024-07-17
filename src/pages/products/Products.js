import ProductCard from "./ProductCard";
import image from '../../assets/qr_code_on_table.jpg';

const Products = () => {
    return(
        <div className="mt-28 mb-12 px-4 flex flex-col gap-8">
            <h2 className="text-2xl font-semibold">Products</h2>
            <div className="flex flex-col justify-center items-center gap-12">
                <div className="flex flex-col justify-center items-center">
                    <ProductCard image={image} alt="Imagen" title="QR Codes For Your Store" description="It provides a contactless, convenient, and efficient way for customers to access a restaurant's menu using their smartphones. By scanning the QR code, which is typically displayed on tables or counters, customers can instantly view the menu on their device."/>
                    <button className="py-2 px-4 bg-[#000] text-[#FFF] rounded-lg">Learn More</button>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <ProductCard image={image} alt="Imagen" title="Webapps" description="Testing testing testing testing testing"/>
                    <button className="py-2 px-4 bg-[#000] text-[#FFF] rounded-lg">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Products;