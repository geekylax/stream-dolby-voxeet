module.exports = {
    extends: ['airbnb-base', 'plugin:prettier/recommended', 'react-app'],
    plugins: ['prettier'],
    rules: {
        'class-methods-use-this': 0,
        'import/no-extraneous-dependencies': 'off',
        'consistent-return': 0,
        'no-underscore-dangle': 0,
        'no-case-declarations': 0,
        'no-await-in-loop': 1,
        'import/prefer-default-export': 0,
        'func-names': 0,
        camelcase: 0,
        'no-param-reassign': 0,
        'no-shadow': 0,
        'no-unused-vars': ['error', { args: 'none' }],
    },
    settings: {
        'import/resolver': {
            node: {
                paths: 'src',
            },
        },
    },
};
