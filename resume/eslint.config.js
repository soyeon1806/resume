import { FlatCompat } from '@eslint/eslintrc';
import babelParser from '@babel/eslint-parser';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-config-prettier';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default defineConfig([
    {
        ignores: ['dist/**'],
        files: ['**/*.{js,jsx,mjs,cjs}'],
        plugins: {
            js,
            react: pluginReact,
        },
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                babelOptions: {
                    plugins: ['@babel/plugin-syntax-jsx'],
                },
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
        extends: [
            ...compat.extends('plugin:react/recommended'), // ✅ 핵심
            'js/recommended',
        ],
    },
    prettier,
]);
