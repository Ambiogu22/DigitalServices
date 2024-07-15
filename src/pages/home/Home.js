import restaurant_menu from '../../assets/restaurant_menu.jpg'

const Home = () => {
    return(
        <div className="mt-28 mb-12 px-4">
            <div className="flex flex-col gap-6">
                <h2 className="title">Innovate Your Menus</h2>
                <div className="flex flex-col gap-8">
                    <ul className="flex flex-col gap-4 text-md">
                        <li><b>Enhanced Customer Experience:</b> By providing QR code menus and websites, you make interactions seamless and convenient for customers,
                         which can increase satisfaction and loyalty.</li>
                        <li><b>Cost Efficiency:</b> Digital menus and websites reduce the need for physical materials and can be updated easily without additional printing costs,
                        saving money in the long run.</li>
                        <li><b>Operational Efficiency:</b> Streamlining operations through digital solutions can help businesses run more smoothly,
                        reducing manual tasks and allowing staff to focus on more critical areas.</li>
                        <li><b>Modernization:</b> Partnering with your company helps businesses stay current with the latest technology trends, 
                        which can enhance their brand image and competitiveness.</li>
                    </ul>
                </div>
                <img src={restaurant_menu} alt="Restaurant Menu" className='rounded-lg'/>
                <div className='flex flex-col gap-6 p-4 bg-[#7B72DB] rounded-lg text-[#FFF]'>
                    <h2 className='font-semibold text-xl text-center'>Using QR Code Menus</h2>
                    <ul className="flex flex-col gap-4 text-md">
                        <li><b>Cost Savings:</b> Digital menus reduce the need for printed materials, saving on printing and reprinting costs every time there’s a change in the menu.</li>
                        <li><b>Convenience and Speed:</b> Customers can access the menu quickly by scanning a QR code with their smartphones, streamlining the ordering process and reducing wait times.</li>
                        <li><b>Easy Updates:</b>Updating a digital menu is simple and instantaneous, allowing you to make real-time changes to reflect new items, prices, or specials without the hassle of reprinting.</li>
                        <li><b>Enhanced Customer Experience:</b> Digital menus can include pictures, descriptions, and even interactive elements, providing a richer and more engaging experience for customers.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home;