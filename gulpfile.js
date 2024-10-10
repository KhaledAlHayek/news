const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const multiDest = require('gulp-multi-dest');

const build = () => {
  return src("assets/layout/sass/**/*.sass")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(multiDest(["assets/layout/css/", "upload/"]))
}

const reBuild = () => {
  return watch("assets/layout/sass/**/*.sass", build);
}

exports.default = series(build, reBuild);