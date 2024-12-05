import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/Header/Header";
import Section1 from "@/components/Section1/Section1";
import Footer from "@/components/Footer/Footer";
import Section2 from "@/components/Section2/Section2";
import Section5 from "@/components/Section5/Section5";
import Section4 from "@/components/Section4/Section4";

export default function Home() {
  return (
   <div>
      <Navbar/>
      <Header/>
      <Section1/>
      <Section2/>
      <Section4/>
      <Section5/>
      <Footer/>
   </div>
  );
}
