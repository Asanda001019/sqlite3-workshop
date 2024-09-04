import { Outlet, Link } from "react-router-dom";


const Layout = () => {
  return (
    <>
    <nav  style={styles.nav}>  
        


        
          <li>
            <Link to="/">Card</Link>
          </li>

          <li>
            <Link to="/addcard">Addcard</Link>
          </li>
       
        
       
      </nav>

      <Outlet />
    </>
  )
};

let styles = {
  nav: {
      backgroundColor: "black",
      color: "green",
      padding: '10px 20px',
      textAlign: 'center',
      width: '100vw'
  }
}

export default Layout;
