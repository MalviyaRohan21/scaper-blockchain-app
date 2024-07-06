"use client";
import styled from 'styled-components';
import React from 'react';
import Login from '../components/login';


export default function Home() {
  return (
    <Wrapper>
      <Login />
    </Wrapper> 
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: #0a0n0d;
  color: white;
  display: grid;
  place-items: center;
  `
const Button = styled.div`
   border: 1px solid #282b2f;
   padding: 0.8rem;
   font-size: 1.3rem;
   font-weight: 500;
   border-radius: 0.4rem;
   background-color: #3773f5;
   color: #000;

   &:hover {
    cursor: pointer;
   }`

const Details = styled.div`
   font-size: 1.2rem;
   text-align: center;
   margin-top: 1rem;
   font-weight: 500;
   color: white;
   `

