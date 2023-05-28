import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`    
    list-style: none;
    display: flex;
    flex-flow: row-nowrap;

    li {
        padding: 18px 10PX;
    }

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: red;
        top: 0px;
        right: 0px;
        height: 100vh;
        width: 300px;
    }
`;
const RightNav = () => {
    return (
        <Ul>
            <li>Home</li>
            <li>Abdddddddout</li>
            <li>Contact</li>
            <li>Sign in</li>
            <li>Sign up</li>
        </Ul>
    )
}

export default RightNav;