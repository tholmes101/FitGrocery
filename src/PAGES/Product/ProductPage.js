import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import './ProductPage.css'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'

const ProductPage = () => {
  const { prodid } = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  const [activeimg, setactiveimg] = React.useState({})
  const [count, setcount] = React.useState(1)
  const [showreview, setshowreview] = React.useState(false)

  const getproductdatabyid = async () => {
    let temp = {
      "Code": 200,
      "Message": "Sucess",
      "Data": [
        {
          "ProductId": 1,
          "ProductName": "Product 1",
          "ProductDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "ProductImage": [
            {
              id: 1,
              image: img1
            },
            {
              id: 2,
              image: img2
            },
            {
              id: 3,
              image: img3
            }
          ],
          "Productcode": "P1",
          "ProductCategory": "Category 1",
          "ProductSubCategory": "SubCategory 1",
          "ProductBrand": "Brand 1",
          "ProductColor": "Color 1",
          "ProductSize": "Size 1",
          "ProductWeight": "Weight 1",
          "ProductMaterial": "Material 1",
          "ProductQuantity": 10,
          "ProductUnit": "Unit 1",
          "ProductPrice": 100, // JUst focus on this.
          "SalesPrice": 80,    // Just focus on this.
          "ProductDiscount": 20,
          "ProductDiscountType": "Percentage",
          "ProductTax": 20,
          "ProductTaxType": "Percentage",
          "ProductShippingCharge": 20,
          "ProductReviews" : [
            {
              "ReviewId": 1,
              "Name": "Jillian Holmes",
              "Email":"jh1@test.com",
              "Rating": 5,
              "Date": "2021-08-01",
              "Review": "Great product. I will love to try it again.",
            },
            {
              "ReviewId": 2,
              "Name": "Terence Holmes",
              "Email":"th1@test.com",
              "Rating": 7,
              "Date": "2021-08-22",
              "Review": "These are cool products. I would love to share with someone else.",
            },
            {
              "ReviewId": 3,
              "Name": "Michaela Holmes",
              "Email":"mh1@test.com",
              "Rating": 6,
              "Date": "2021-08-07",
              "Review": "Awesome! Wow!. This is amazing",
            },
            {
              "ReviewId": 4,
              "Name": "TJ Holmes",
              "Email":"tj1@test.com",
              "Rating": 9,
              "Date": "2021-08-05",
              "Review": "I will recommend this product to others.",
            },
          ]


        }
      ]
    }
    if (temp.Code == 200) {
      setimageset(temp.Data[0].ProductImage)
      setproductdata(temp.Data[0])
      setactiveimg(temp.Data[0].ProductImage[0])
    }
  }
  useEffect(() => {
    getproductdatabyid()
  }, [])

  return (
    <div className='productpage'>
      {/*<h1>Product id is - {prodid}</h1>*/}

      <Navbar />

      <div className='pc1'>
        <Link to='/'>
          <button className='goback'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Go Back
          </button>
        </Link>

        <div className='c11'>
            <div className='imgset'>
                {
                  imageset && imageset?.map((item,index) => 
                  {
                    return (
                      <div className='imgsmall'
                          onClick={()=> {
                            setactiveimg(item)
                          }}>
                          <img src={item.image}
                          alt=""
                           className={
                              activeimg.id == item.id ? 'active' : ''
                           }
                          />
                      </div>
                    )
                  })
                }
            </div>
           <div className='imgbig'>
                <img src={activeimg.image} alt="" />

           </div>
        </div>

        <div className='c12'>
          <h1 className='head1'>{productdata.ProductName}
          </h1>
          <div className='c121'>
            <p className='price'>
              ${productdata.SalesPrice * count}
              <span>${productdata.ProductPrice * count}</span>
            </p>

            <div className='incrdecr'>
              <button
                onClick={() => {
                  if (count > 1) {
                    setcount(count - 1)
                  }
                }}
              >-</button>
              <p>{count}</p>
              <button
                onClick={() => {
                  if (count < 10) {
                    setcount(count + 1)
                  }
                }}
              >+</button>
            </div>
          </div>
          <div className='btncont'>
            <button
              onClick={() => {
                alert('Added to cart')
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                alert ('Buy Now')

              }}
            >
              Buy Now
            </button>
          </div>
          </div>
        </div>
      <div className="pc2">
          {
            showreview ?
            <div className='tabs'>
                <button
                    className='inactive'
                    onClick={
                      () => {
                          setshowreview(false)   
                      }
                    }
                 >Description</button>
                 <button
                    className='active'
                    onClick={
                      () => {
                          setshowreview(true)   
                      }
                    }
                 >Reviews</button>
            </div>
            :
            <div className='tabs'>
                <button
                    className='active'
                    onClick={
                      () => {
                          setshowreview(false)   
                      }
                    }
                >Description
                </button>
                <button
                    className='inactive'
                    onClick={
                      () => {
                          setshowreview(true)   
                      }
                    }
                >Reviews</button>
                
            </div>
          }
          {
            showreview ?
            <div className='reviewcont'>
                <form>
                    <div className='fromgroup'>
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>

                    <div className='fromgroup'>
                        <label htmlFor="">Email</label>
                        <input type="email" />
                    </div>

                    <div className='fromgroup'>
                        <label htmlFor="">Review</label>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button>Submit</button>
                </form>

                <div className='allreview'>
                  <h1 className='head1'>Product Reviews</h1>  
                  {productdata.ProductReviews &&
                      productdata.ProductReviews.map((item,index) => {
                        return (
                            <div className='review'>
                                <div className='reviewhead'>
                                    <p className='name'>{item.Name}</p>
                                    <span className='date'>{item.Date}</span>
                                </div>

                                <div className='reviewbody'>
                                    {item.Review}
                                </div>
                             </div>
                        )
                      })
                }
            </div>
          </div>
            :
            <p className='desc'>
                {productdata.ProductDescription}
            </p>
          }
      </div>
      <Footer1 />
      <Footer2 />
    
    </div>
    )
}

      export default ProductPage