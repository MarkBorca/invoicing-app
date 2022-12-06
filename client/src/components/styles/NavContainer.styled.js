import styled from 'styled-components';

const NavContainer = styled.nav`

    background-color: grey;
    width: 100%;
    height: 60px;
    margin-bottom: 40px;

    ul{
        width: 350px;
        padding-right: 40px;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        text-decoration: none;
        margin: 0 auto;
    }

    li{
        list-style: none;
        font-size: 20px;
        text-decoration: underline;
        line-height: 57px;
    }

    li:hover .under-line{
        color: red;
        background-color: red;
    }

    .under-line{
        height: 3px;
        background-color: aqua;
    }

`

export default NavContainer;