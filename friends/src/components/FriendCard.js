import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
    background-color: teal;
`

export const FriendCard = (props) => {
    return (
        <CardStyle>
            <h4>{props.friend.name}</h4>
            <p>Age : {props.friend.age}</p>
            <p>Email : {props.friend.email}</p>
        </CardStyle>
    );
}