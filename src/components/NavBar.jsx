
import { Link } from 'react-router-dom'

export default function Nav () {
return (
    <header>
    <nav>
      <ul>
        <li><Link to="/">About Me</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
 )
}