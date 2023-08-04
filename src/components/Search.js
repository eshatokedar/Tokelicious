import React,{useState} from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {

  const [input, setInput]=useState("");
  const navigate=useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    navigate('/searched/'+input)
  }

  const handleChange=(e)=>{
    setInput(e.target.value);
  }
  return (
    <FormStyle onSubmit={handleSubmit}>
        <div>
        <input 
        onChange={handleChange} 
        type="text"
        placeholder='Search your favourite meals!'
        value={input} 
        />
        </div>
    </FormStyle>
  );
}

const FormStyle= styled.form`
margin: 0rem 20rem;

 div{
    margin-top:0.5rem;
    display:flex;
    width:100%;
    justify-content:space-evenly;
 }
input{
    border:none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size:1.5rem;
    color: white;
    padding: 1rem 3rem;
    border:none;
    border-radius:1rem;
    width:100%;
}`

export default Search
