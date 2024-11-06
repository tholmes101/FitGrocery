import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import BannerSlider from '../../COMPONENTS/Banners/BannerSlider'
import HomeCategories from '../../COMPONENTS/Category/HomeCategories'
import ProductSidebar from '../../COMPONENTS/Product/ProductSidebar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import ProductSlider from '../../COMPONENTS/Product/ProductSlider'

const Home = () => {

  const products = [
    {
        id: 1,
        productimage: img1,
        productname: 'Product 1',
        productprice: 100,
        counttype: '1 each',
        discountpercent: 12
    },
    {
        id: 2,
        productimage: img2,
        productname: 'Product 2',
        productprice: 200,
        counttype: '1 per kg',
        discountpercent: 12
    },
    {
        id: 3,
        productimage: img3,
        productname: 'Product 3',
        productprice: 300,
        counttype: '1 per kg',
        discountpercent: 19
    },
    {
        id: 4,
        productimage: img4,
        productname: 'Product 4',
        productprice: 400,
        counttype: '1 per kg',
        discountpercent: 12
    },
    {
        id: 5,
        productimage: img1,
        productname: 'Product 5',
        productprice: 100,
        counttype: '1 each',
        discountpercent: 12
    },
    {
        id: 6,
        productimage: img2,
        productname: 'Product 6',
        productprice: 200,
        counttype: '1 per kg',
        discountpercent: 12
    },
    {
        id: 7,
        productimage: img3,
        productname: 'Product 7',
        productprice: 300,
        counttype: '1 per kg',
        discountpercent: 19
    },
    {
        id: 8,
        productimage: img4,
        productname: 'Product 8',
        productprice: 400,
        counttype: '1 per kg',
        discountpercent: 12
    },
    {
        id: 9,
        productimage: img1,
        productname: 'Product 9',
        productprice: 300,
        counttype: '1 per kg',
        discountpercent: 19
    },
    {
        id: 10,
        productimage: img2,
        productname: 'Product 10',
        productprice: 400,
        counttype: '1 per kg',
        discountpercent: 12
    }  
]

  return (
    <div>
        <Navbar/>
        <BannerSlider/>
        <HomeCategories/>
        <ProductSidebar/>
        <Footer1/>

        <div className='slidercont'>
          <ProductSlider products={products} categoryname='Related Products'/>
        </div>
        <div className='slidercont'>
          <ProductSlider products={products} categoryname='Explorer More'/>
        </div>
        <Footer2/>
        </div>
  )
}

export default Home