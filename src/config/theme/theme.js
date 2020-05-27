import shadows from './shadows';
import colors from './colors';
import typography from './typography';

const transitions = {
  button: 'all 125ms ease-in-out',
};

const variants = {
  primary: {
    background: {
      backgroundColor: colors.primary,
      hoverColor: colors.hover_primary,
    },
    typography: {
      color: colors.white,
    },
  },

  secondary: {
    background: {
      backgroundColor: colors.white,
      boxShadow: shadows.buttonShadow,
      hoverColor: colors.coldgrey100,
    },
    typography: {
      color: colors.coldgrey600,
    },
  },

  disabled: {
    background: {
      backgroundColor: colors.coldgrey300,
    },
    typography: {
      color: colors.white,
    },
  },

  dark: {
    background: {
      backgroundColor: colors.coldgrey600,
      hoverColor: colors.coldgrey800,
    },
    typography: {
      color: colors.white,
    },
  },

  light: {
    background: {
      backgroundColor: colors.coldgrey300,
      hoverColor: colors.coldgrey800,
    },
    typography: {
      color: colors.coldgrey700,
      hoverColor: colors.white,
    },
  },

  custom(color) {
    return {
      background: {
        backgroundColor: colors.getOpaqueColor(color, 3),
        borderColor: colors.getOpaqueColor(color, 8),
      },
      typography: {
        color,
      },
    };
  },
};

export default {
  colors,
  colours: colors,

  typography,

  shadows,

  transitions,

  buttons: {
    variants,

    size: {
      sm: {
        typography: { variant: 'buttonSM' },
        button: { padding: '10px 16px' },
      },

      md: {
        typography: { variant: 'button' },
        button: { padding: '12px 20px' },
      },

      lg: {
        typography: { variant: 'h6' },
        button: { padding: '14px 24px' },
      },
    },
  },

  badges: {
    ...variants,
    warning: variants.custom('warning'),
    danger: variants.custom('danger'),
    success: variants.custom('success'),
  },

  avatars: {
    size: {
      sm: '28px',
      md: '72px',
    },
  },

  alerts: {
    primary: variants.custom('primary'),
    warning: variants.custom('warning'),
    default: variants.custom('coldgrey700'),
    danger: variants.custom('danger'),
    success: variants.custom('success'),
  },

  inputs: {
    variants: {
      default: {
        // para evitar repetição, default sempre será spreaded
        input: {
          borderColor: colors.coldgrey400,
          borderWidth: 2,
          color: colors.coldgrey700,
        },

        label: {
          variant: 'label',
          color: colors.coldgrey600,
        },
      },

      primary: {
        input: {
          focus: {
            borderColor: colors.primary,
          },

          // hover: {
          //   borderColor: colors.primary,
          // },
        },
      },

      disabled: {
        input: {
          borderColor: colors.coldgrey300,
          backgroundColor: colors.coldgrey100,
          cursor: 'not-allowed',
          color: colors.coldgrey500,
        },

        label: {
          color: colors.coldgrey500,
        },
      },

      error: {
        input: {
          borderColor: colors.danger,
        },
      },

      success: {
        input: {
          borderColor: colors.success,
        },
      },
    },

    size: {
      xs: {
        input: {
          padding: '5px 7px',
        },
      },

      md: {
        input: {
          padding: '10px 14px',
        },
      },

      lg: {
        input: {
          padding: '14px',
        },
      },
    },
  },

  fonts: {
    // light: 'Nunito Light',
    regular: 'Source Sans Pro',
    // semibold: 'Source Sans Pro SemiBold normal',
    // bold: 'Nunito Bold',
    // extrabold: 'Nunito ExtraBold',
  },

  fontWeightMap: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    semiBold: 600,
    bold: 700,
  },
};
