// postcss.config.js
module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 1440,
            unitPrecision: 5,
            propList: ['width', 'height', 'top', 'right', 'bottom', 'left', 'margin', 'padding'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            exclude: [/node_modules/],
        },
    },
}
