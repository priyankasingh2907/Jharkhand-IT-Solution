import  {Link}  from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  const data = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <Nav>
      <div className="banner">
        <div className="title">
          <h1>Logo</h1>
        </div>
        <div className="img">
          <img src="" alt="" />
        </div>
      </div>
      <div className="toggle">

      </div>
      <div className="menu">
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="btn">
        <button><Link to="/signup">Sign Up</Link></button>
        <button><Link to="/login">Login</Link></button>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`

display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 20px 20px; */
  /* background-color: #333; */
  color: #fff;
  /* position: sticky; */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  /* opacity: 1; */
  /* overflow: hidden; */
  transition: background-color 0.3s ease-in-out;
  background: var(--background);
  top: 0;
  z-index: 999;
 .banner {
    display: flex;
    justify-content: start;
    align-items: center;
    .title{
        font-size: 24px;
        margin-right: 20px;
    }
    /* .img{
        width: 100px;
        height: 100px;
        img{
            width: 100%;
            height: 100%;
        }
    } */
}
    .toggle{
        display: none;
    }
    .menu{
       ul{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        gap: 2rem;
        font-size: 1rem;
        font-weight: 700;
        li{
            margin-right: 20px;
            a{
                color: #fff;
                text-decoration: none;
            }
        }
       }
    }
    .btn{
        display: flex;
        gap: 10px;
        button{
            background-color: var(--blue);
            color: #fff;
            border: none;
            font-size: 1rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
            &:hover{
                background-color: var(--primary);
                color: var(--input-background);
            }
            &:focus{
                outline: none;
            }   

            border-radius: 15px;
            padding: 10px 20px;
        }
    }



`;
