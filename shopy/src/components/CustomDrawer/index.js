import React from "react";
import { Button, Drawer } from "rsuite";
import { connect } from "react-redux";
import {
  selectDrawerStatus,
  toggleDrawerStatus,
} from "../../redux/componentsReducer";
import { NavLink } from "react-router-dom";

const mapStateToProps = (state) => ({
  drawerStatus: selectDrawerStatus(state),
});

export const CustomDrawer = connect(mapStateToProps, { toggleDrawerStatus })(
  ({ drawerStatus, toggleDrawerStatus }) => {
    return (
      <Drawer size="xs" show={drawerStatus} placement="left">
        <Button onClick={() => toggleDrawerStatus(false)}>close</Button>
        <NavLink to="/register">Register</NavLink>
      </Drawer>
    );
  }
);
