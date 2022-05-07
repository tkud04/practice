import React, {useEffect} from 'react';

//Styles
import './assets/css/google-font.css?family=Oswald:400,700%7cPoppins:300,400,400i,600,600i,700,800,900';


import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function App(){
    let eventDate = "April 30, 2022";

    return (
        <>
         <Header/>
            <main>
              <Outlet/>
            </main>
          <Footer
            />
       </>
    );
}