import Section1 from "./Components/Section-One/Section1.jsx"
import Section2 from "./Components/Section-Two/Section2"
import Section3 from "./Components/Section-Three/Section3.jsx"
import Section4 from "./Components/Section-Four/Section4.jsx"
import Section5 from "./Components/Section-five/Section5.jsx"
import Section6 from "./Components/Section-Six/Section6.jsx"
import Youtube from "./Components/Youtube/Youtube"
import { Routes,Route } from "react-router-dom"
import Mac from "./Components/Pages/Mac/Mac.jsx"
import Carts from "./Components/Pages/Carts/Carts.jsx"
import Ipad from "./Components/Pages/Ipad/Ipad.jsx"
import Watch from"./Components/Pages/Watch/Watch.jsx"
import Music from"./Components/Pages/Music/Music.jsx"
import Search from"./Components/Pages/Search/Search.jsx"
import Support from"./Components/Pages/Support/Support.jsx"
import Tv from "./Components/Pages/TV/Tv.jsx"
import "./assets/css/styles.css"
import "./assets/css/bootstrap.css" 
import FourOFour from "./Components/Pages/File-not-Found/FourOFour.jsx"
import Commanlayout from "./Components/Comman-Layout/Commanlayout.jsx"
import Iphones from "./Components/Product_and_Apple/Iphones.jsx"
import Product_info from"./Components/Product_and_Apple/Product_info.jsx"



function App() {
  return (
      <Routes>
        <Route path="/" element={<Commanlayout/>}>
        <Route path="/" element={
          <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Youtube />
          </div>
        } />
        <Route path="mac" element={<Mac />} />
        <Route path="/iphone/" element={<Iphones />} />
          <Route path="/iphone/:pid" element={<Product_info />} />
        <Route path="ipad" element={<Ipad />} />
        <Route path="watch" element={<Watch />} />
        <Route path="cart" element={<Carts />} />
        <Route path="music" element={<Music />} />
        <Route path="search" element={<Search />} />
        <Route path="support" element={<Support />} />
        <Route path="TV" element={<Tv />} />
        <Route path="*" element={<FourOFour/>}/>
        </Route>
      </Routes>
  );
}
export default App;
