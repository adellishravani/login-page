import './index.css'

const Header = props => (
  <div className="nav">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
      className="logo"
    />
    <br />
    <div>
      <li className="para">Home</li>
      <li className="para">Products</li>
      <li className="para">Cart</li>
      <button type="button" className="logoutbtn">
        Logout
      </button>
    </div>
  </div>
)

export default Header
