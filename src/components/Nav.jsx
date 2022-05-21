import { Link } from "react-router-dom"

const Nav = (props) => {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>ABOUT</div>
      </Link>
      <Link to="/stocks">
        <div>STOCKS</div>
      </Link>
    </div>
  )
}

export default Nav