const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const DECORATOR_PATH = path.join(__dirname, './decorators');

module.exports = ({ config }) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        include: [SRC_PATH, DECORATOR_PATH],
        use: [
            {
                loader: require.resolve('awesome-typescript-loader'),
                options: {
                    enforce: 'pre',
                    configFileName: './.storybook/tsconfig.json',
                },
            },
        ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
