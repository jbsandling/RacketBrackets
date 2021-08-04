import { useRouter } from "next/dist/client/router";
import React, { Component, useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { auth } from "../config/firebaseConfig";
import Link from 'next/link'
import { User } from '../Classes/User';

const Header = () => {    
    const user = useContext(AuthContext);
    const router = useRouter();

    const SignOut = async () => {
        await auth.signOut();
        router.push('/');
        localStorage.removeItem("username");
        };

    {/*<Link href="/posts/first-post">*/}
    {/*    <a>this page!</a>*/}
    {/*</Link>*/}

    //May want to replace RacketBrackets Header with Logo?
    return (
        <div className="header">
          <Link href = "/">
            <a><h1><span style ={{color: "forestgreen"}}>Racket</span>Brackets</h1></a>
          </Link>
            {user && 
                <p className="userStatus">
                    <a id="signOut" onClick={SignOut}>Sign Out</a>
                </p>}
            {!user && 
                <p className="userStatus" id="login-signup">
                  <Link href="LogIn">
                    <a>Log In</a>
                  </Link>
                  <Link href="SignUp">
                    <a>Sign Up</a>
                  </Link>
                </p>
            }
            <div className="navbar">
                {
                    user &&
                    <p>
                        <Link href={`Profile/?name=${localStorage.getItem("username")}`}>
                          <a>My Profile</a>
                        </Link>
                        <Link href={`GroupList/?name=${localStorage.getItem("username")}`}>
                        <a>My Clubs</a>
                        </Link>
                        <a>My Matches</a>
                      <Link href="/">
                        <a>Search</a>
                      </Link>
                    </p>
                }
            </div>
        </div>
    );
}

export default Header;
