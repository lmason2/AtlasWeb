import React from 'react';
import { StyledBurger } from './hamburger.styled';

const Burger = (props:any) => {
  return (
    <StyledBurger open={props.open} onClick={() => props.setOpen(!props.open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger;