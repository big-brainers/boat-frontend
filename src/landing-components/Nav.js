import React from "react";
// import styled from "styled-components";

// const NavBar = styled.nav`
//   background-color: #f2f2f2;
//   color: #222f65;
//   height: 70px;
//   padding-bottom: 45px;
// `;

// const SecondaryButton = styled.secondaryButton`
//   color: #111b47;
//   border-radius: 2px;
// `;

// const PrimaryButton = styled.primaryButton`
//   background: #111b47;
//   border-radius: 2px;
//   color: FFFFFF;
// `;

const Nav = () => {
  return (
    //having issues with styled components
    // <NavBar>
    //   <h2> BOAT </h2>
    //   <SecondaryButton onClick="">Sign In </SecondaryButton>
    //   <PrimaryButton onClick="">Sign Up </PrimaryButton>
    // </NavBar>

    <nav>
      <h2> BOAT </h2>
      <button onClick="">Sign In </button>
      <button onClick="">Sign Up </button>
    </nav>
  );
};

export default Nav;
