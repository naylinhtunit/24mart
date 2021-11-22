import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding:10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`;
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    display: flex;
`;
const Input = styled.input`
    border: none;
`;
const Logo = styled.h1`
    font-weight: bold;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Rgiht = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>En</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray", fontSize:16,}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo>24mart</Logo></Center>
                <Rgiht>
                    <MenuItem>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Login</MenuItem>
                </Rgiht>
            </Wrapper>
        </Container>
    )
}

export default Navbar
