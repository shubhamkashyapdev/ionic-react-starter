# React vite with ionic Yarn

#### first add follwing in ./vite.config.ts

    build: {
        outDir: './build'
    }

#### change default ionic npmclinet to yarn

    ionic config set -g npmClient yarn

#### add android platform

    ionic cap add android

#### make build and sync with android

    yarn vite:build && npx cap sync

#### open android studio to make build

    ionic cap open android
