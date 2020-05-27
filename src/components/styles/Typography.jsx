import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { capitalize } from 'lodash';

import Text from './Text';

const Typography = React.forwardRef(({
  variant,
  style,
  children,
  link,
  theme,
  tag: propsTag,
  ...props
}, ref) => {
  const { tag, ...variantStyles } = theme.typography[variant] || theme.typography.body;
  const TextComponent = Text[capitalize(propsTag || tag || 'p')] || Text;

  return (
    <TextComponent
      ref={ref}
      style={{
        ...(link ? { textDecorationLine: 'underline' } : ''),
        ...style,
      }}
      {...variantStyles}
      {...props}
    >
      {children}
    </TextComponent>
  );
});

Typography.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object.isRequired,
  children: PropTypes.any,
  link: PropTypes.bool,
  tag: PropTypes.string,
};

Typography.defaultProps = {
  variant: 'body',
  style: {},
  children: '',
  link: false,
  tag: null,
};

export default withTheme(Typography);
