import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import NewArrivals from './NewArrivals.jsx'
import Women from './Women.jsx'
import Men from './Men.jsx'
import Kids from './Kids.jsx'
import Furniture from './Furniture.jsx'
import Lifestyle from './Lifestyle.jsx'
import PersonalCare from './PersonalCare.jsx'
import Food from './Food.jsx'
import Collection from './Collection.jsx'
import Services from './Services.jsx'
import Fabfamily from './FabFamily.jsx'
import Sales from './Sales.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route path="/newarrivals" element={<NewArrivals />} />
    <Route path="/women" element={<Women />} /> 
    <Route path="/men" element={<Men />} />
    <Route path="/kids" element={<Kids />} />
    <Route path="/furniture" element={<Furniture />} />
    <Route path="/lifestyle" element={<Lifestyle />} />
    <Route path="/personalcare" element={<PersonalCare />} />
    <Route path="/food" element={<Food />} />
    <Route path="/collection" element={<Collection />} />
    <Route path="/services" element={<Services />} />
    <Route path="/fabfamily" element={<Fabfamily />} />
    <Route path="/sales" element={<Sales />} />
    </Routes>
  </Router>
  
  </React.StrictMode>
)