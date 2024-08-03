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
{/* header */}
    <MDBNavbar className="expand-lg  bg-red-950 p-0 pb-0">
      <Link to="/sale" className="text-white w-100">
        <h6 className="text-center pt-2 ">
          <marquee className="marq" direction="left" loop="">Time to Sale-a-brate! Up To 50%* off on Select Apparel & Home Essentials | *T&C Apply</marquee>
        </h6></Link>
    </MDBNavbar>

  <div className="sticky-top">
    <MDBNavbar className="navbar-expand-lg bg-stone-100 shadow-3xl shadow-slate-950 ">
      <div className="col-md-5 text-2xl d-flex">
        <Link to='/map' className="text-black ">
          <BiSolidMap className="ms-60 mt-2"/>
        </Link>
        <img src={flag} alt="flag" className="rounded-full ms-3" style={{ marginTop:"10px", width:"20px", height:"20px"}}/>
        <MDBBtn className="btnlocation mt-1 pb-2 ms-2 shadow-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">India</MDBBtn>
          <ul className="dropdown-menu">
            <li className="col-md-4 ms-4"><a className="dropdown-item text-center" href="#">WorldWide</a></li>
          </ul>
      </div>
      <div className="col-md-4">
        <img src={logo} alt="logo" className="ms-16" />
      </div>
      <div className="col-md-6 d-flex text-2xl">
      <Link to='' className="text-red-900 hover:text-red-900 me-3"><BiSearch /></Link>
      <Link to='/Login' className="text-red-900 hover:text-red-900 me-3"><BiSolidUserAccount /></Link>
      
      <Link to='' className="text-red-900 hover:text-red-900 me-3"><BiHeart /></Link>
      <Link to='' className="text-red-900 hover:text-red-900 me-3"><BiCart /></Link>
      </div>
    </MDBNavbar>


{/* navbar starts from here */}
{/* new arrivals */}
    <MDBNavbar className="navbar2 w-100 navbar-expand-lg bg-stone-100 m-0 ">
      <div>
        <ul className="d-flex pt-3 mt-0 text-xl">
          <li><Link to="/" className="dropdown-toggle text-black ms-24 ps-2 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4" data-bs-toggle="dropdown">New Arrivals</Link>
          <ul className="dropdown-menu expand-lg col-md-9 ms-5 ps-5">
            <li className="expand-lg d-flex p-3 ">
                <ul className="col-sm-2 ">
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Women</a></h6>
                <li><a href="" className="text-black hover:text-xl">Western wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Ethnic wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Accessories</a></li>
                <br/>
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Men</a></h6>
                <li><a href="" className="text-black hover:text-xl">Western wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Ethnic wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Footwear</a></li>
                </ul>

                <ul className="col-sm-2">
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Kids</a></h6>
                <li><a href="" className="text-black hover:text-xl">Boys Ethnic Wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Boys Western Wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Girls Ethnic Wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Girls Western Wear</a></li>
                <li><a href="" className="text-black hover:text-xl">Infant Boys</a></li>
                <li><a href="" className="text-black hover:text-xl">Infant Girl</a></li>
                </ul>

                <ul className="col-sm-2">
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Home & Living</a></h6>
                <li><a href="" className="text-black hover:text-xl">Bed Linen</a></li>
                <li><a href="" className="text-black hover:text-xl">Cushions</a></li>
                <li><a href="" className="text-black hover:text-xl">Curtains</a></li>
                <li><a href="" className="text-black hover:text-xl">Bath</a></li>
                <li><a href="" className="text-black hover:text-xl">Lighting</a></li>
                <li><a href="" className="text-black hover:text-xl">Kitchen & Dining</a></li>
                <li><a href="" className="text-black hover:text-xl">Home Decor</a></li>
                <li><a href="" className="text-black hover:text-xl">Floor Coverings</a></li>
                <li><a href="" className="text-black hover:text-xl">Accessories</a></li>
                </ul>

                <ul className="col-sm-2">
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Furniture</a></h6>
                <li><a href="" className="text-black hover:text-xl">Living</a></li>
                <li><a href="" className="text-black hover:text-xl">Bedroom</a></li>
                <li><a href="" className="text-black hover:text-xl">Dining</a></li>
                <li><a href="" className="text-black hover:text-xl">Accents</a></li>
                </ul>

                <ul className="col-sm-2">
                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Personal Care</a></h6>
                <li><a href="" className="text-black hover:text-xl">Hair Care</a></li>
                <li><a href="" className="text-black hover:text-xl">Bath & Body</a></li>
                <li><a href="" className="text-black hover:text-xl">Gifting</a></li>

                <h6><a href="" className="text-red-900 hover:text-red-900 hover:underline md:underline-offset-4 hover:text-xl">Food</a></h6>
                <li><a href="" className="text-black hover:text-xl">Condiments</a></li>
                <li><a href="" className="text-black hover:text-xl">Essentials</a></li>
                <li><a href="" className="text-black hover:text-xl">Beverages</a></li>
                <li><a href="" className="text-black hover:text-xl">Snacks & Instant Food</a></li>
                </ul>
            </li>
          </ul>
          </li>


{/* women section starts from here */}
          <li><Link to="/women" className="dropdown-toggle text-black ms-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4" data-bs-toggle="dropdown">
          Women</Link>
          <ul className="dropdown-menu p-5 expand-lg ms-5 ">
            <li className="expand-lg d-flex p-3">
                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl ">All In Women</a></h6>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Ethnic wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kurtis</a></li>
                  <li><a href="" className="text-black hover:text-xl">Dupattas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Saris</a></li>
                  <li><a href="" className="text-black hover:text-xl">Churidars & Salwars</a></li>
                  <li><a href="" className="text-black hover:text-xl">Pants & Skirts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indian Sets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shawls</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jackets</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Western wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Dresses & Jumpsuits</a></li>
                  <li><a href="" className="text-black hover:text-xl">Tops, Shirts & Tunics</a></li>
                  <li><a href="" className="text-black hover:text-xl">Pants & Palazzos</a></li>
                  <li><a href="" className="text-black hover:text-xl">Skirts & Shorts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Outerwear</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Sleepwear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kaftans</a></li>
                  <li><a href="" className="text-black hover:text-xl">Night Suits</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shorts & Pyjamas</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Accessories</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Bags, Belts & Wallets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Masks</a></li>
                  <li><a href="" className="text-black hover:text-xl">Stoles & Scarves</a></li>
                  <li><a href="" className="text-black hover:text-xl">Winter Accessories</a></li>
                  <li><a href="" className="text-black hover:text-xl">Bags, Belts & Wallets</a></li>             
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Jewellery</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Silver Jewellery</a></li>
                  <li><a href="" className="text-black hover:text-xl">Fashion Jewellery</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Footwear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Jutties</a></li>
                  <li><a href="" className="text-black hover:text-xl">Chappals</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shoes & Sandals</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Collection</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Gifting</a></li>
                  <li><a href="" className="text-black hover:text-xl">Festive</a></li>
                  <li><a href="" className="text-black hover:text-xl">Everyday Living</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indigo</a></li>
                  <li><a href="" className="text-black hover:text-xl">Wedding</a></li>             
                  <li><a href="" className="text-black hover:text-xl">Indian Spring</a></li>             
                  <li><a href="" className="text-black hover:text-xl">Summer</a></li>             
                  <li><a href="" className="text-black hover:text-xl">FabNu</a></li>             
                  <li><a href="" className="text-black hover:text-xl">NUIndian</a></li>             
                  <li><a href="" className="text-black hover:text-xl">Winterwear</a></li>             
                </ul>
            </li>
          </ul>
          </li>


{/* men section starts from here */}
          <li><Link to="/men" className="dropdown-toggle  text-black ms-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4" data-bs-toggle="dropdown">
          Men</Link>
            <ul className="dropdown-menu p-5 expand-lg ms-5 ">
              <li className="expand-lg d-flex p-3">
                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">All In Men</a></h6>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Ethnic wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kurtas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jacket</a></li>
                  <li><a href="" className="text-black hover:text-xl">Churidars & Pyjamas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Salwars & Dhotis</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indian sets</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Western wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Shirts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Pants</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shorts</a></li>
                  <li><a href="" className="text-black hover:text-xl">T-Shirts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jackets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Pants</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Accessories</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Stoles</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shawls</a></li>
                </ul>

                <ul>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Collection</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Festive</a></li>
                  <li><a href="" className="text-black hover:text-xl">Everyday Living</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indigo</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shawls</a></li>
                  <li><a href="" className="text-black hover:text-xl">Wedding</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indian Spring</a></li>
                  <li><a href="" className="text-black hover:text-xl">Summer</a></li>
                  <li><a href="" className="text-black hover:text-xl">NUIndian</a></li>
                </ul>

                <ul>
                <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Custom Kurtas
                </a></h6>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Footwear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Jutties</a></li>
                  <li><a href="" className="text-black hover:text-xl">Chappals</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shoes & Sandals</a></li>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Sale
                  </a></h6>
                </ul>
              </li>
            </ul>
          </li>


{/* kids section starts from here */}
          <li><Link to="/kids" className="dropdown-toggle  text-black ms-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4" data-bs-toggle="dropdown">
          Kids</Link>
          <ul className="dropdown-menu col-md-9 expand-lg ms-5">
            <li className="expand-lg d-flex p-3">
                <ul className="col-sm-2 ms-5">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">All In Kids</a></h6>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Boys Ethnic Wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kurtas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jackets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Churidars, Pyjamas & Dhotis</a></li>
                  <li><a href="" className="text-black hover:text-xl">Churidars & Salwars</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                </ul>

                <ul className="col-sm-2 ms-1">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4">Boys Western Wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Shirts & Short Kurtas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Pants & Shorts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jackets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sleepwear</a></li>
                </ul>

                <ul className="col-sm-2 ms-1">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Girls Ethnic Wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kurtas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Ethnic Sets</a></li>
                  
                <br/>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4">Girls Western Wear</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Dress & Jumpsuits</a></li>
                  <li><a href="" className="text-black hover:text-xl">Tops & T-Shirts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shorts & Skirts</a></li>
                  <li><a href="" className="text-black hover:text-xl">Leggings</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sleepwear</a></li>
                  <li><a href="" className="text-black hover:text-xl">Jackets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                </ul>

                <ul className="col-sm-2 ms-1">
                <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Infant Boys</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Kurtas</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                  <li><a href="" className="text-black hover:text-xl">Churidars, Pyjamas & Dhotis</a></li>
                  <li><a href="" className="text-black hover:text-xl">Shirts & Short Kurtas</a></li>

                <br/>
                <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Infant Girls</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Dresses</a></li>
                  <li><a href="" className="text-black hover:text-xl">Sets</a></li>
                </ul>

                <ul className="col-md-2 ms-2">
                <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Footwear</a></h6>

                <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Collection</a></h6>
                  <li><a href="" className="text-black hover:text-xl">Festive</a></li>
                  <li><a href="" className="text-black hover:text-xl">Everyday Living</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indigo</a></li>
                  <li><a href="" className="text-black hover:text-xl">Wedding</a></li>
                  <li><a href="" className="text-black hover:text-xl">Summer</a></li>
                  <li><a href="" className="text-black hover:text-xl">Indian Spring</a></li>
                <br/>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Sale</a></h6>
                </ul>
              </li>
            </ul>
          </li>

{/* furniture section starts from here */}
          <li><Link to="/furniture" className="dropdown-toggle text-black ms-4 hover:underline hover:decoration-red-900 md:underline-offset-8 hover:decoration-4" data-bs-toggle="dropdown">
          Furniture</Link>
          <ul className="dropdown-menu col-md-9 expand-lg ms-5 ">
            <li className="expand-lg d-flex p-3">
                <ul className="col-sm-2 ms-5">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">All In Furniture</a></h6>
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Living</a></h6>
                  <li><Link to='/' className="text-black hover:text-xl">Sofas & Seatings</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Chairs</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Cabinets</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Consoles</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Benches</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Ottoman & Stools</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Day Beds & Sofa Cum Beds</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Entertainment units</Link></li>
                </ul>

                <ul className="col-sm-2">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Bedroom</a></h6>
                  <li><Link to='/' className="text-black hover:text-xl">Beds</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Bedside Tables</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Wardrobes</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Drawers</Link></li>
                </ul>

                <ul className="col-sm-2">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Dining</a></h6>
                  <li><Link to='/' className="text-black hover:text-xl">Tables</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Chairs</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Bar Furniture </Link></li>
                </ul>

                <ul className="col-sm-2">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Accents</a></h6>
                  <li><Link to='/' className="text-black hover:text-xl">Mirrors</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Breakfast & Tray Tables</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Organisers</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Trunks</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Coat Stands & Hangers</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Shelves & Racks</Link></li>
                </ul>

                <ul className="col-sm-3">
                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Home Office</a></h6>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Outdoor Furniture</a></h6>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Kids Furniture</a></h6>
                  <li><Link to='/' className="text-black hover:text-xl">Rockers</Link></li>
                  <li><Link to='/' className="text-black hover:text-xl">Tables</Link></li>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Interior Design Studio</a></h6>

                  <h6><a href="" className="text-red-900 hover:text-red-900 underline underline-offset-4 hover:underline md:underline-offset-4 hover:text-xl">Sale</a></h6>
                </ul>
              </li>
            </ul>
          </li>



{/* lifestyle section from here */}
          <li><Link to="/lifestyle" className="text-black ms-4 ps-2">Lifestyle</Link></li>









{/* personal care from here */}
          <li><Link to="/personalcare" className="text-black ms-4 ps-2">Personal Care</Link></li>






{/* food from here */}
          <li><Link to="/food" className="text-black ms-4 ps-2">Food</Link></li>




{/* collection from here */}
          <li><Link to="/collection" className="text-black ms-4 ps-2">Collection</Link></li>





{/* service starts from here */}
          <li><Link to="/services" className="text-black ms-4 ps-2">Services</Link></li>


{/* fabfamily section starts from here */}
          <li><Link to="/fabfamily" className="text-black ms-4 ps-2">Fabfamily</Link></li>



{/* sale section starts from here */}
          <li><Link to="/sale" className="text-black ms-4 ps-2">Sale</Link></li>
        </ul>
      </div>
    </MDBNavbar>
</div>
    </>
  )
}
export default Navbar
