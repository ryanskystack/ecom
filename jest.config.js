module.exports = {
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
    },
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$': '<rootDir>/__mocks__/fileMock.js'
    },
    setupFiles: [
        './jest.setup.js'
    ],
    testEnvironment: 'jsdom-sixteen',
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect'
    ],
    transformIgnorePatterns: [
        '/node_modules/(?!axios).+\\.js$'
    ],
};