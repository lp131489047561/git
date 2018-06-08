//使用gulp包
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');


gulp.task('sass', () =>
    gulp.src('./sass/shop-cart.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
);

gulp.task('gengxin', () => {
    // 开启服务器
    browserSync({
        server: '../src',
        // 代理服务器
        //proxy:'http://localhost:10086',
        // d代理端口
        port: 1803,
        files: ['./sass/shop-cart.scss','./html/shop-cart.html']
    });

    // 监听sass文件修改
    gulp.watch('./sass/shop-cart.scss',['sass']);
    gulp.watch('./html/shop-cart.html');
});

//执行任务
gulp.task('default',['sass','gengxin']);