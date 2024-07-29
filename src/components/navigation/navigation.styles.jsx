import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  margin: 0 25px 25px 25px;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 70px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  white-space: nowrap;
`;
