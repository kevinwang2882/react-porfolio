import { Link } from 'react-router-dom';

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
                style={{ width: '40px', height: '40px', marginRight: '3px' }}
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
          <li><Link to="/resume" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3731/3731553.png"
                alt="user Icon"
                style={{ width: '40px', height: '30px',marginRight: '2px',  }}
              />
            Resume</Link></li>
          <li><Link to="/projects" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://png.pngtree.com/png-clipart/20230504/original/pngtree-project-management-line-icon-png-image_9137897.png"
                alt="user Icon"
                style={{ width: '40px', height: '30px' ,marginRight: '5px',}}
              />
            Projects
            </Link></li>
          <li><Link to="/contact" style ={{display: 'flex',
                alignItems: 'center'}}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/address-book-providers-in-black-white/512/gmail-512.png"
                alt="user Icon"
                style={{ width: '40px', height: '30px', marginRight: '5px' }}
              />
            Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
