import styled from "styled-components";

export default function Section6() {
  return (
    <Section>
        <div className="heading">
        <h2 >Subscribe To Our Newsletter</h2>
        <h2>To Recieve Best Deals</h2>

        </div>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel mi
        sit amet est gravida posuere. Sed ultricies, nisi id facilisis
        i.
      </p>
      <div className="bottom">
        <h3 className="info">Subheading fygj</h3>
       
        <div className="button-container">
          <button className="button">Button</button>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
margin-top: 3rem;
  position: relative;
  top: 25%;
  left: 25%;

  width: 40vw;
  height: 40vh;

  background-color: #f0f0f0;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;
  padding: 5rem ;
  .heading {
    font-size: 2rem;
    font-weight: bold;
    color: var(--input-background);
  }
  .para {
    font-size: 1.2rem;
    color: var(--input-background);
    margin-bottom: 1rem;
    text-align: center;
    line-height: 1.5;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2rem;
  }
  .bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* gap: 1rem; */
    margin-top: 2rem;
    width: 100%;
    .info {
      font-size: 1.2rem;
      color: var(--input-background);
      margin-right: 1rem;
    }
    .button {
      background-color: var(--primary-color);
      color: var(--input-background);
      padding: 1rem 2rem;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
 display: none;
  }
`;
