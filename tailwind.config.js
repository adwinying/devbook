module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '3xs'       : '12rem',
      '2xs'       : '16rem',
      'xs'        : '20rem',
      'sm'        : '24rem',
      'md'        : '28rem',
      'lg'        : '32rem',
      'xl'        : '36rem',
      '2xl'       : '42rem',
      '3xl'       : '48rem',
      '4xl'       : '56rem',
      '5xl'       : '64rem',
      '6xl'       : '72rem',
      '7xl'       : '80rem',
      'full'      : '100%',
      'min'       : 'min-content',
      'max'       : 'max-content',
      'prose'     : '65ch',
      'screen-sm' : '640px',
      'screen-md' : '768px',
      'screen-lg' : '1024px',
      'screen-xl' : '1280px',
      'screen-2xl': '1536px',
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    },
  },
  plugins: [],
}
