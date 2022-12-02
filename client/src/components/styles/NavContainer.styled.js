import styled from 'styled-components';

const NavContainer = styled.nav`

    background-color: grey;
    width: 100%;
    height: 80px;
    margin-bottom: 50px;

    ul{
        display: flex;
        flex-direction: row;
        text-decoration: none;
        margin: 0;
    }

    ul:first-child{
        margin-left: 40px;
    }

    li{
        list-style: none;
        margin-right: 50px;
        font-size: 20px;
        text-decoration: underline;
        line-height: 80px;
    }

    li:hover{
        color: red;
    }

`

export default NavContainer;