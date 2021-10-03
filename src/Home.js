import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

function Home() {
    console.warn(data.productData)
    return (
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 content-center">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>
                     )   
                    })}
                 
                </div>
            </section>
            
        </>

    )
}

export default Home
