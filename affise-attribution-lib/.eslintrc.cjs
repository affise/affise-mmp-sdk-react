module.exports = {
    root: true,
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react',
        'react-native'
    ],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'semi': 'off',
                '@typescript-eslint/semi': 'warn',
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                '@typescript-eslint/no-inferrable-types': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-empty-function': 'off',
            },
        },
        {
            files: ['*.js', '*.jsx'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'no-undef': 'off',
            },
        },
    ],
};
