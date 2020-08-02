import React from "react";
import styled from "styled-components";
import { MainLayout } from "../../components/layouts/MainLayout";
import { COLORS_THEME } from "../../styles/colors";
import { MEDIA_BREAKPOINTS } from "../../styles/mediaBreakpoints";
import { Directory } from "./Directory";


export const Homepage= () => {
  return (
    <MainLayout>
      <Directory/>
    </MainLayout>
  );
};
