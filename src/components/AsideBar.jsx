import yoga from '../assets/img/yoga.svg';
import bike from '../assets/img/bike.svg';
import swim from '../assets/img/swim.svg';
import bodyb from '../assets/img/bodybuilding.svg';


/**
 * Render Aside 
 */
function AsideBar() {
  
  return (
    <div className='aside-bar'> 
        <ul className='aside-icons-container'>
            <li className='aside-icon'><a> <img src={yoga} alt="Logo" /></a></li>
            <li className='aside-icon'><a> <img src={bike} alt="Logo" /></a></li>
            <li className='aside-icon'><a> <img src={swim} alt="Logo" /></a></li>
            <li className='aside-icon'><a> <img src={bodyb} alt="Logo" /></a></li>
        </ul>
        <p className='copyright'> Copyright, SportSee 2020</p>
    </div>
  )
}

export default  AsideBar
