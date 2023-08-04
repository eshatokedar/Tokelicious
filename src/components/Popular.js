import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {

    const check=localStorage.getItem('popular');
    if(check){
      setPopular(JSON.parse(check));
    }
    else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
     
        localStorage.setItem("popular", JSON.stringify(data.recipes));
        setPopular(data.recipes);
      
    } 
};
  return (
    <div className="popular-cards">
      <Wrapper>
        <h2>Trending Picks</h2>
        <br/>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/'+recipe.id}>
                  <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    {/* <Gradient/> */}
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
  margin: 3rem 1.5rem;
`;

const Card = styled.div`
  min-height: 20rem;
  min-width:25rem;
  border-radius: 2rem;
  overflow: hidden;
  

  img {
    border-radius: 3rem;
    height: 16rem;
    width: 20.3rem;
  }
  p {
    position: absolute;
   
    left: 60%;
    bottom: 0%;
    text-align: centre;
    transform: translate(-55%, 15%);
    color: black;
    width: 100%;
    font-weight: 700;
    font-size: 1.1rem;
    display: flex;
    justify-content: centre;
    align-items: centre;
  }
`;

// const Gradient=styled.div`
// position:absolute;
// width:100%;
// height:100%
// background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
// `;

export default Popular;
