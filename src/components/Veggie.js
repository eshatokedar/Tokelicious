import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

function Veggie() {
  const [veggies, setVeggies] = useState([]);

  useEffect(() => {
    getVeggies();
  }, []);

  const getVeggies = async () => {

    const check=localStorage.getItem('veggies');
    if(check){
      setVeggies(JSON.parse(check));
    }
    else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian&query=vegan`
      );
      const data = await api.json();
     
        localStorage.setItem("veggies", JSON.stringify(data.recipes));
        setVeggies(data.recipes);
      
    } 
};
  return (
    <div className="veggie-cards">
      <Wrapper>
        <h2>Vegetarian Picks!</h2>
        <br/>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggies.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0rem 0rem;
`;

const Card = styled.div`
  min-height: 32rem;
  min-width: 18rem;
  border-radius: 1rem;
  overflow: hidden;
  

  img {
    height: 20rem;
    width: 30.3rem;
  }

  p {
    position: absolute;
   
    left: 60%;
    bottom: 0%;
    text-align: centre;
    transform: translate(-55%, 15%);
    color: black;
    width: 100%;
    font-weight: 600;
    font-size: 1.1rem;
    height: 40%;
    display: flex;
    justify-content: centre;
    align-items: centre;
  }
`;
export default Veggie;