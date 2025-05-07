// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 1440,
            unitPrecision: 5,
            propList: ['width', 'height', 'top', 'right', 'bottom', 'left', 'margin', 'padding', 'gap', 'border-radius', 'font-size', 'line-height', 'margin-block-start', 'margin-block-end', 'margin-inline-start', 'margin-inline-end', 'padding-block-start', 'padding-block-end', 'padding-inline-start', 'padding-inline-end'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            exclude: [/node_modules/],
        },
    },
}
