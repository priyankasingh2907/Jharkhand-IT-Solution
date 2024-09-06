
import styled from "styled-components";
// import homeImage from "../assets/view-3d-house-model.jpg";


export default function Section2() {
  return (
    <Section>

<div className="front">
  <div className="front__content">
    <h1>Section 2</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum tristique
      tortor, vel euismod purus convallis ac.
    </p>
    <button>Discover Now</button>

  </div>
</div>
      <div className="container">
         <div className="section-2-left">
          <h2>We Help People To Find</h2>
          <h1>Best Opportunity</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum tristique tortor, vel euismod purus convallis ac.
          </p>
          <div className="homeData">
            <div className="first">
              <p>1,000+</p>
              <h4>Homes</h4>
            </div>
            <div className="second">
              <p>2,000+</p>
              <h4>Properties</h4>
            </div>
            <div className="third">
              <p>5,000+</p>
              <h4>Jobs</h4>
            </div>
          </div>
          <button>Discover Now</button>
        </div>
       <div className="section-2-right">

<div className="upper">
<img  src="https://picsum.photos/200/300?random={Math.ramdom()*1}" alt="" />
</div>
<div className="bottom">
<img  src="https://picsum.photos/200/300?random={Math.ramdom()*5}" alt="" />
<img  src="https://picsum.photos/200/300?random={Math.ramdom()*3}" alt="" />
</div>
       </div>
        
      </div>
    </Section>
  );
}
const Section = styled.section`
  /* margin: 3rem 2rem; */
  /* background: #fff; */
  margin-top: 3rem;
  position: relative;
  z-index: 0;
  .front{
    position: absolute;
    top: 20%;
    left: 40%;
    width: 300px;
    height: auto;
    /* opacity: 0.8; */
    color: #0056b3;
    padding: 1rem;
    /* transform: translate(-50%, -50%); */

    background-color: #9dafc7;
    z-index: 5;
    h1{
      font-size:2rem;
      margin-bottom: 1rem;
    }
    p{
      font-size: 1.4rem;
    }
    button{
      background-color: #0056b3;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 1rem;
      font-size: 1rem;
      cursor: pointer;
    }
    

  }
  .container {
    width: 100%;
    /* max-width: 1200px; */
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 2rem 0;
    /* @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  } */
    .section-2-left {
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      /* text-align: center;  */
      /* @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  } */
      h2 {
        font-size: 2.4rem;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 3.6rem;
        margin-bottom: 2rem;
      }
      p {
        font-size: 1.6rem;
        margin-bottom: 2rem;
      }
      .homeData {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
        align-items: center;

      }
      button {
        padding: 1rem 2rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
        border: none;
        border-radius: 10px;
        font-weight: 700;
        transition: background-color 0.3s ease;
        &:hover {
          background-color: #0056b3;
        }
      }
    }
    .section-2-right{
        width: 50%;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
       .upper{
         width: 100%;
         display: flex;
         justify-content: space-around;
         gap: 1rem;
         img{
           width:600px;
           height: 250px;
           object-fit: cover;

         }

       }
       .bottom{
         width: 100%;
         display: flex;
         justify-content: space-around;
         gap: 1rem;
         img{
           width: 400px;
           height: 300px;
         }
       }

    }
  }
`;
