import MyTel from '../../imgs/telegram.png';
import MyIns from '../../imgs/instagram.png';
import MyMess from '../../imgs/messenger.png';
import './footer.css';


const Footer = () => {

  return (
    <div className="footer">
      <div className="connect">
        <div className='icons'>
          <img className="sm_icons" src={MyTel} alt="telegram.png" />
          <img className="sm_icons" src={MyIns} alt="instagram.png"></img>
          <img className="sm_icons" src={MyMess} alt="messenger.png"></img>
        </div>
        <div>
          <p className="slogan">&#9400;Photo,Inc 2023, We love our Students</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;