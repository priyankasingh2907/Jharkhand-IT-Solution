


import styled from "styled-components";
import { ImCoinYen } from "react-icons/im";
import { ImBubbles2 } from "react-icons/im";
import { ImChrome } from "react-icons/im";
// import homeImage from "../../assets/images.jfif";

export default function Section3() {
  const data = [
    {
      id: 1,
      title: "Customized Solutions",
      description:
        "We create solutions that meet your specific needs, from small businesses to large corporations.",
      icon: <ImCoinYen />,
    },
    {
      id: 2,
      title: "Customized Solutions",
      description:
        "We create solutions that meet your specific needs, from small businesses to large corporations.",
      icon: <ImBubbles2 />,
    },
    {
      id: 3,
      title: "Customized Solutions",
      description:
        "We create solutions that meet your specific needs, from small businesses to large corporations.",
      icon: <ImChrome />,
    },
  ];
  return (
    <Section>
      <div className="container">
        <div className="left">
          <div className="title">
            <h2>Providing The Best </h2>
            <h2>Process Exprerience</h2>
          </div>
          <div className="items">
            {data.map((value) => {
              return (
                <div className="item" key={value.id}>
                  <div className="icon"> {value.icon}</div>
                  <div className="desc">
                  
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                 
                    
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="right">
          <img src="https://picsum.photos/200/300?random={Math.ramdom()*9}" alt="" />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
margin-top: 3rem;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
 .title{
    gap: 1rem;
    margin-bottom: 2rem;
    h2{
      font-size: 2rem;
    }

 }
 .items{
  display: flex;
  flex-direction: column;
  .item{
    display: flex;
    align-items: start;
    justify-content: start;
    gap: 2rem;
.icon{
  color:var(--blue);
  font-size:1.6rem;
}
.desc{
    margin-bottom: 2rem ;
 h3{
  font-size: 1rem;
 }
 p{
    margin-top: 1rem;
  font-size: 1rem;
 }
}

  }
 }

    }
    .right{
      /* border: 1px solid black; */
      width: 50%;

      img{
        width:800px;
        height: 400px;
      }
    }
  }
`;
