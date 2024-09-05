
import styled from "styled-components";
import homeImage from "../assets/vecteezy_modern-house-with-balcony-and-balcony-on-transparent-background_48218132.png";
import { FcHome } from "react-icons/fc";
import { FcFinePrint } from "react-icons/fc";
import { FcOk } from "react-icons/fc";

export default function Section1() {
  return (
    <Section id="hero">
      <div className="background">
        <img src={homeImage} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <div className="heading">
            <h1>Find The House Of </h1>
            <h1>Your Dreams</h1>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur!
            </p>
          </div>
        </div>
        <div className="search">
          <div className="container">
            <label htmlFor="">Where you want to go</label>
            <input type="text" placeholder="Search Your location" />
          </div>
          <div className="container">
            <label htmlFor="">Check-in</label>
            <input type="date" />
          </div>
          <div className="container">
            <label htmlFor="">Check-out</label>
            <input type="date" />
          </div>
          <button>Explore Now</button>
        </div>
        <div className="options">
          <div >
            <FcHome />
            <p>Find Your Home</p>
          </div>
          <div >
            <FcFinePrint />
            <p>Calculate Your Mortgage</p>
          </div>
          <div >
            <FcOk />
            <p>Book Your Agent</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.div`
/* margin: 1rem; */
  position: relative;
  margin-top: 3rem;
  height: 80vh;
  z-index: 0;
  overflow: hidden;
  background: var(--backgroung);
  .background {
    position: absolute;
    top: 10%;
    left: 65%;
    width: 100%;
    height: 100%;
    /* background: url(${homeImage}) no-repeat center center/cover; */
    /* opacity: 0.5; */
    z-index: -1;
    img {
      width: 800px;
      height: 800px;
      object-fit: fill;
    }
  }
  .content {
    height: 100%;
    width: 100%;
    position: absolute;
   top: 10%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 3rem;
    .title {
      color: white;
      .heading {
        h1 {
          font-size: 4rem;
          letter-spacing: 0.2rem;
        }
      }
      .para {
        p {
          width: 50%;
          /* text-align: center; */
          /* padding: 0 30vw; */
          margin-top: 0.5rem;
          font-size: 1.2rem;
        }
      }
    }
    .search {
      display: flex;
      background-color: #ffffffce;
      padding: 0.5rem;
      border-radius: 0.5rem;
      .container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 1.5rem;
        label {
          font-size: 1.1rem;
          color: #03045e;
        }
        input {
          background-color: transparent;
          border: none;
          text-align: center;
          color: black;
          &[type="date"] {
            padding-left: 3rem;
          }
          &::placeholder {
            color: black;
          }
          &:focus {
            outline: none;
          }
        }
      }
      button {
        padding: 1rem;
        cursor: pointer;
        border-radius: 0.3rem;
        border: none;
        color: white;
        background-color: #4361ee;
        font-size: 1.1rem;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #023e8a;
        }
      }
      
    }
    .options {
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 1rem;
        div {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          svg {
            color:white;
            font-size: 1.5rem;
          }
          p {
            font-size: 1rem;
            color: #eee6e6;
          }
        }
      }
  }

  @media screen and (min-width: 280px) and (max-width: 980px) {
    height: 80vh;
    margin-top: 0;
    padding: 0%;
    .background {
      /* background-color: palegreen;
       */
      display: none;
      img {
        height: 100%;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
        }
        .para {
          display: none;
        }
      }
      .search {
        flex-direction: column;
        padding: 0.8rem;
        gap: 0.8rem;
        .container {
          padding: 0 0.8rem;
          input[type="date"] {
            padding-left: 1rem;
          }
        }
        button {
          padding: 0.4rem;
          font-size: 0.8rem;
        }
      }
      .options {
        display: none;
      }
    }
  }
`;
