export default [
    {
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: {
                // ブラウザ環境のグローバル変数
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                // Node.js環境のグローバル変数
                process: 'readonly',
                Buffer: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                global: 'readonly'
            }
        },
        rules: {
            'indent': ['error', 2],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': 'error'
        }
    }
];
