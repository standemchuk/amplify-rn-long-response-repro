module.exports = {
  resolver: {
    resolverMainFields: ['react-native', 'browser', 'main'],
    extraNodeModules: {
      // Polyfills for node libraries
      // crypto: require.resolve('react-native-crypto'),
      // stream: require.resolve('stream-browserify'),
      // vm: require.resolve('vm-browserify'),
    },
  }
}
