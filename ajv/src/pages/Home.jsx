import React from 'react'
import BannerProduct from '../components/BannerProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import ValueProposition from '../components/ValueProposition'
import Ctcsection from '../components/Ctcsection'
import TitleSection from '../components/TitleSection'
import Faq from '../components/Faq'

const Home = () => {
    return(
        <div>
            {/*--------<CategoryList />  -------*/}
            <BannerProduct />
            <ValueProposition />

            {/*--------
            <HorizontalCardProduct category={'electricbike'} heading={'Our Electric Bike Products'}/>
            
            <HorizontalCardProduct category={'electriccar'} heading={'Our Electric Car Products'}/>
       ------*/}

            <TitleSection title='AJV Products' />  
            <VerticalCardProduct category={'electricbike'} heading={'Our Electric Bike Products'} />
            
            <Ctcsection />  
            <Faq />
        </div>
    )

}

export default Home


