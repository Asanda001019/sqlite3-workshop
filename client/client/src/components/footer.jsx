import React from 'react'
const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <p>&copy;   Asanda Madondo. All rights reserved.</p>
      </footer>
    </div>
  )
};
let styles = {
    footer: {
        backgroundColor: 'black',
        color: '#fff',
        padding: '10px 20px',
        textAlign: 'center',
        width: '100vw'
    }
}
export default Footer