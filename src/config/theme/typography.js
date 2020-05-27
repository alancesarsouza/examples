const h1 = {
  fontSize: 40,
  fontWeight: 600,
  tag: 'h1',
};

const h2 = {
  fontSize: 32,
  fontWeight: 600,
  tag: 'h2',
};

const h3 = {
  fontSize: 28,
  fontWeight: 600,
  tag: 'h3',
};

const h4 = {
  fontSize: 24,
  fontWeight: 600,
  tag: 'h4',
};

const h5 = {
  fontSize: 20,
  fontWeight: 600,
  tag: 'h5',
};

const h6 = {
  fontSize: 18,
  fontWeight: 600,
  tag: 'h6',
};

const body = {
  fontSize: 16,
  fontWeight: 400,
  tag: 'p',
  color: 'coldgrey600',
};

const helper = {
  fontSize: 14,
  fontWeight: 400,
  tag: 'span',
};

const button = {
  fontSize: 16,
  fontWeight: 600,
  tag: 'span',
};

const buttonSM = {
  fontSize: 14,
  fontWeight: 600,
  tag: 'span',
};

const caps = {
  fontSize: 14,
  fontWeight: 400,
  textTransform: 'uppercase',
  letterSpacing: '0.16em',
  tag: 'span',
};

const capsSM = {
  fontSize: 12,
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.8px',
  tag: 'span',
};

const typography = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  H1: h1,
  H2: h2,
  H3: h3,
  H4: h4,
  H5: h5,
  H6: h6,
  body,
  helper,
  button,
  buttonSM,
  buttonsm: buttonSM,
  caps,
  capsSM,
  capssm: capsSM,
  label: {
    ...button,
    tag: 'label',
  },
};

export default typography;
