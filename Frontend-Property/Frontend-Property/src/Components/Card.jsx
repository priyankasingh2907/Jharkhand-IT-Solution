import styled from "styled-components";

export default function Card() {
  return (
    <CardS>
      <img src="https://picsum.photos/200/300?random={Math.ramdom()*1}"
           alt="property" />
      <div className="details">
        <h3>Beautiful Villa in the Heart of Paris</h3>
        <p>3 bedrooms, 2 bathrooms, 250 sq ft</p>
        <span>$3,500,000</span>
      </div>
    </CardS>
  );
}
const CardS = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  overflow: hidden;
  /* background-color: #fff; */
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
