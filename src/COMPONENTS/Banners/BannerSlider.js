import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Fresh fruits and vegetables',
            description: 'We deliver fresh fruits and veggies at your doorstep.',
            button: 'https://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: 'Fresh fruits and vegetables',
            description: 'Tomatoes, olives, brocolli, spinach. I couldn\'t be more delighted.',
            button: 'https://www.google.com'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item=> {
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image} alt='noimg' />
                            <div className='content'>
                                <h1>{item.title}</h1>
                                <span>{item.description}</span>
                                <button>Shop More</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default BannerSlider