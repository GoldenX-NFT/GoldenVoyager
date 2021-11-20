import React from 'react'; 
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home () { 
    /*<Link to="/mint">
                        <button>MINT A VOYAGER NOW</button>
                    </Link>
    */
    return (
        <div className="home" id="#home">
            <div className="home__container">
                <div className="home__wrapper">
                    <h1>GOLDEN VOYAGER PARTY</h1>
                    <h4>AN INCUBATOR AND ACCESS PASS FOR MUSICIANS, WRITERS, & CREATIVES</h4>
                    <button>MINTING SOON</button>
                </div>
            </div>
        </div>
    );
}