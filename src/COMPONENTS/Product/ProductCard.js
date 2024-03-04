import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div className='product'>
        <div clasName='s1'>
            <img src={data.productimage} alt={'no img'} />
        </div>
        <div clasName='s2'>
            
        </div>
        <div clasName='s3'></div>
    </div>
  )
}

export default ProductCard