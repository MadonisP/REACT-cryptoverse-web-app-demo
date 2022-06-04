import React from 'react'; 
import {Spin} from 'antd';

const Loader=()=>{
    return(
        <div className='laoder'>
            <Spin />
        </div>
    )
}

export default Loader