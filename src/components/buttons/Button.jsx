import React, { useState } from 'react'
import styled, { withTheme } from "styled-components";
import PropTypes from 'prop-types';
import {
  color,
  space,
  shadow,
  layout,
  border,
  flexbox,
  position
} from 'styled-system';
import { darken } from 'polished'
import Typography from '../styles/Typography' 


const Button = styled.button`
  position: relative;
  outline: none;
  border-radius: 8px;
  border: none;
  text-align: 'center';
  background: ${({variant, disabled}) => {
    if(disabled) return '#afafaf'
    switch (variant) {
      case 'secondary':
        return '#fafafa'
      default:
        return '#069'
    }
  } };
  ${color};
  ${space};
  ${shadow};
  ${layout};
  ${border};
  ${flexbox};
  ${position};


  ${({
    backgroundColor,
    hoverColor,
    disabled,
    theme,
  }) => !disabled && `
      &:hover {
        background-color: ${hoverColor || darken(0.05, theme.colors[backgroundColor] || backgroundColor)};
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(10, 10);
        opacity: 0;
        transition: transform .5s, opacity 1s;
      }

      &:active::after {
        transform: scale(0, 0);
        opacity: .3;
        transition: 0s;
      }
    `};

`;

const getTypographyColor = (typographyColorProps, hovered) => (
  hovered
    ? ((typographyColorProps || {}).hoverColor || (typographyColorProps || {}).color)
    : (typographyColorProps || {}).color
);

const StyledButton = ({
  typographyProps,
  children,
  variant,
  disabled,
  size,
  theme,
  ...buttonProps
  
}) => {
  const [hovered, setHovered] = useState(false);
  const sizeProps = theme.buttons.size[size] ? theme.buttons.size[size] : theme.buttons.size.md

  const _variant = disabled ? 'disabled' : variant;
  const colorProps = variant !== 'unset' ? (theme.buttons.variants[_variant] || theme.buttons.variants.primary) : {};

  const typographyColor = getTypographyColor(colorProps.typography, hovered);


  return (
    <Button
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    type='button'
    disabled={disabled}
    {...sizeProps.button}
    {...colorProps.background}
    {...buttonProps}
    >
      <Typography
          {...sizeProps.typography}
          {...{ ...colorProps.typography, color: typographyColor }}
          {...typographyProps}
        >
          {children}
        </Typography>
    </Button>
  )
}

StyledButton.propTypes = {
  theme: PropTypes.object.isRequired,
  variant: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  typographyProps: PropTypes.object,
  children: PropTypes.any,
};
StyledButton.defaultProps = {
  size: 'md',
  variant: 'primary',
  disabled: false,
  typographyProps: {},
  children: '',
};

export default withTheme(StyledButton)

