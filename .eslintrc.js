module.exports = {
    root: true,
    extends: ["@react-native-community", "rallycoding", "prettier"],
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "object-curly-spacing": ["error", "always", { objectsInObjects: true }],
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/require-extension": "off",
    },
};
