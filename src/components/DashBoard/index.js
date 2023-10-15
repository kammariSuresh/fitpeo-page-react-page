import {RiDashboardLine} from 'react-icons/ri'
import './index.css'

const DashBoard = () => (
    <div className='nav-bar-main-container'>
        <div className='dashboard-container'>
            <RiDashboardLine />
            <p>Dashboard</p>
        </div>
        <div className='select-option-container'>
            <select className='select-option'>
                <option>Product</option>
                <option>Customers</option>
                <option>Income</option>
                <option>Promote</option>
                <option>Help</option>
            </select>
        </div>

        <div className='name-container'>
            

            <div >
                <h2 className='heading'>Evano</h2>
                <p className='para'>Project Manager</p>
            </div>
            <div className='image-container'>
                <img src="https://cdn.educba.com/academy/wp-content/uploads/2020/07/psd-9-9-5-3.jpg" alt="static" className='image-static'/>
            </div>
        </div>
    </div>
)

export default DashBoard