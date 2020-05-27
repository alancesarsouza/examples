import styled, { css } from 'styled-components/macro';
import {
  space,
  color,
  flexbox,
  layout,
  position,
  border,
  shadow,
} from 'styled-system';

export const BoxStyles = css`
  position: relative;
  box-sizing: border-box;
  ${position};
  ${space};
  ${flexbox};
  ${color};
  ${layout};
  ${border};
  ${shadow};

  background-color: ${({ backgroundColor, theme }) => theme.colors[backgroundColor] || backgroundColor};
  border-color: ${({ borderColor, theme }) => theme.colors[borderColor] || borderColor};
`;

export const Header = styled.header`
  ${BoxStyles};
`;

export const Main = styled.main`
  ${BoxStyles};
`;

export const Aside = styled.aside`
  ${BoxStyles};
`;

export const Section = styled.section`
  ${BoxStyles};
`;

export const Nav = styled.nav`
  ${BoxStyles};
`;

export const Article = styled.article`
  ${BoxStyles};
`;

const Box = styled.div`
  ${BoxStyles};
`;

const Span = styled.span`
  ${BoxStyles};
`;

Box.Header = Header;
Box.Main = Main;
Box.Aside = Aside;
Box.Section = Section;
Box.Article = Article;
Box.Nav = Nav;
Box.Span = Span;

export default Box;