
import qzone1 from '../../../../assets/qZone1.png'
import qzone2 from '../../../../assets/qZone2.png'
import qzone3 from '../../../../assets/qZone3.png'
import bg from '../../../../assets/bg.png'
import { Button } from 'react-bootstrap';

const QZone = () => {
    return (
        <div className='bg-light text-center mt-3 '>
            <h4 className=" ">QZone</h4>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
            <div className='position-relative '>
                <img className='position-absolute ' src={bg} alt="" />
                <h1 className='position-relative  text-white text-center h2 d-inline-block m-5'>Create an Amazing Newspaper</h1>
                <p className=' text-white position-relative m-5  d-inline-block mt-5  '>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='position-relative' size="lg" variant="danger">Learn More</Button>{' '}
            </div>

        </div >
    );
};

export default QZone;