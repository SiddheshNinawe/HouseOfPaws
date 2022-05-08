import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header>
        <nav className={styles.navbar}>
          <a className={styles.navbarBrand} href=".html">
            <img src="assets/images/general/logo.png" width="60" />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="navbarCollapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="home.html">Home<span className="sr-only">(current)</span></a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="How-you-can-help.html">How you can help</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Our-Animals.html">Our Animals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About-Us.html">About Us</a>
              </li>

            </ul>

            <button className="btn btn-primary btn-lg" id="btn-back " type="button " onclick="window.location.href='login.html' ">Login</button>

          </div>
        </nav>

      </header>
       
      
    </div >
  
  )
}
