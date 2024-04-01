import { Link } from 'react-router-dom';
import { GoProjectRoadmap } from "react-icons/go";
import { FaTools } from "react-icons/fa";

export default function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://cdn-icons-png.freepik.com/256/14025/14025381.png"
                alt="home Icon"
                style={{ width: '35px', height: '35px', marginRight: '3px' }}
              />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
                alt="user Icon"
                style={{ width: '50px', height: '30px', }}
              />
              About
            </Link>
          </li>
          <li><Link to="/Experience" style ={{display: 'flex',
                alignItems: 'center'}}>
            <FaTools style={{ width: '25px', height: '25px', marginRight: '5px' }}/>
            Experience</Link></li>
          <li><Link to="/projects" style ={{display: 'flex',
                alignItems: 'center'}}>
            <GoProjectRoadmap style={{ width: '40px', height: '30px', marginRight: '5px' }}/>
            Projects
            </Link></li>
          <li><Link to="/contact" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/address-book-providers-in-black-white/512/gmail-512.png"
                alt="user Icon"
                style={{ width: '40px', height: '40px', marginRight: '0px' }}
              />
            Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
