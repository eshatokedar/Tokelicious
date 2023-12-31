import React from 'react'
import {FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import {GiNoodles,GiSushis, GiChickenOven} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger/>
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Indian'}>
        <GiChickenOven/>
        <h4>Indian</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles/>
        <h4>Thai</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiSushis/>
        <h4>Japanese</h4>
      </SLink>
    </List>

  );
}
const List=styled.div`
display:flex;
justify-content:center;
margin:2rem 0rem;
`
const SLink=styled(NavLink)`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
border-radius:50%;
margin-right:2rem;
text-decoration:none;
background: linear-gradient(35deg, #494949,#313131);
height:5rem;
width:5rem;
cursor:pointer;
transform:scale(0.8);

h4{
  color:white;
  font-size: 0.8rem;
}
svg{
  color:white;
  font-size:1.5rem;
}
`




export default Category;
