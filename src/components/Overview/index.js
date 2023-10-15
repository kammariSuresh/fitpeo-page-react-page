
// import {MdKeyboardArrowDown} from 'react-icons/md'

import './index.css'

const Overview = () => (
    <div className='overview-main-container'>
        <div className='overview-heading-container'>
            <p className='heading'>Overview</p>
            <div>
            <select className='overview-select-container'>
                <option>Quarterly</option> </select>
            </div>
        </div>
        <p>Monthly Earning</p>
        <div className='overview-bar-container'>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar1'></div>
                <p>Jan</p>
            </div>
            
            <div className='overview-bars-rows'>
                <div className='overview-bars bar2'></div>
                <p>Feb</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar3'></div>
                <p>Mar</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar4'></div>
                <p>Apr</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar5'></div>
                <p>May</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar6'></div>
                <p>Jun</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar7'></div>
                <p>Jul</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar8'></div>
                <p>Aug</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar9'></div>
                <p>Sep</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar10'></div>
                <p>Oct</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar11'></div>
                <p>Nov</p>
            </div>
            <div className='overview-bars-rows'>
                <div className='overview-bars bar12'></div>
                <p>Dec</p>
            </div>
        </div>
    </div>
)

export default Overview