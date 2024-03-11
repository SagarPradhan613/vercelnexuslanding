/* eslint-disable react/prop-types */
import styled, { keyframes } from "styled-components";
import { COLORS } from "../utils/colors";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg || COLORS.white};
  color: ${({ color }) => color || COLORS.black};
  width: ${({ width }) => width || "50px"};
  height: ${({ width }) => width || "50px"};
  border-radius: 50%;
  cursor: pointer;
  transition: all 1s ease;
  position: relative;
  z-index: 10;
  border: none;
  font-size: ${({ icon }) => icon || "25px"};
  overflow: hidden;
  &:hover {
    & > * {
      transform: translateX(45px);
      transition: transform 1s ease; /* Added transition property here */
    }
  }
`;

function IconButton({
  children,
  bg,
  color,
  width,
  bordercolor,
  onClick,
  ref,
  icon,
  disabled = false,
}) {
  return (
    <StyledButton
      bg={bg}
      color={color}
      width={width}
      icon={icon}
      borderColor={bordercolor}
      onClick={onClick}
      disabled={disabled}
      ref={ref}
    >
      {children}
    </StyledButton>
  );
}

export default IconButton;
