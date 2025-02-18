import postcssImport from 'postcss-import';
import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';
import autoprefixer from 'autoprefixer';
import postcssUtopia from 'postcss-utopia';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    postcssImport,
    postcssNesting,
    postcssCustomMedia,
    autoprefixer,
    postcssUtopia,
    cssnano({ preset: 'default' }),
    // purgecss({
    //   content: [
    //     './craft/templates/**/*.twig',
    //   ],
    //   safelist: {
    //     deep: [/^data-|^js-|^has-|^is-|^c-carbon|^b-/],
    //   }
    // }),
  ]
}