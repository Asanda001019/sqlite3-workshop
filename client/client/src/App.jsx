import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/footer';
import Card from './components/card';
import Navigation from './components/navigation';
import './App.css'
import Addcard from './components/addcard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/layout';
import NoPage from "./components/noPage"
import Editpage from './components/editpage';



function App() {
  const [localData, setLocalData] = useState([]);
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setLocalData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchServerData();
  }, []);
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path='/' element={<Card />} >
          <Route path=':id' element={<Editpage/>}></Route>
          <Route/>
          <Route path="addcard" element={<Addcard />} />
    
          <Route path="*" element={<NoPage />} />
          /</Route>

        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  );
}
export default App;






























// import axios from 'axios';
// import './App.css'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Footer from './components/footer';
// import Card from './components/card';
// import Page1 from './components/page1';
// import Page2 from './components/page2';
// import Page3 from './components/page3';


// function App() {

//   const [myData , setMyData] = useState("");

//   // let myData 

//   useEffect(()=> {

//     axios.get("http://localhost:5000").then((res)=>{

//        setMyData(res.data)

//     }).catch((error)=>{
//       console.log(error)
//     })

//   },[])

// console.log(myData)


//   return (
//     <>
  
//       <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="card" element={<Card />} />
//           <Route path="page1" element={< Page1/>} />
//           <Route path="page2" element={< Page2/>} />
//           <Route path="page3" element={< Page3/>} />
//         </Route>
//       </Routes>
//     </BrowserRouter>

//     <Footer style={styles.footer}>
//         <p>&copy; Asanda Madondo. All rights reserved.</p>
//       </Footer>
    
//      </>
//   )
  
  

// }
// const styles =  {
//   backgroundColor: '#3E5151',
//   color: '#fff',
//   padding: '10px 20px',
//   textAlign: 'center',
// }

// export default App
