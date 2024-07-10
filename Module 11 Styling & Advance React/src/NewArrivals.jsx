import React from "react";
import './Navbar.jsx'
import './Footer.jsx'
import { Navbar } from "react-bootstrap";
function NewArrivals()
{
    return(
        <>
        <Navbar/>
            <Navbar/>
                <ul>
                <h6><a href="">Women</a></h6>
                <li><a href="">Western wear</a></li>
                <li><a href="">Ethnic wear</a></li>
                <li><a href="">Accessories</a></li>
                </ul>

                <ul>
                <h6><a href="">Men</a></h6>
                <li><a href="">Western wear</a></li>
                <li><a href="">Ethnic wear</a></li>
                <li><a href="">Footwear</a></li>
                </ul>

                <ul>
                <h6><a href="">Kids</a></h6>
                <li><a href="">Boys Ethnic Wear</a></li>
                <li><a href="">Boys Western Wear</a></li>
                <li><a href="">Girls Ethnic Wear</a></li>
                <li><a href="">Girls Western Wear</a></li>
                <li><a href="">Infant Boys</a></li>
                <li><a href="">Infant Girl</a></li>
                </ul>

                <ul>
                <h6><a href="">Home & Living</a></h6>
                <li><a href="">Bed Linen</a></li>
                <li><a href="">Cushions</a></li>
                <li><a href="">Curtains</a></li>
                <li><a href="">Bath</a></li>
                <li><a href="">Lighting</a></li>
                <li><a href="">Kitchen & Dining</a></li>
                <li><a href="">Home Decor</a></li>
                <li><a href="">Floor Coverings</a></li>
                <li><a href="">Accessories</a></li>
                </ul>

                <ul>
                <h6><a href="">Furniture</a></h6>
                <li><a href="">Living</a></li>
                <li><a href="">Bedroom</a></li>
                <li><a href="">Dining</a></li>
                <li><a href="">Accents</a></li>
                </ul>

                <ul>
                <h6><a href="">Personal Care</a></h6>
                <li><a href="">Hair Care</a></li>
                <li><a href="">Bath & Body</a></li>
                <li><a href="">Gifting</a></li>

                </ul>

                <ul>
                <h6><a href="">Food</a></h6>
                <li><a href="">Condiments</a></li>
                <li><a href="">Essentials</a></li>
                <li><a href="">Beverages</a></li>
                <li><a href="">Snacks & Instant Food</a></li>
                </ul>

            <Footer/>
        </>
    )
}
export default NewArrivals