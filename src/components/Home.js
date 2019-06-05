import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    state = {  }
    render() { 
        return (
            <div className='home-container'>
                <h1>Github Battle: Batte your friends... and </h1>
                <Link className='button' to='/battle'>Battle</Link>
            </div>
          );
    }
}
 
export default Home;