// Core
import { ContextReplacementPlugin } from 'webpack';
import ImageminWebpackPlugin from 'imagemin-webpack';
import TerserPlugin from 'terser-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import imageminSvgo from 'imagemin-svgo';

export const optimizeBuild = () => ({
    optimization: {
        nodeEnv: 'production',
        minimize:  false,
        minimizer: [ new TerserPlugin() ],
        noEmitOnErrors: true,
        removeEmptyChunks:      true,
        mergeDuplicateChunks:   true,
        removeAvailableModules: true,
        occurrenceOrder:    true,
        concatenateModules: true, // module concatenation, scope hoisting
        providedExports: true,
        usedExports:     true,
        sideEffects:     true,
        // TODO webpack 5 add `moduleIds: "named"` default for development
        // TODO webpack 5 add `moduleIds: "size"` default for production
        // TODO webpack 5 remove optimization.namedModules
        namedModules: false,
        // https://webpack.js.org/configuration/optimization/#optimization-moduleids
        moduleIds:    false,
        // TODO webpack 5 add `chunkIds: "named"` default for development
        // TODO webpack 5 add `chunkIds: "size"` default for production
        // TODO webpack 5 remove optimization.namedChunks
        namedChunks: true,
        // https://webpack.js.org/configuration/optimization/#optimization-chunkids
        chunkIds:    false,
        // initial chunk (vedors — react, react-dom)
        // async chunk (on demond)
        splitChunks: {
            chunks:                 'all', // initial, all (async + initial)
            minSize:                30000, // bytes
            maxSize:                0,
            minChunks:              1,
            maxAsyncRequests:       5,
            maxInitialRequests:     3,
            automaticNameDelimiter: '~',
            name:                   true,
            cacheGroups:            {
                vendors: {
                    test:     /[\\/]node_modules[\\/]/,
                    priority: -10,
                },
                default: {
                    minChunks:          2,
                    priority:           -20,
                    reuseExistingChunk: true,
                },
            },
        },
        runtimeChunk: true,
    },
});

export const optimizeImages = () => ({
    plugins: [
        new ImageminWebpackPlugin({
            imageminOptions: {
                plugins: [
                    imageminMozjpeg({
                        progressive: true,
                        quality:     60,
                    }),
                    imageminPngquant({
                        quality: 60,
                    }),
                    imageminSvgo(),
                ],
            },
        }),
    ],
});

export const filterMomentLocales = () => ({
    plugins: [ new ContextReplacementPlugin(/moment\/locale$/, /(en)/) ],
});
