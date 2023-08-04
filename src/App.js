import React from 'react'
import Pages from './pages/Pages';
import Category from './components/Category';
import { BrowserRouter, Routes } from 'react-router-dom';
import Search from './components/Search';
import { Link } from 'react-router-dom';
import { GiKnifeFork } from 'react-icons/gi';
import { styled } from 'styled-components';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav>
      <GiKnifeFork/>
      <Logo to={"/"}>Tokelicious</Logo>
    </Nav>
    <Search/>
      <Category/>
      <Pages/>
    </BrowserRouter>
    </div>
  )
}

const Logo=styled(Link)`
text-decoration:none;
font-size:2.0rem;
font-weight:400;
font-family:"Lobster Two",cursive;
`;
const Nav=styled.div`
margin: 0rem 2.2rem;
 padding:0.5rem 0rem;
display:flex;
justify-content:flex-start;
align-items:center;

svg{
  font-size:2rem;
}
`

export default App

