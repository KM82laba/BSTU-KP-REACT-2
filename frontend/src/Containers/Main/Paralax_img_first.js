import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom'
import Background_img_first from './img/Background_img_first.jpg'
const Paralax_img_first = () => (
    <Parallax className='img_first' bgImage={Background_img_first} strength={400}>
        <div className='content-img_first'>
         <p className='content-img_first-txt'>Estore<br/>get a new shopping experience</p>
         <Link to="../Main_page"><div className='btn-lik_to-store'>Shop now</div></Link>
        </div>
    </Parallax>
);
export default Paralax_img_first;