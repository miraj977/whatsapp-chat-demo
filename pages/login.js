import Head from "next/head";
import { Button } from "@material-ui/core"
import styled from "styled-components";
import { auth, provider } from "../firebase";
import Image from 'next/image'
function Login ()
{

    const signIn = () =>
    {
        auth.signInWithPopup( provider );
    }

    return (
        <div>
            <Container>
                <Head>
                    <title>Login Page</title>
                </Head>

                <LoginContainer>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        width={120}
                        height={120}
                        style = {{marginBottom: 30}}
                    />

                    <Button color="primary" variant="contained" onClick={signIn}>Sign in with Google</Button>

                </LoginContainer>

                <BottomMessage>
                    <code> <span>Developed by Miraj.</span> Built for educational purpose only.</code>
                </BottomMessage>

            </Container>
        </div>
    )
}

export default Login

const Container = styled.div`
    display: grid;
    height: 100vh;
    place-items: center;
    background: #111d30eb;
    position: relative;
`;

const LoginContainer = styled.div`
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #111d30;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0,0,0,.7);
`;

const BottomMessage = styled.div`
    width: max-content;
    position: absolute;
    bottom: 30px;
    border-radius: 5px;
    background: #111d30ab;
    padding: 15px 30px;
    text-align:center;
    margin: 0 15px;
    color: rgba(255, 255, 255, 0.7);

    & > code{
        width: 100%;
    }
    & code > span {
        color: #00ff09;
    }

     @media only screen and (max-width: 500px){
        width: 90%;
    }
`;