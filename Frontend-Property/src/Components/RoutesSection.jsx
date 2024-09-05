
import styled from "styled-components";
import Navbar from "./Navbar";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import Cards from "./Cards";

export default function RoutesSection() {
  return (
    <>
    
      <Div>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Cards />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
        <ScrollToTop />
      </Div>
    </>
  );
}
const Div = styled.div`
  padding: 1rem 6rem;
`;