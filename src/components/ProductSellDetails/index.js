
import {BsSearch} from 'react-icons/bs'

import './index.css'

const Product = () => (
    <div className="product-main-container">
        <div className='product-search-main-container'>
            <p>Product Sell</p>
            <div className='search-btn-container'>
                <div>
                <button type='button' className='search'> <BsSearch/> </button>
                <input type='search' placeholder='search' className='search' />
                </div>
                <select className='select-main-container'>
                    <option>last 30 days </option>
                </select>
            </div>
        </div>
        

        <div className='product-heading-container'>
            <div className='name-product-heading'>
             <p className='para-head'>Product Name</p>
            </div>
        
            <div className='total-product-headings'>
                <p className='para-head'>Stock</p>
                <p className='para-head'>Price</p>
                <p className='para-head'>Total Sales</p>
            </div>
        
        </div>

        <hr/>

        <div>
        <div className='product-heading-container'>
            <div className='name-product-heading'>
             <img src='https://images7.alphacoders.com/342/342735.jpg' alt="action"  className='image'/>
             <div >
                <p>Abstract 3D</p>
                <p className='name-heading-main-para'>Lorem ipsum dolor </p>
             </div>
            </div>
        
            <div className='total-product-headings'>
                <p>32 in stock</p>
                <p>$ 45.99</p>
                <p>20</p>
            </div>
        
        </div>
        <div className='product-heading-container'>
            <div className='name-product-heading'>
             <img src='https://th.bing.com/th/id/OIP.ecrfwPnWEvxul_Vdge_SNgHaHa?pid=ImgDet&rs=1' alt="action"  className='image'/>
             <div >
                <p>Sarphens Illustration</p>
                <p className='name-heading-main-para'>Lorem ipsum dolor </p>
             </div>
            </div>
        
            <div className='total-product-headings'>
                <p>32 in stock</p>
                <p>$ 45.99</p>
                <p>20</p>
            </div>
        
        </div>
        </div>
    </div>
)

export default Product