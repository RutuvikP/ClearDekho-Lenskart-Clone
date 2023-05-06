import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

import './AllProduct.css';
const AllProduct = () => {
    const [data, setdata] = useState([])
    const FetchData = () => {
        fetch(`http://localhost:8080/eyeglasses`).then((Res) => {
            return Res.json()
        }).then((Res) => {
            setdata(Res)
        })

    }


    // color
    // :
    // "transparent"
    // image
    // :
    // "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/lenskart-lk-e15172-c1-eyeglasses_g_8029_06_01_2023.jpg"
    // price
    // :
    // 2700
    // rating
    // :
    // 4.7
    // shape
    // :
    // "rectangle"
    // size
    // :
    // "Medium"
    // title
    // :
    // "Lenskart STUDIO"
    console.log(data)


    useEffect(() => {
        FetchData()
    }, [])

    return (
        <>
            <Navbar />
            <section class="section-products">
                {

                    data && data.map((res) => {
                        return <div class="container">

                            <div class="row">

                                <div class="col-md-6 col-lg-4 col-xl-3">
                                    <div id="product-2" class="single-product">
                                        <img src={res.image} alt="" />
                                        <div class="part-2">
                                            <h3 class="product-title">Title : {res.title}</h3>
                                            <h4 class="product-price">Price : ₹{res.price}</h4>
                                            <br />
                                            <h4 class="product-price">Size : {res.size}</h4>
                                            <br />
                                            <h4 class="product-price">Shape : {res.shape}</h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    })

                }
            </section>
        </>
    )
}

export default AllProduct
