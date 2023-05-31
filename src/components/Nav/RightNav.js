import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: red;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    transition: transform 0.9s ease-in-out, opacity 0.9s ease-in-out;
    height: ${({ open }) => (open ? '100vh' : '0')};

    top: 0px;
    right: 0px;
    width: 300px;
    padding-top: 3.5rem;

    body {
        overflow: hidden;
    }

    li {
      color: #fff;

    }
  }
`;

const RightNav = ({ open }) => {
 
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Sign in</li>
      <li>Sign up</li>
    </Ul>
  );
};

export default RightNav;
