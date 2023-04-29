import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const DrawerHeaderStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  display: "flex",
  alignItems: "center",
  justifyContent: open ? "flex-start" : "center",
  padding: "20px 14px 20px 18px",
}));

export const logoTextStyle = {
  fontWeight: 700,
  fontSize: 22,
  paddingLeft: 10,
};

export default DrawerHeaderStyled;
