import React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import WriteContent from './WriteContent';
import EditIcon from '@mui/icons-material/Edit';
import CodeIcon from '@mui/icons-material/Code';
type Props = {};
const WriteWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    background: 'white',
    border: 'solid 1px red',
});
const BoxContainer = styled('div')({
    padding: 5,
    width: '50%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    border: 'solid 1px black',
});
const IconContainer = styled('div')({
    width: 450,
    height: 50,
    padding: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'white',
    border: 'solid 1px green',
});
const Write = (props: Props) => {
    return (
        <WriteWrapper>
            <BoxContainer>
                <IconContainer>
                    <EditIcon
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: '5px',
                            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1px',
                            margin: '0 2px',
                        }}
                    ></EditIcon>
                    <CodeIcon
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: '5px',
                            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1px',
                            margin: '0 2px',
                        }}
                    ></CodeIcon>
                </IconContainer>
                <Box
                    sx={{
                        width: 400,
                        height: 600,
                        bgcolor: '#36393f',
                        borderRadius: '5px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '25px',
                    }}
                >
                    <WriteContent></WriteContent>
                </Box>
            </BoxContainer>
            <BoxContainer>
                <IconContainer>
                    <EditIcon
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: '5px',
                            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1px',
                            margin: '0 2px',
                        }}
                    ></EditIcon>
                    <CodeIcon
                        sx={{
                            width: 35,
                            height: 35,
                            borderRadius: '5px',
                            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                            display: 'flex',
                            flexDirection: 'row',
                            padding: '1px',
                            margin: '0 2px',
                        }}
                    ></CodeIcon>
                </IconContainer>
                <Box
                    sx={{
                        width: 400,
                        height: 600,
                        bgcolor: '#36393f',
                        borderRadius: '5px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '25px',
                    }}
                >
                    <WriteContent></WriteContent>
                    {/* {props.children} */}
                </Box>
            </BoxContainer>
        </WriteWrapper>
    );
};

export default Write;
