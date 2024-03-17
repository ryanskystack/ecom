globalThis.global = globalThis;

// Jest setup file
jest.mock('*.svg', () => {
    return () => 'SvgComponent';
});