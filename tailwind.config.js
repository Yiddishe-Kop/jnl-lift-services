module.exports = {
  purge: [
    '**.html',
    '**.css',
  ],
  theme: {
    extend: {},
  },
  variants: {
    backgroundOpacity: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}
