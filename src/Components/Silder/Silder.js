import image1 from '../Img/image1.png'
import imgleft from '../Img/imgleft.png'

import './Slider.css';
function Silder() {
    return (
        <>
            <div className='hero-page'>
                <div className='content-hero'>
                    <div className='img-left'>
                        <img src={imgleft} alt=''></img>
                    </div>
                    <p className='text center'>Get 50%  Off on<br />
                        Selected categories</p>
                    <div className='img-right'>
                        <img src={image1} alt=''></img>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Silder;