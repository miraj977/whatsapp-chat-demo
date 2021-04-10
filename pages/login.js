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
