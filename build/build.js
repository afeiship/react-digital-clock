import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactDigitalClock'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    '@feizheng/next-date': '@feizheng/next-date',
    '@feizheng/react-digital-numeric': '@feizheng/react-digital-numeric'
  }),
  plugins: [
    plugins.clean(),
    plugins.copyStyles()
  ]
});
