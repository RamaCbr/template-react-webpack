"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.tsx",
	context: path.resolve(__dirname),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "/",
		assetModuleFilename: "assets/[hash][ext][query]",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
							sourceMap: true,
						},
					},
					{ loader: "postcss-loader", options: { sourceMap: true } },
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { sourceMap: true } },
					{ loader: "postcss-loader", options: { sourceMap: true } },
				],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./index.html" }),
		new MiniCssExtractPlugin(),
	],
};
