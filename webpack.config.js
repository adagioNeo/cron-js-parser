
var webpack = require("webpack");
const TerserJsPlugin = require("terser-webpack-plugin");
var libraryName = require("./package.json").name;

var entryPoints = {
    [libraryName + '.quartz']: "./src/quartz-scheduler/parser/parser.ts",
    [libraryName + ".quartz.min"]: "./src/quartz-scheduler/parser/parser.ts"
};

module.exports = [
    {
        mode: "production",
        entry: entryPoints,
        output: {
            path: __dirname + "/dist",
            filename: "[name].js",
            library: libraryName,
            libraryTarget: "umd",
            umdNamedDefine: true,
            globalObject: "globalThis",
        },
        resolve: {
            extensions: [".js", ".ts"],
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserJsPlugin({
                    include: /\.min\.js$/,
                }),
            ],
        },
    }
];