import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        script: `${buildFolder}/script/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/assets/images/`,
        fonts: `${buildFolder}/assets/fonts/`,
        html: `${buildFolder}/`,
        assets: `${buildFolder}/assets`,
    },
    src: {
        script: `${srcFolder}/script/main.js`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,ico,gif,wepb}`,
        svg: `${srcFolder}/assets/images/**/*.svg`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.pug`,
        assets: `${srcFolder}/assets/**/*.*`,
        svgIcons: `${srcFolder}/assets/images/svgicons/*.svg`,
    },
    watch: {
        script: `${srcFolder}/script/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        images: `${srcFolder}/assets/images/**/*.{jpg,jpeg,png,ico,gif,wepb,svg}`,
        html: `${srcFolder}/**/*.pug`,
        assets: `${srcFolder}/assets/**/*.*`,
    },
    clean: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ""
}