"use strict";

const { merge } = require("webpack-merge");
const Common = require("./webpack.common");

module.exports = merge(Common, {
	mode: "development",
	devtool: "inline-source-map",
	devtool: "source-map",
});
