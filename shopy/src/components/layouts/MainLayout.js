import React from "react";
import styled from "styled-components";
import { Drawer } from "rsuite";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { connect } from "react-redux";
import { selectDrawerStatus } from "../../redux/componentsReducer";
import { CustomDrawer } from "../CustomDrawer";

const mapStateToProps = (state) => ({
  drawerStatus: selectDrawerStatus(state),
});

export const MainLayout = connect(mapStateToProps)(
  ({ children, drawerStatus }) => {
    return (
      <Container>
        <Header />
        <CustomDrawer />
        <Content>{children}</Content>
        <Footer />
      </Container>
    );
  }
);

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.main`
  flex-grow: 1;
`;
