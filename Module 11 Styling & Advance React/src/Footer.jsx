import { MDBFooter, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { BiLogoLinkedin,BiLogoFacebook,BiLogoTwitter ,BiLogoGithub, BiLogoYoutube, BiLogoInstagram } from "react-icons/bi";
import logo from '../src/images/download.png'
import logo2 from '../src/images/download (1).png'
function Footer()
{
    return(
        <>
        <MDBFooter className="text-1xl mt-5 p-5 d-flex bg-red-950 expand-lg ">
            <div className="col-md-3 ">
                <ul>
                <li><h6><a href="" className=" text-white font-bold ">LET US HELP YOU</a></h6></li>
                <li><a href="" className=" text-white">Order Tracking</a></li>
                <li><a href="" className=" text-white">Bulk Orders</a></li>
                <li><a href="" className=" text-white">Store Locator</a></li>
                <li><a href="" className=" text-white">Furniture Warranty Policy</a></li>
                </ul>
            </div>

            <div className=" mt-60 ">
                <h6 style={{marginLeft:"-325px"}} className="text-white font-bold text-xl">Follow Us</h6>
                <div className="d-flex">
                    <a href=""><BiLogoLinkedin style={{marginLeft:"-120px"}} className='text-4xl rounded-full mt-4 text-white  p-2' /></a> 
                    <a href=""><BiLogoFacebook style={{marginLeft:"-170px"}} className='text-4xl rounded-full mt-4 text-white  p-2' /></a>
                    <a href=""><BiLogoTwitter  style={{marginLeft:"-220px"}} className='text-4xl rounded-full mt-4 text-white  p-2' /></a> 
                    <a href=""><BiLogoInstagram style={{marginLeft:"-280px"}} className='text-4xl rounded-full mt-4 text-white  p-2' /></a>
                    <a href=""><BiLogoYoutube  style={{marginLeft:"-335px"}} className='text-4xl rounded-full mt-4 text-white  p-2' /></a> 
                </div>
                <div className="mt-5">                
                    <p className=" font-bold" style={{marginLeft:"-330px", color:"grey" , display:"inline"}}>©Copyright 2024 FabIndia.com. All rights reserved.</p>
                </div>
            </div>

            <div className="col-md-3">
                <ul>
                <li><h6><a href="" className=" text-white font-bold">SUPPORT</a></h6></li>
                <li><a href="" className=" text-white">Customer Service</a></li>
                <li><a href="" className=" text-white">How To Order</a></li>
                <li><a href="" className=" text-white">Shipping & Delivery</a></li>
                <li><a href="" className=" text-white">Return & Exchanges</a></li>
                <li><a href="" className=" text-white">FAQs</a></li>
                </ul>
            </div>

            <div className="col-md-3">
                <ul>
                <li><h6><a href="" className=" text-white font-bold">COMPANY</a></h6></li>
                <li><a href="" className=" text-white">Investor Relations</a></li>
                <li><a href="" className=" text-white">In The News</a></li>
                <li><a href="" className=" text-white">Careers</a></li>
                <li><a href="" className=" text-white">Privacy Policy</a></li>
                <li><a href="" className=" text-white">Terms Of Use</a></li>
                <li><a href="" className=" text-white">Interior Design Studio</a></li>
                <li><a href="" className=" text-white">Franchise Enquiry Form</a></li>
                </ul>
            </div>
            <div className="col-md-6" style={{marginLeft:"-325px"}}>
                <h6 className="text-white mt-60 font-bold text-xl"> Our Largest Store At Your Fingertips</h6>
                <div>
                    <a href="" className="d-flex mt-4">
                        <img src={logo} alt="logo" className=" rounded-md" />
                        <img src={logo2} alt="logo2" className=" rounded-md ms-3" />
                    </a>
                </div>
            </div>

            <div className="col-md-3" style={{marginLeft:"-350px"}}>
                <ul>
                <li><h6><a href="" className=" text-white font-bold">ABOUT FABINDIA</a></h6></li>
                <li><a href="" className=" text-white">60 years of Fabindia</a></li>
                <li><a href="" className=" text-white">Philosophy</a></li>
                <li><a href="" className=" text-white">Organic Certification</a></li>
                <li><a href="" className=" text-white">The Fabindia School</a></li>
                <li><a href="" className=" text-white">About Us</a></li> 
                <li><a href="" className=" text-white">Fabfamily</a></li>
                </ul>
            </div>
        </MDBFooter>
    
        </>
    )
}
export default Footer