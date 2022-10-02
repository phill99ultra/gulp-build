import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets`,
    },
    src: {
        // html: `${srcFolder}/*.html`,
        html: `${srcFolder}/*.pug`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    watch: {
        // html: `${srcFolder}/**/*.html`,
        html: `${srcFolder}/**/*.pug`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ""
}