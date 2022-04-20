const images = require('@rollup/plugin-image');
const postcss = require('rollup-plugin-postcss');
const ignoreImport = require('rollup-plugin-ignore-import');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      images({ incude: ['**/*.png', '**/*.jpg', '**/*.webp'] }),
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        // inject: false,
        // // only write out CSS for the first bundle (avoids pointless extra files):
        // extract: !!options.writeMeta,
      }),
      ignoreImport({
        // Ignore all .css file imports while building the bundle
        extensions: ['.css'],
        // Optional: replace body for ignored files. Default value is "export default undefined;"
        body: 'export default undefined;',
      })
    );
    return config;
  },
};
