import styled from "styled-components"
import Card from "./Card";


export default function Cards() {
  return (
    <CardContainer>
        <div className="heading">
            <div className="left">
                <h2> Properties On Sale</h2>
                <p>Discover the latest properties for sale in our neatly curated list.</p>

            </div>
            <div className="right">
                <button>View All Properties</button>
            </div>
        </div>
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
    </CardContainer>
  )
}

const CardContainer = styled.div`
margin-top: 3rem;
display: flex;
flex-direction: column;
  padding: 2rem;
  .heading{
    display: flex;
    justify-content: space-between; 
    align-items: center;
    margin-bottom: 2rem;
    .left{
        display: flex;
        flex-direction: column;
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.2rem;
        }
    }
    .right{
        button{
            background-color: #4CAF50;
            color: #fff;
            border: none;   
            padding: 0.6rem 2rem;
            font-size: 1.2rem;
            cursor: pointer;

        }
    }
  }
  .cards{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 2rem;
    margin-top: 2rem;
    padding: 2rem;
    box-sizing: border-box;
    /* border: 1px solid #ccc; */
    /* background-color: #f9f9f9; */
    /* box-shadow: 0 2px 4px rgba(0,0,0,0.1); */
  }

  /* background-color: #f9f9f9; */


  `;
  
