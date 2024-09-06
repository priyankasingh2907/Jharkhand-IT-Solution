import styled from "styled-components";

export default function Section4() {
  return (
    <Section>
      <div className="top">
        <div className="left">
          <h2>Lorem ipsum dolor sit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className="right">
          <button>Know More</button>
        </div>
      </div>
      <div className="main">
        <div className="upper">
          <div className="info">
            <div className="title">
              <h3>Title</h3>
              <p>45</p>
            </div>
            <div className="title">
              <h3>Title</h3>
              <p>45</p>
            </div>
            <div className="title">
              <h3>Title</h3>
              <p>45</p>
            </div>
            <div className="title">
              <h3>Title</h3>
              <p>45</p>
            </div>

          </div>
        </div>
        <div className="lower">
          <img
            src="https://picsum.photos/200/300?random={Math.ramdom()*1}"
            alt=""
          />
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
margin-top: 3rem;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* background-color: #fff;    */
  border-radius: 5px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    /* background-color: #f0f0f0; */
    /* border-bottom: 1px solid #ddd; */

    .left {
      flex: 1;
      h2{
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    }

    .right {
      flex: 1;
      text-align: right;
      button {
        background-color: #4CAF50;
        color: #fff;
        padding: 10px 20px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
      }
    }
  }
  .main {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .upper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding: 10px;

        .info{
            display: flex;
            /* flex-wrap: wrap; */
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }
    }
    .lower {
        flex: 1;
        margin-top: 20px;
        img {
            width: 100%;
            height: 40vh;
        }
    }
  }
`;
