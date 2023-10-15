
import {CgHello} from 'react-icons/cg'
import {BsSearch} from 'react-icons/bs'

import DashBoard from './components/DashBoard'
import AccountDetails from './components/AccountDetails'
import Overview from './components/Overview'
import Customers from './components/Customers'
import Product from './components/ProductSellDetails'


import './App.css';

function App() {
  return (
    <div className="app-main-container">
      
      <DashBoard />
      <div className='main-container'>
      <div className='search-container'>
        <h1 className='heading'>Hello Shahrukh. <CgHello /> </h1>
        <div className='search-input-container'>
        <button type='search' className='search-btn'><BsSearch /></button>
        <input type='search' placeholder='Search' className='search-input'/>
        </div>
      </div>
        
      <AccountDetails />
      <div className='customer-overview-container'>
      <Overview />
      <Customers/>
      </div>
      <Product/>
      

      </div>
    </div>
  );
}

export default App;
