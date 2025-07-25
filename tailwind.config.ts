import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import tailwindcssAnimate from 'tailwindcss-animate';


export const widths = {
  '12': '0.75rem',
  '13': '0.8125rem',
  '13.5': '0.84375remrem',
  '32': '2rem',
  '40': '2.5rem',
  '196': '12.25rem',
  '14.25': '0.890625rem',
  '107': '6.6875rem',
  '191': '11.9375rem',
  '454': '28.375rem',
  '240': '15rem',
  '824': '51.5rem',
  '880': '55rem',
  '1200': '75rem',
  '10': '2.5rem',
  '20': '5rem',
  '15.4': '0.9625rem',
  '752': '47rem',
  '760': '47.5rem',
  '48': '3rem',
} as unknown as Record<string, string>;

export const paddingTop = {
  '14': '0.875rem',
}
export const padding = {
  '10': '0.625rem',
}
export const paddingBottom = {
  '14': '0.875rem',
  '8': '0.5rem',
} as unknown as Record<string, string>;

export const minWidths = {
  '240': '15rem',
  '196': '12.25rem',
  '310': '19.375rem',
} as unknown as Record<string, string>;

export const heights = {
  '12': '0.75rem',
  '13': '0.8125rem',
  '224': '14rem',
  '14.25': '0.890625rem',
  '32': '2rem',
  '24': '1.5rem',
  '40': '2.5rem',
  '60': '3.75rem',
  '56': '3.5rem',
  '172': '10.75rem',
  '240': '15rem',
  '310': '19.375rem',
  '550': '34.375rem',
  '107': '6.6875rem',
  '560': '35rem',
  '196': '12.25rem',
  '464': '29rem',
  '880': '55rem',
  '15.4': '0.9625rem',
  '20': '1.25rem',
  '10': '2.5rem',
  '48': '3rem',
} as unknown as Record<string, string>;

export const texts = {
  'title-h1': [
    '3.5rem',
    {
      lineHeight: '4rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h2': [
    '3rem',
    {
      lineHeight: '3.5rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h3': [
    '2.5rem',
    {
      lineHeight: '3rem',
      letterSpacing: '-0.01em',
      fontWeight: '500',
    },
  ],
  'title-h4': [
    '2rem',
    {
      lineHeight: '2.5rem',
      letterSpacing: '-0.005em',
      fontWeight: '500',
    },
  ],
  'title-h5': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'title-h6': [
    '1.25rem',
    {
      lineHeight: '1.75rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'label-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'label-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '500',
    },
  ],
  'label-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '500',
    },
  ],
  'label-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '500',
    },
  ],
  'paragraph-xl': [
    '1.5rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-lg': [
    '1.125rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
  'paragraph-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '-0.011em',
      fontWeight: '400',
    },
  ],
  'paragraph-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '-0.006em',
      fontWeight: '400',
    },
  ],
  'paragraph-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0em',
      fontWeight: '400',
    },
  ],
  'subheading-md': [
    '1rem',
    {
      lineHeight: '1.5rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-sm': [
    '.875rem',
    {
      lineHeight: '1.25rem',
      letterSpacing: '0.06em',
      fontWeight: '500',
    },
  ],
  'subheading-xs': [
    '.75rem',
    {
      lineHeight: '1rem',
      letterSpacing: '0.04em',
      fontWeight: '500',
    },
  ],
  'subheading-2xs': [
    '.6875rem',
    {
      lineHeight: '.75rem',
      letterSpacing: '0.02em',
      fontWeight: '500',
    },
  ],
  'doc-label': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '500',
    },
  ],
  'doc-paragraph': [
    '1.125rem',
    {
      lineHeight: '2rem',
      letterSpacing: '-0.015em',
      fontWeight: '400',
    },
  ],
} as unknown as Record<string, string>;

export const shadows = {
  'regular-xs': '0 1px 2px 0 #0a0d1408',
  'regular-sm': '0 2px 4px #1b1c1d0a',
  'regular-md': '0 16px 32px -12px #0e121b1a',
  'button-primary-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.primary[alpha-10])',
  ],
  'button-important-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.neutral[alpha-16])',
  ],
  'button-error-focus': [
    '0 0 0 2px theme(colors.bg[white-0])',
    '0 0 0 4px theme(colors.red[alpha-10])',
  ],
  'fancy-buttons-neutral': ['0 1px 2px 0 #1b1c1d7a', '0 0 0 1px #242628'],
  'fancy-buttons-primary': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px theme(colors.primary[base])',
  ],
  'fancy-buttons-error': [
    '0 1px 2px 0 #0e121b3d',
    '0 0 0 1px theme(colors.error[base])',
  ],
  'fancy-buttons-stroke': [
    '0 1px 3px 0 #0e121b1f',
    '0 0 0 1px theme(colors.stroke[soft-200])',
  ],
  'toggle-switch': ['0 6px 10px 0 #0e121b0f', '0 2px 4px 0 #0e121b08'],
  'switch-thumb': ['0 4px 8px 0 #1b1c1d0f', '0 2px 4px 0 #0e121b14'],
  tooltip: ['0 12px 24px 0 #0e121b0f', '0 1px 2px 0 #0e121b08'],
  'custom-xs': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 4px 8px -2px rgba(51, 51, 51, 0.06)',
    '0 2px 4px rgba(51, 51, 51, 0.04)',
    '0 1px 2px rgba(51, 51, 51, 0.04)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
  'custom-sm': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 16px 8px -8px rgba(51, 51, 51, 0.01)',
    '0 12px 6px -6px rgba(51, 51, 51, 0.02)',
    '0 5px 5px -2.5px rgba(51, 51, 51, 0.08)',
    '0 1px 3px -1.5px rgba(51, 51, 51, 0.16)',
    'inset 0 -0.5px 0.5px rgba(51, 51, 51, 0.08)',
  ],
  'custom-md': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 1px 1px 0.5px rgba(51, 51, 51, 0.04)',
    '0 3px 3px -1.5px rgba(51, 51, 51, 0.02)',
    '0 6px 6px -3px rgba(51, 51, 51, 0.04)',
    '0 12px 12px -6px rgba(51, 51, 51, 0.04)',
    '0 24px 24px -12px rgba(51, 51, 51, 0.04)',
    '0 48px 48px -24px rgba(51, 51, 51, 0.04)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
  'custom-lg': [
    '0 0 0 1px rgba(51, 51, 51, 0.04)',
    '0 1px 1px 0.5px rgba(51, 51, 51, 0.04)',
    '0 3px 3px -1.5px rgba(51, 51, 51, 0.02)',
    '0 6px 6px -3px rgba(51, 51, 51, 0.04)',
    '0 12px 12px -6px rgba(51, 51, 51, 0.04)',
    '0 24px 24px -12px rgba(51, 51, 51, 0.04)',
    '0 48px 48px -24px rgba(51, 51, 51, 0.04)',
    '0 96px 96px -32px rgba(51, 51, 51, 0.06)',
    'inset 0 -1px 1px -0.5px rgba(51, 51, 51, 0.06)',
  ],
} as unknown as Record<string, string>;

export const borderRadii = {
  '10': '.625rem',
  '20': '1.25rem',
  '16': '1rem',
} as unknown as Record<string, string>;

export const gaps = {
  '24': '1.5rem',
  '12': '0.75rem',

} as unknown as Record<string, string>;

const config = {
  safelist: ['.dark'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      gray: {
        '0': 'rgb(var(--gray-0))',
        '50': 'rgb(var(--gray-50))',
        '100': 'rgb(var(--gray-100))',
        '200': 'rgb(var(--gray-200))',
        '300': 'rgb(var(--gray-300))',
        '400': 'rgb(var(--gray-400))',
        '500': 'rgb(var(--gray-500))',
        '600': 'rgb(var(--gray-600))',
        '700': 'rgb(var(--gray-700))',
        '800': 'rgb(var(--gray-800))',
        '900': 'rgb(var(--gray-900))',
        '950': 'rgb(var(--gray-950))',
        'alpha-24': 'rgb(var(--gray-alpha-24))',
        'alpha-16': 'rgb(var(--gray-alpha-16))',
        'alpha-10': 'rgb(var(--gray-alpha-10))',
      },
      slate: {
        '0': 'rgb(var(--slate-0))',
        '50': 'rgb(var(--slate-50))',
        '100': 'rgb(var(--slate-100))',
        '200': 'rgb(var(--slate-200))',
        '300': 'rgb(var(--slate-300))',
        '400': 'rgb(var(--slate-400))',
        '500': 'rgb(var(--slate-500))',
        '600': 'rgb(var(--slate-600))',
        '700': 'rgb(var(--slate-700))',
        '800': 'rgb(var(--slate-800))',
        '900': 'rgb(var(--slate-900))',
        '950': 'rgb(var(--slate-950))',
        'alpha-24': 'rgb(var(--slate-alpha-24))',
        'alpha-16': 'rgb(var(--slate-alpha-16))',
        'alpha-10': 'rgb(var(--slate-alpha-10))',
      },
      neutral: {
        '0': 'rgb(var(--neutral-0))',
        '50': 'rgb(var(--neutral-50))',
        '100': 'rgb(var(--neutral-100))',
        '200': 'rgb(var(--neutral-200))',
        '300': 'rgb(var(--neutral-300))',
        '400': 'rgb(var(--neutral-400))',
        '500': 'rgb(var(--neutral-500))',
        '600': 'rgb(var(--neutral-600))',
        '700': 'rgb(var(--neutral-700))',
        '800': 'rgb(var(--neutral-800))',
        '900': 'rgb(var(--neutral-900))',
        '950': 'rgb(var(--neutral-950))',
        'alpha-24': 'rgb(var(--neutral-alpha-24))',
        'alpha-16': 'rgb(var(--neutral-alpha-16))',
        'alpha-10': 'rgb(var(--neutral-alpha-10))',
      },
      blue: {
        '50': 'rgb(var(--blue-50))',
        '100': 'rgb(var(--blue-100))',
        '200': 'rgb(var(--blue-200))',
        '300': 'rgb(var(--blue-300))',
        '400': 'rgb(var(--blue-400))',
        '500': 'rgb(var(--blue-500))',
        '600': 'rgb(var(--blue-600))',
        '700': 'rgb(var(--blue-700))',
        '800': 'rgb(var(--blue-800))',
        '900': 'rgb(var(--blue-900))',
        '950': 'rgb(var(--blue-950))',
        'alpha-24': 'rgb(var(--blue-alpha-24))',
        'alpha-16': 'rgb(var(--blue-alpha-16))',
        'alpha-10': 'rgb(var(--blue-alpha-10))',
      },
      orange: {
        '50': 'rgb(var(--orange-50))',
        '100': 'rgb(var(--orange-100))',
        '200': 'rgb(var(--orange-200))',
        '300': 'rgb(var(--orange-300))',
        '400': 'rgb(var(--orange-400))',
        '500': 'rgb(var(--orange-500))',
        '600': 'rgb(var(--orange-600))',
        '700': 'rgb(var(--orange-700))',
        '800': 'rgb(var(--orange-800))',
        '900': 'rgb(var(--orange-900))',
        '950': 'rgb(var(--orange-950))',
        'alpha-24': 'rgb(var(--orange-alpha-24))',
        'alpha-16': 'rgb(var(--orange-alpha-16))',
        'alpha-10': 'rgb(var(--orange-alpha-10))',
      },
      red: {
        '50': 'rgb(var(--red-50))',
        '100': 'rgb(var(--red-100))',
        '200': 'rgb(var(--red-200))',
        '300': 'rgb(var(--red-300))',
        '400': 'rgb(var(--red-400))',
        '500': 'rgb(var(--red-500))',
        '600': 'rgb(var(--red-600))',
        '700': 'rgb(var(--red-700))',
        '800': 'rgb(var(--red-800))',
        '900': 'rgb(var(--red-900))',
        '950': 'rgb(var(--red-950))',
        'alpha-24': 'rgb(var(--red-alpha-24))',
        'alpha-16': 'rgb(var(--red-alpha-16))',
        'alpha-10': 'rgb(var(--red-alpha-10))',
      },
      green: {
        '50': 'rgb(var(--green-50))',
        '100': 'rgb(var(--green-100))',
        '200': 'rgb(var(--green-200))',
        '300': 'rgb(var(--green-300))',
        '400': 'rgb(var(--green-400))',
        '500': 'rgb(var(--green-500))',
        '600': 'rgb(var(--green-600))',
        '700': 'rgb(var(--green-700))',
        '800': 'rgb(var(--green-800))',
        '900': 'rgb(var(--green-900))',
        '950': 'rgb(var(--green-950))',
        'alpha-24': 'rgb(var(--green-alpha-24))',
        'alpha-16': 'rgb(var(--green-alpha-16))',
        'alpha-10': 'rgb(var(--green-alpha-10))',
      },
      yellow: {
        '50': 'rgb(var(--yellow-50))',
        '100': 'rgb(var(--yellow-100))',
        '200': 'rgb(var(--yellow-200))',
        '300': 'rgb(var(--yellow-300))',
        '400': 'rgb(var(--yellow-400))',
        '500': 'rgb(var(--yellow-500))',
        '600': 'rgb(var(--yellow-600))',
        '700': 'rgb(var(--yellow-700))',
        '800': 'rgb(var(--yellow-800))',
        '900': 'rgb(var(--yellow-900))',
        '950': 'rgb(var(--yellow-950))',
        'alpha-24': 'rgb(var(--yellow-alpha-24))',
        'alpha-16': 'rgb(var(--yellow-alpha-16))',
        'alpha-10': 'rgb(var(--yellow-alpha-10))',
      },
      purple: {
        '50': 'rgb(var(--purple-50))',
        '100': 'rgb(var(--purple-100))',
        '200': 'rgb(var(--purple-200))',
        '300': 'rgb(var(--purple-300))',
        '400': 'rgb(var(--purple-400))',
        '500': 'rgb(var(--purple-500))',
        '600': 'rgb(var(--purple-600))',
        '700': 'rgb(var(--purple-700))',
        '800': 'rgb(var(--purple-800))',
        '900': 'rgb(var(--purple-900))',
        '950': 'rgb(var(--purple-950))',
        'alpha-24': 'rgb(var(--purple-alpha-24))',
        'alpha-16': 'rgb(var(--purple-alpha-16))',
        'alpha-10': 'rgb(var(--purple-alpha-10))',
      },
      sky: {
        '50': 'rgb(var(--sky-50))',
        '100': 'rgb(var(--sky-100))',
        '200': 'rgb(var(--sky-200))',
        '300': 'rgb(var(--sky-300))',
        '400': 'rgb(var(--sky-400))',
        '500': 'rgb(var(--sky-500))',
        '600': 'rgb(var(--sky-600))',
        '700': 'rgb(var(--sky-700))',
        '800': 'rgb(var(--sky-800))',
        '900': 'rgb(var(--sky-900))',
        '950': 'rgb(var(--sky-950))',
        'alpha-24': 'rgb(var(--sky-alpha-24))',
        'alpha-16': 'rgb(var(--sky-alpha-16))',
        'alpha-10': 'rgb(var(--sky-alpha-10))',
      },
      pink: {
        '50': 'rgb(var(--pink-50))',
        '100': 'rgb(var(--pink-100))',
        '200': 'rgb(var(--pink-200))',
        '300': 'rgb(var(--pink-300))',
        '400': 'rgb(var(--pink-400))',
        '500': 'rgb(var(--pink-500))',
        '600': 'rgb(var(--pink-600))',
        '700': 'rgb(var(--pink-700))',
        '800': 'rgb(var(--pink-800))',
        '900': 'rgb(var(--pink-900))',
        '950': 'rgb(var(--pink-950))',
        'alpha-24': 'rgb(var(--pink-alpha-24))',
        'alpha-16': 'rgb(var(--pink-alpha-16))',
        'alpha-10': 'rgb(var(--pink-alpha-10))',
      },
      teal: {
        '50': 'rgb(var(--teal-50))',
        '100': 'rgb(var(--teal-100))',
        '200': 'rgb(var(--teal-200))',
        '300': 'rgb(var(--teal-300))',
        '400': 'rgb(var(--teal-400))',
        '500': 'rgb(var(--teal-500))',
        '600': 'rgb(var(--teal-600))',
        '700': 'rgb(var(--teal-700))',
        '800': 'rgb(var(--teal-800))',
        '900': 'rgb(var(--teal-900))',
        '950': 'rgb(var(--teal-950))',
        'alpha-24': 'rgb(var(--teal-alpha-24))',
        'alpha-16': 'rgb(var(--teal-alpha-16))',
        'alpha-10': 'rgb(var(--teal-alpha-10))',
      },
      white: {
        DEFAULT: '#fff',
        'alpha-24': 'rgb(var(--white-alpha-24))',
        'alpha-16': 'rgb(var(--white-alpha-16))',
        'alpha-10': 'rgb(var(--white-alpha-10))',
      },
      black: {
        DEFAULT: '#000',
        'alpha-24': 'rgb(var(--black-alpha-24))',
        'alpha-16': 'rgb(var(--black-alpha-16))',
        'alpha-10': 'rgb(var(--black-alpha-10))',
      },
      primary: {
        dark: 'rgb(var(--primary-dark))',
        darker: 'rgb(var(--primary-darker))',
        base: 'rgb(var(--primary-base))',
        'alpha-24': 'rgb(var(--primary-alpha-24))',
        'alpha-16': 'rgb(var(--primary-alpha-16))',
        'alpha-10': 'rgb(var(--primary-alpha-10))',
      },
      static: {
        black: 'rgb(var(--static-black))',
        white: 'rgb(var(--static-white))',
      },
      bg: {
        'strong-950': 'rgb(var(--bg-strong-950))',
        'surface-800': 'rgb(var(--bg-surface-800))',
        'sub-300': 'rgb(var(--bg-sub-300))',
        'soft-200': 'rgb(var(--bg-soft-200))',
        'weak-50': 'rgb(var(--bg-weak-50))',
        'white-0': 'rgb(var(--bg-white-0))',
      },
      text: {
        'strong-950': 'rgb(var(--text-strong-950))',
        'sub-600': 'rgb(var(--text-sub-600))',
        'soft-400': 'rgb(var(--text-soft-400))',
        'disabled-300': 'rgb(var(--text-disabled-300))',
        'white-0': 'rgb(var(--text-white-0))',
      },
      stroke: {
        'strong-950': 'rgb(var(--stroke-strong-950))',
        'sub-300': 'rgb(var(--stroke-sub-300))',
        'soft-200': 'rgb(var(--stroke-soft-200))',
        'white-0': 'rgb(var(--stroke-white-0))',
      },
      faded: {
        dark: 'rgb(var(--faded-dark))',
        base: 'rgb(var(--faded-base))',
        light: 'rgb(var(--faded-light))',
        lighter: 'rgb(var(--faded-lighter))',
      },
      information: {
        dark: 'rgb(var(--information-dark))',
        base: 'rgb(var(--information-base))',
        light: 'rgb(var(--information-light))',
        lighter: 'rgb(var(--information-lighter))',
      },
      warning: {
        dark: 'rgb(var(--warning-dark))',
        base: 'rgb(var(--warning-base))',
        light: 'rgb(var(--warning-light))',
        lighter: 'rgb(var(--warning-lighter))',
      },
      error: {
        dark: 'rgb(var(--error-dark))',
        base: 'rgb(var(--error-base))',
        light: 'rgb(var(--error-light))',
        lighter: 'rgb(var(--error-lighter))',
      },
      success: {
        dark: 'rgb(var(--success-dark))',
        base: 'rgb(var(--success-base))',
        light: 'rgb(var(--success-light))',
        lighter: 'rgb(var(--success-lighter))',
      },
      away: {
        dark: 'rgb(var(--away-dark))',
        base: 'rgb(var(--away-base))',
        light: 'rgb(var(--away-light))',
        lighter: 'rgb(var(--away-lighter))',
      },
      feature: {
        dark: 'rgb(var(--feature-dark))',
        base: 'rgb(var(--feature-base))',
        light: 'rgb(var(--feature-light))',
        lighter: 'rgb(var(--feature-lighter))',
      },
      verified: {
        dark: 'rgb(var(--verified-dark))',
        base: 'rgb(var(--verified-base))',
        light: 'rgb(var(--verified-light))',
        lighter: 'rgb(var(--verified-lighter))',
      },
      highlighted: {
        dark: 'rgb(var(--highlighted-dark))',
        base: 'rgb(var(--highlighted-base))',
        light: 'rgb(var(--highlighted-light))',
        lighter: 'rgb(var(--highlighted-lighter))',
      },
      stable: {
        dark: 'rgb(var(--stable-dark))',
        base: 'rgb(var(--stable-base))',
        light: 'rgb(var(--stable-light))',
        lighter: 'rgb(var(--stable-lighter))',
      },
      social: {
        apple: 'rgb(var(--social-apple))',
        twitter: 'rgb(var(--social-twitter))',
        github: 'rgb(var(--social-github))',
        notion: 'rgb(var(--social-notion))',
        tidal: 'rgb(var(--social-tidal))',
        amazon: 'rgb(var(--social-amazon))',
        zendesk: 'rgb(var(--social-zendesk))',
      },
      overlay: {
        DEFAULT: 'rgb(var(--overlay))',
      },
      transparent: 'transparent',
      current: 'currentColor',
    },
    fontSize: {
      ...texts,
      inherit: 'inherit',
    },
    boxShadow: {
      ...shadows,
      none: defaultTheme.boxShadow.none,
    },
    gap: {
      ...gaps,
    },
    width: {
      ...widths,
    },
    minWidth: {
      ...minWidths,
    },
    paddingTop: {
      ...paddingTop,
    },
    paddingBottom: {
      ...paddingBottom,
    },
    padding: {
      ...padding,
    },
    height: {
      ...heights,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      borderRadius: {
        ...borderRadii,
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0', opacity: '0' },
          to: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
            opacity: '1',
          },
          to: { height: '0', opacity: '0' },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
