import { ImportExportTwoTone } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import React from 'react'
import banner from '../images/banner.jpg'
import './home.css';
import Product from './product'

const Home = () => {


return (
    <div className="home">
    <div className="banner">
        <img src={banner} alt="banner"/>
    </div>
    <div className="home__items">
        
            <Product 
            id={1}
            title={"OPPO F17 PRO Ultra Sleek Design 6 AI Portrait Cameras"}
            rating={<Rating value={5}/>}
            price={450.99}
            image={"https://static-01.daraz.pk/p/2dcbb4f14111be1ca42561781778e705.jpg"}
            />
            
             <Product 
             id={2}
            title={"Dany Galaxy G-15 10000 mAH Power Bank With Led Display"}
            rating={<Rating value={4}/>}
            price={19.99}
            image={"https://static-01.daraz.pk/p/cf96c3f82af1ff48ece62f2d3b7a35c8.jpg"}
            />
             <Product
             id={3} 
            title={"Best Hiking & Traveling Light Weight Backpack Water Resistant"}
            rating={<Rating value={3}/>}
            price={59.99}
            image={"https://static-01.daraz.pk/p/9321109bb1ddf9530a2d35174d2846ef.jpg"}
            />
        
        <Product 
            id={4}
            title={"Samsung N5000 - 40 Inch Full HD Flat TV Series 5"}
            rating={<Rating value={4}/>}
            price={490.99}
            image={"https://static-01.daraz.pk/p/c308db408389430ccca845e2570414ea.png"}
            />
             <Product
             id={5} 
            title={"F9-5 TWS Wireless Bluetooth 5.0 Earbuds"}
            rating={<Rating value={5}/>}
            price={24.99}
            image={"https://static-01.daraz.pk/p/fb28413bc50341a89a773ed41e8a8a55.jpg"}
            />
             <Product
             id={6} 
            title={"Wiresto Wireless Bluetooth 5.0 Headphone"}
            rating={<Rating value={3}/>}
            price={29.99}
            image={"https://static-01.daraz.pk/p/54e31e18f7c963048340acdca7aa6f0e.jpg"}
            />

        <Product 
            id={7}
            title={"God:A Human History Of Religion"}
            rating={<Rating value={5}/>}
            price={4.99}  
            image={"https://static-01.daraz.pk/original/5981a6bed02a42e77e747d0ff9b44a5e.jpg"}
            />
             <Product
             id={8} 
            title={"BEAUTIFULL AND STYLISH STRAP WATCH FOR GENTS"}
            rating={<Rating value={5}/>}
            price={49.99}    
            image={"https://static-01.daraz.pk/p/068ed179ef8491b2be6a0b2d20840bd8.jpg"}
            />
             <Product
             id={9} 
            title={"New Stylish Sneaker for Men - Black"}
            rating={<Rating value={4}/>}
            price={9.99}
            image={"https://static-01.daraz.pk/p/982948b25ad32148eb0f6a078065df54.jpg"}
            />

<Product
             id={10} 
            title={"Lenovo Laptop Shoulder Bag T210, 15.6-Inch for Laptop"}
            rating={<Rating value={4}/>}
            price={12.99}
            image={"https://m.media-amazon.com/images/I/71hrx6vNjPL._AC_UL320_.jpg"}
            />

<Product
             id={11} 
            title={"Wireless Bluetooth Controller Compatible with Nintendo Switch Pro"}
            rating={<Rating value={5}/>}
            price={9.99}
            image={"https://m.media-amazon.com/images/I/71I6iFO5FdL._AC_UY218_.jpg"}
            />

<Product
             id={12} 
            title={"Wansview Wireless Security Camera, IP Camera 1080P HD"}
            rating={<Rating value={4}/>}
            price={30.99}
            image={"https://m.media-amazon.com/images/I/61ZZMqjlfSL._AC_UL320_.jpg"}
            />
        </div>
    </div>
)

}

export default Home;