module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/menu',
            permanent: true,
          },
        ]
      },
  }