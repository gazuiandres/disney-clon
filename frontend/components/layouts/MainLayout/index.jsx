import React from "react";

import Navbar from '../../elements/Navbar';
import { Main } from './style'

const MainLayout = ({children}) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Main className="container-w">
        {children}
      </Main> 
    </>
  );
};

export default MainLayout;
