import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { connect } from "react-redux";

import { COLORS_THEME, MEDIA_BREAKPOINTS } from "../styles";
import logo from "../images/logo.png";
import {
  selectDrawerStatus,
  toggleDrawerStatus,
} from "../redux/componentsReducer";

const mapStateToProps = (state) => ({
  drawerStatus: selectDrawerStatus(state),
});

export const Header = connect(mapStateToProps, { toggleDrawerStatus })(
  ({ drawerStatus, toggleDrawerStatus }) => {
    const handleDrawer = () => {
      toggleDrawerStatus(!drawerStatus);
    };
    return (
      <StyledHeader className="header">
        <NavLink to="/">
          <CompanyLogo src={logo} alt="aztech logo" />
        </NavLink>
        <MenuWrapper onClick={handleDrawer}>
          <Text>Menu</Text>
          <IoMdMenu color="white" size={30} />
        </MenuWrapper>
      </StyledHeader>
    );
  }
);

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  z-index: 19;
  display: flex;
  padding: 20px 24px;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(2px);
  background-color: ${COLORS_THEME.transparentBackground};
  ${MEDIA_BREAKPOINTS.smallDevices} {
    height: 50px;
    padding: 20px 24px;
  }
`;

const CompanyLogo = styled.img`
  width: 130px;
  height: 34px;
  align-self: center;
  background-color: transparent;
  z-index: 20;
  ${MEDIA_BREAKPOINTS.extraSmallDevices} {
    width: 95px;
    height: 24px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  font-size: 17px;
  margin-right: 7px;
  transform: translatey(-10%);
  ${MEDIA_BREAKPOINTS.extraSmallDevices} {
    display: none;
  }
`;
