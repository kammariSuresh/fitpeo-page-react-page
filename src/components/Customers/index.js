import {PieChart, Pie, Cell,Legend, ResponsiveContainer} from 'recharts'

import './index.css'

const data = [{count : 10, language : 'Telugu'} , {count : 15, language : 'English'}, {count : 15, language : 'Hindi'} ]

const Customers = () => {
    return (
        <div className='chart-main-container'>
            <div>
            <h2>Customers</h2>
            <p>Customers that buy products</p>
        </div>
        <ResponsiveContainer width='100%' height={250}>
            <PieChart>
                <Pie innerRadius='50%' outerRadius='80%'  data={data} startAngle={0} endAngle={360} 
                  dataKey="count"  >
                    
                    <Cell fill='#E02A75'  />
                    <Cell  fill='#dfdff3' />
                    <Cell  fill='#6f6fea' />
                    
                </Pie>
            <Legend iconType='none' content={<p>65%<br/> Total New <br/> Customers</p>} layout='vertical' verticalAlign='middle' align='center'/>
            </PieChart>
        </ResponsiveContainer>
        
        </div>
    )
}

export default Customers