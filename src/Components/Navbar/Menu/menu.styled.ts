// Menu.styled.js
import styled from 'styled-components';

export const StyledMenu = styled.nav<{open: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: ${({ theme }) => theme.palette.common.white};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 117px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};

  a {
    color: ${({ theme }) => theme.palette.secondary.main};
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: ${({ theme }) => theme.palette.common.black};
    }
  }
`;