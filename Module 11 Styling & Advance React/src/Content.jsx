import React from "react";
import img1 from '../src/images/hp-sec1-31may24-1.webp'
import img2 from './images/hp-sec1-16may-8.webp'
import img3 from './images/hp-sec1-16may-6.webp'
import img4 from './images/hp-sec1-16may-2-rep.webp'
import img6 from './images/hp-sec1-7june24-5.webp'
import img7 from './images/hp-sec1-01june24-3.webp'
import img5 from './images/hp-sec1-7june24-7.webp'
import { BiSolidLeftArrowCircle, BiSolidRightArrowCircle } from "react-icons/bi";
import { MDBBtn } from "mdb-react-ui-kit";
// import { Content } from "./Content";

import slide1 from './images/sari.webp'
import slide2 from './images/dresses.jpg'
import slide3 from './images/dupattas.webp'
import slide4 from './images/sari.webp'
import slide5 from './images/bags.jpg'
import slide6 from './images/jewellery.webp'

import pic1 from './images/home&living.webp'
import pic2 from './images/kurtas.jpg'

import kurtas from './images/k2.webp'
import shirts from './images/shirts.webp'
import trousers from './images/trousers.webp'

import pants from './images/pants.webp'
function Content()
{ 
    return(
        
    <>
{/* content slider*/}
        <div id="carouselExampleIndicators" className="carousel slide  mx-auto" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="img1" />
                    <MDBBtn className="btn bg-blue p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-178px", marginLeft:"73%", fontSize:"22px", color:"white"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="img2" />
                    <MDBBtn className="btn bg-light text-grey-900 font-bold p-3 h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-160px", marginLeft:"43%", fontSize:"22px", color:"black"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="img3" />
                    <MDBBtn className="btn text-black  p-2 h-12 shadow-none" type="button" style={{width:"200px", position:"absolute", zIndex:"5", marginTop:"-122px", marginLeft:"16px", fontSize:"20px", backgroundColor:"lightyellow"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="img4" />
                    <MDBBtn className="btn text-white bg-orange-500  p-2 h-16 shadow-none" type="button" style={{width:"210px", position:"absolute", zIndex:"5", marginTop:"-180px", marginLeft:"195px", fontSize:"20px", backgroundColor:"orange"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="img5" />
                    <MDBBtn className="btn bg-white p-2 h-12 shadow-none" type="button" style={{width:"200px", position:"absolute", zIndex:"5", marginTop:"-152px", marginLeft:"62px", fontSize:"20px", color:"black"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img6} className="d-block w-100" alt="img6" />
                    <MDBBtn className="btn text-light p-2 h-14 shadow-none" type="button" style={{width:"230px", position:"absolute", zIndex:"5", marginTop:"-169px", marginLeft:"255px", fontSize:"20px", backgroundColor:"pink"}}>SHOP NOW</MDBBtn>
                </div>
                <div className="carousel-item">
                    <img src={img7} className="d-block w-100" alt="img7" />
                    <MDBBtn className="btn text-dark bg-light p-2 h-16  shadow-none" type="button" style={{width:"230px", position:"absolute", zIndex:"5", marginTop:"-177px", marginLeft:"947px", fontSize:"20px"}}>SHOP NOW</MDBBtn>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <BiSolidLeftArrowCircle className="text-5xl mt-5 bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <BiSolidRightArrowCircle  className="text-5xl mt-5  bg-slate-400 hover:text-red-950  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
        </div>


{/* slider for women*/}
        <div className="main ms-60 me-40 mt-5 bg-pink-100">
        <h4 className="text-4xl">Fantastic<br/> Finds</h4>
            <div className="glide">
                <div className="glide__track pt-5" data-glide-el="track">
                    <ul className="glide__slides ms-5 pb-5 d-flex">
                        <li className="glide__slide"><img src={slide1} alt="Slide 1"/></li>
                        <li className="glide__slide ms-5"><img src={slide2} alt="Slide 2"/></li>
                        <li className="glide__slide ms-5"><img src={slide3} alt="Slide 5"/></li>
                        {/* <li className="glide__slide"><img src={slide4} alt="Slide 6"/></li>
                        <li className="glide__slide"><img src={slide5} alt="Slide 3"/></li>
                        <li className="glide__slide"><img src={slide6} alt="Slide 6"/></li> */}
                    </ul>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <BiSolidLeftArrowCircle className="text-5xl mt-4 bg-slate-400 hover:text-pink-100  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <BiSolidRightArrowCircle  className="text-5xl mt-4 ms-24  bg-slate-400   hover:text-pink-100 rounded-full "/>
                    <span className="carousel-control" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
        

{/* two images */}
        <div className="twopics d-flex m-20 ms-40">
            <a href=""><img src={pic1} alt="pic1" className="p-2" /></a>
            <a href=""><img src={pic2} alt="pic2" className="p-2" /></a>
        </div>
        <div className="twobtns">
            <MDBBtn className="btn1">Explore Now</MDBBtn>
            <MDBBtn className="btn2">Explore Now</MDBBtn>
        </div>

{/* slider for men*/}
<div className="main ms-60 me-40 mt-5 bg-pink-100">
        <h4 className="text-4xl">Fantastic<br/> Finds</h4>
            <div className="glide">
                <div className="glide__track pt-5" data-glide-el="track">
                    <ul className="glide__slides ms-5 pb-5 d-flex">
                        <li className="glide__slide"><img src={kurtas} alt="kurtas"/></li>
                        <li className="glide__slide ms-5"><img src={shirts} alt="shirts"/></li>
                        <li className="glide__slide ms-5"><img src={trousers} alt="trousers"/></li>
                        {/* <li className="glide__slide"><img src={slide4} alt="Slide 6"/></li>
                        <li className="glide__slide"><img src={slide5} alt="Slide 3"/></li>
                        <li className="glide__slide"><img src={slide6} alt="Slide 6"/></li> */}
                    </ul>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <BiSolidLeftArrowCircle className="text-5xl mt-4 bg-slate-400 hover:text-pink-100  rounded-full "/>
                <span className="carousel-control" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <BiSolidRightArrowCircle  className="text-5xl mt-4 ms-24  bg-slate-400   hover:text-pink-100 rounded-full "/>
                    <span className="carousel-control" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </div>
        </div>
<div className="mt-5">
<img src={pants} alt="pants" style={{width:"100%"}}/>
<MDBBtn className="btn p-3 font-bold h-16 shadow-none" type="button"  style={{width:"225px",position:"absolute", zIndex:"5", marginTop:"-125px", marginLeft:"43%", fontSize:"22px", color:"white", backgroundColor:"#381717"}}>SHOP NOW</MDBBtn>
</div>
    </>
    )
}

export default Content
