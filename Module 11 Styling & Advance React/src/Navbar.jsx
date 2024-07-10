import React from "react";
import logo from '../src/images/fabindia-logo.svg'
import flag from '../src/images/smallflag.jpg'
import { MDBNavbar, MDBBtn } from "mdb-react-ui-kit";
import { BiCart, BiHeart, BiSearch, BiSolidMap, BiSolidUserAccount } from "react-icons/bi";
import {Link} from 'react-router-dom'
function Navbar()
{
  return(
    <>
    <MDBNavbar className="expand-lg  bg-red-950 pb-0">
      <a href="" className="text-white w-100">
        <h6 className="text-center ">
          <marquee className="marq" direction="left" loop="">Time to Sale-a-brate! Up To 50%* off on Select Apparel & Home Essentials | *T&C Apply</marquee>
        </h6></a>
    </MDBNavbar>
<div className="sticky-top">
    <MDBNavbar className=" navbar-expand-lg bg-stone-100 shadow-3xl shadow-slate-950  ">
      <div className="col-md-5 text-2xl d-flex">
        <a href="" className="text-black ">
          <BiSolidMap className="ms-60 mt-2"/>
        </a>
        <img src={flag} alt="flag" className="rounded-full ms-3" style={{ marginTop:"10px", width:"20px", height:"20px"}}/>
        <MDBBtn className="btn mt-1 pb-2 ms-2 btn-white shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        India
        </MDBBtn>
          <ul className="dropdown-menu">
            <li className="col-md-4 ms-4"><a className="dropdown-item text-center" href="#">WorldWide</a></li>
          </ul>
      </div>
      <div className="col-md-4">
        <img src={logo} alt="logo" className="ms-16" />
      </div>
      <div className="col-md-6 d-flex text-2xl">
      <a href="" className="text-red-900 hover:text-red-900 me-3"><BiSearch /></a>
      <a href="" className="text-red-900 hover:text-red-900 me-3"><BiSolidUserAccount /></a>
      <a href="" className="text-red-900 hover:text-red-900 me-3"><BiHeart /></a>
      <a href="" className="text-red-900 hover:text-red-900 me-3"><BiCart /></a>
      </div>
    </MDBNavbar>

    <MDBNavbar>
      <div className="w-100 navbar-expand-lg bg-stone-100" style={{marginTop:"-9px", height:"50px"}}>
        <ul className="d-flex pt-2 mt-0 text-xl">
          <li><Link to="/" className="text-black ms-24 ps-2">New Arrivals</Link></li>
          <li><Link to="/women" className="text-black ms-4 ps-2">Women</Link></li>
          <li><Link to="/men" className="text-black ms-4 ps-2">Men</Link></li>
          <li><Link to="/Kids" className="text-black ms-4 ps-2">Kids</Link></li>
          <li><Link to="/furniture" className="text-black ms-4 ps-2">Furniture</Link></li>
          <li><Link to="/lifestyle" className="text-black ms-4 ps-2">Lifestyle</Link></li>
          <li><Link to="/personalcare" className="text-black ms-4 ps-2">Personal Care</Link></li>
          <li><Link to="/food" className="text-black ms-4 ps-2">Food</Link></li>
          <li><Link to="/collection" className="text-black ms-4 ps-2">Collection</Link></li>
          <li><Link to="/services" className="text-black ms-4 ps-2">Services</Link></li>
          <li><Link to="/fabfamily" className="text-black ms-4 ps-2">Fabfamily</Link></li>
          <li><Link to="/sales" className="text-black ms-4 ps-2">Sales</Link></li>
        </ul>
      </div>
    </MDBNavbar>
</div>
    </>
  )
}
export default Navbar