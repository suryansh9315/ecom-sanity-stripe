import React from 'react'
import Link from 'next/link'
import { urlFor } from '../lib/client'

const HeroBanner = ({bannersData}) => {
  return (
    <div className='hero-banner-container'>
      <div>
          <p className='beats-solo'>{bannersData.smallText}</p>
          <h3>{bannersData.midText}</h3>
          <img src={urlFor(bannersData.image)} alt="headphones" className='hero-banner-image'/>
          <div>
            <Link href={`/product/${bannersData.product}`}>
              <button type='button'>{bannersData.buttonText}</button>
            </Link>
            <div className="desc">
              <h5>Description</h5>
              <p>{bannersData.desc}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HeroBanner