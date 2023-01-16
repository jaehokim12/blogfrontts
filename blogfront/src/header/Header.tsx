import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Link } from '@mui/material';
import Write from '../write/Write';
const HeaderWrapper = styled('div')({
    width: '100%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
});
const LinkContainer = styled('link')({
    width: 50,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
});
type Props = {};

const Header = (props: Props) => {
    const linkArr = [
        { value: 'Home', path: '/' },
        { value: 'Login', path: '/login' },
        { value: 'Register', path: '/register' },
    ];
    return (
        <>
            <HeaderWrapper>
                {linkArr.map((value, key) => {
                    return (
                        <Link
                            sx={{
                                width: 45,
                                height: 10,
                                bgcolor: 'white',
                                borderRadius: '5px',
                                boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '25px',
                            }}
                            key={key}
                            href={value.path}
                        >
                            {value.value}
                        </Link>
                    );
                })}
            </HeaderWrapper>
        </>
    );
};

export default Header;
