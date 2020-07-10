import React, { useMemo, useCallback, useRef } from 'react';
import styled, { withTheme, css } from 'styled-components';
import PropTypes from 'prop-types';
import useDimensions from '@rehooks/component-size';
import mergeRefs from 'react-merge-refs';

// import Icon from '../Icons/Icon';
import Typography from '../styles/Typography';
import Box from '../styles/Box'

// import Tooltip from '../Tooltips/Tooltip';

// em ordem de prioridade
const getVariant = ({ error, disabled, variant }) => {
  if (disabled) {
    return 'disabled';
  }

  if (error) {
    return 'error';
  }

  if (variant) {
    return variant;
  }

  return 'primary';
};

const InputStyles = css(({
  sizeProps = {},
  styleProps = {},
  variantProps = {},
  theme,
  style,
  hasIcon,
}) => {
  const { focus, hover, ...boxProps } = styleProps;
  const { focus: focusVariant, hover: hoverVariant, ...variantBoxProps } = variantProps;
  const { tag, ...typographyProps } = theme.typography.body;

  return {
    fontFamily: theme.fonts.regular,
    transition: 'border 125ms ease-in-out',
    borderStyle: 'solid',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 6,
    outline: 'none',
    ...boxProps,
    ...variantBoxProps,
    ...sizeProps,
    ...typographyProps,
    ...hasIcon && { paddingRight: 40 },

    '&:focus': {
      ...(focusVariant || focus),
      outline: 'none',
    },

    '&:hover': {
      ...(hoverVariant || hover),
      outline: 'none',
    },

    '&::placeholder': {
      color: theme.colours.coldgrey500,
    },

    ...style,
  };
});

const _Input = styled.input`
  ${InputStyles};
`;

const TextArea = styled.textarea`
  ${InputStyles};
  resize: none;
`;


const Textfield = React.forwardRef((props, ref) => {
  const {
    textarea,
    theme,
    size,
    onChange,
    value,
    error,
    disabled,
    label,
    helperText,
    boxProps,
    labelProps,
    name,
    helperTextProps,
    id,
    required,
    ...inputProps
  } = props;
  const variant = getVariant(props);

  const defaultStyleProps = theme.inputs.variants.default;
  const sizeProps = theme.inputs.size[size] || theme.inputs.size.md;
  const variantProps = theme.inputs.variants[variant] || theme.inputs.variants.primary;

  const inputRef = useRef();
  const inputSize = useDimensions(inputRef);

  const labelRef = useRef();
  const labelSize = useDimensions(labelRef);

  const _onChange = useCallback((e) => {
    if (!disabled) {
      onChange(e.target.value);
    }
  }, [disabled, onChange]);

  const Input = useMemo(() => (textarea ? TextArea : _Input), [textarea]);

  return (
    <Box width='100%' {...boxProps}>
      {label && (
        <Typography
          display='block'
          mb={2}
          ref={labelRef}
          htmlFor={name}
          className='force-inline-children'
          {...(sizeProps.label || {})}
          {...(defaultStyleProps.label || {})}
          {...(variantProps.label || {})}
          {...labelProps}
        >
          {label}
          {Boolean(required) && ' *'}
        </Typography>
      )}

      <Input
        ref={mergeRefs([inputRef, ref])}
        required={required}
        disabled={disabled}
        value={value}
        name={name}
        onChange={_onChange}
        sizeProps={sizeProps.input || {}}
        styleProps={defaultStyleProps.input || {}}
        variantProps={variantProps.input || {}}
        {...name && { id: id || name }}
      />

      {(error || helperText) && (
        <Typography
          display='block'
          mt={1}
          variant='helper'
          color={error ? 'danger' : 'coldgrey600'}
          {...helperTextProps}
        >
          {error || helperText}
        </Typography>
      )}
    </Box>
  );
});

Textfield.propTypes = {
  theme: PropTypes.object.isRequired,
  size: PropTypes.string,
  tag: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  label: PropTypes.node,
  helperText: PropTypes.node,
  boxProps: PropTypes.object,
  labelProps: PropTypes.object,
  textarea: PropTypes.bool,
  name: PropTypes.string,
  helperTextProps: PropTypes.object,
  id: PropTypes.string,
  required: PropTypes.bool,
};

Textfield.defaultProps = {
  textarea: false,
  label: '',
  size: 'md',
  tag: 'body',
  error: null,
  disabled: false,
  value: '',
  onChange: () => {},
  helperText: null,
  boxProps: {},
  labelProps: {},
  name: '',
  helperTextProps: {},
  id: null,
  required: false,
};

export default withTheme(Textfield);

