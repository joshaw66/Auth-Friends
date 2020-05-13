import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 30%;
    margin: 5%;
`

export const Home = () => {
    return (
        <MainNav>
            <NavLink to='friends'>Friends</NavLink>
            <NavLink to='addFriend'>Add Friends</NavLink>
        </MainNav>
    );
}