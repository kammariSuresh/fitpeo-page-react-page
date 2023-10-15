

import {FcMoneyTransfer, FcSalesPerformance} from 'react-icons/fc'
import {AiOutlineArrowUp, AiOutlineArrowDown} from 'react-icons/ai'
import {MdBorderColor, MdOutlineAccountBalance} from 'react-icons/md'
import './index.css'

const AccountDetails = () => (
    <div className='account-card-container'>

    <div className='card-main-container'>
          <div className='card-container'>
            <div className='card-image-container'>
              <FcMoneyTransfer  className='card-image' />
            </div>
            
            <div className='para-container'>
              <p className='earning-para'>Earning</p>
              <p  className='earning-para money-para'>$198k</p>
              <p className='earning-para'><span className='span-profit'><AiOutlineArrowUp/>37.8%</span> this month</p>
            </div>
          </div>
      </div>

      <div className='card-main-container'>
          <div className='card-container'>
            <div className='card-image-container'>
              <MdBorderColor  className='card-image' />
            </div>
            
            <div className='para-container'>
              <p className='earning-para'>Orders</p>
              <p  className='earning-para money-para'>$2.4k</p>
              <p className='earning-para'><span className='span-loss'><AiOutlineArrowDown/>2%</span> this month</p>
            </div>
          </div>
      </div>
      <div className='card-main-container'>
          <div className='card-container'>
            <div className='card-image-container'>
              <MdOutlineAccountBalance  className='card-image' />
            </div>
            
            <div className='para-container'>
              <p className='earning-para'>Balance</p>
              <p  className='earning-para money-para'>$2.4k</p>
              <p className='earning-para'><span className='span-loss'><AiOutlineArrowDown/>2%</span> this month</p>
            </div>
          </div>
      </div>
      <div className='card-main-container'>
          <div className='card-container'>
            <div className='card-image-container'>
              <FcSalesPerformance  className='card-image' />
            </div>
            
            <div className='para-container'>
              <p className='earning-para'>Total Sales</p>
              <p  className='earning-para money-para'>$89k</p>
              <p className='earning-para'><span className='span-profit'><AiOutlineArrowUp/>11%</span> this month</p>
            </div>
          </div>
      </div>
      
      </div>
)

export default AccountDetails