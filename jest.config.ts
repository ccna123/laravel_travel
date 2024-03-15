import type { Config } from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve("./resources/test/file-mock.ts"),
        "\\.(css|less)$": require.resolve("./resources/test/style-mock.ts"),
    },
    moduleDirectories: ["node_modules"],

};
export default config;