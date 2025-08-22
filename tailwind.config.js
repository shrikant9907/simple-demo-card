module.exports = {
  theme: {
    extend: {
      colors: {
        brandPink: '#ff0066',
        brandRed: '#b00620',
      },
    },
  },
  experimental: {
    optimizeUniversalDefaults: true, // avoids modern oklch fallbacks
  },
}
