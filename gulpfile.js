var gulp = require("gulp");
var { plugin } = require("@sactory/dev");

gulp.task("dist", plugin("select2", ["Select2"]));
