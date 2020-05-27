import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { space, typography, layout } from 'styled-system';

const TextStyles = css` 
  position: relative;
  font-family: ${({ theme }) => theme.fonts.regular};
  cursor: ${({ onClick, cursor }) => (onClick ? 'pointer' : cursor)};
  color: ${({ color, theme }) => (color ? (theme.colors[color] || color) : theme.colors.coldgrey700)};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`};
  margin: 0;

  font-weight: ${({ theme, fontWeight }) => (typeof fontWeight === 'number'
    ? fontWeight
    : theme.fontWeightMap[(fontWeight || '').toLowerCase()] || 400
  )};

  &:hover {
    text-decoration: ${({ onClick }) => (onClick ? 'underline' : 'none')};
    ${({ hover }) => hover};
  }

  &.force-inline-children {
    & > * {
      margin: 0;
      display: inline-block;
    }
  }

  ${layout};
  ${typography};
  ${space};
`;

const Text = styled.span`
  ${TextStyles};
`;

Text.Span = Text;

Text.P = styled.p`
  ${TextStyles};
`;

Text.Label = styled.label`
  ${TextStyles};
`;

Text.H1 = styled.h1`
  ${TextStyles};
`;

Text.H2 = styled.h2`
  ${TextStyles};
`;

Text.H3 = styled.h3`
  ${TextStyles};
`;

Text.H4 = styled.h4`
  ${TextStyles};
`;

Text.H5 = styled.h5`
  ${TextStyles};
`;

Text.H6 = styled.h6`
  ${TextStyles};
`;

Text.propTypes = {
  color: PropTypes.string,
  cursor: PropTypes.string,
  fontWeight: PropTypes.oneOf([
    100,
    200,
    300,
    400,
    500,
    600,
    700,
    800,
    900,
    'thin',
    'extralight',
    'light',
    'regular',
    'medium',
    'semibold',
    'bold',
    'extrabold',
    'black',
  ]),
};

Text.defaultProps = {
  color: 'coldgrey700',
  cursor: 'inherit',
};

export default Text;