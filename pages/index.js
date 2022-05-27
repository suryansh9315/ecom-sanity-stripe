import React from 'react'
import Product from '../components/Product'
import HeroBanner from '../components/HeroBanner'
import FooterBanner from '../components/FooterBanner'
import { client } from '../lib/client'

const home = ({products,banners}) => {
  return (
    <div>
      <HeroBanner bannersData={ banners && banners[0]} />
      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className='products-container'>
        {products?.map((e)=><Product key={e._id} product={e}/>)}
      </div>
      <FooterBanner bannerdata={banners && banners[0]}/>
    </div>
  )
}
export const getServerSideProps = async ()=>{
    const query = '*[_type=="product"]'
    const products = await client.fetch(query);

    const query2 = '*[_type=="banner"]'
    const banners = await client.fetch(query2);

    return {
      props:{products,banners}
    }
}

export default home
