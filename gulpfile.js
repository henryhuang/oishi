/**
 * Created by Henry Huang on 11/27/16.
 */
'use strict'

const gulp = require('gulp');
const fs = require('fs');

gulp.task('lang', function () {
    let dir = './languages/';
    fs.readdir(dir, (err, files) => {
        files.forEach((file) => {
            if (file != 'default.yml') {
                // check the files name
                if (!/^[a-z]+\-[A-Z]+.yml$/g.test(file.trim())) {
                    console.log(dir + file + ' \'s name is not normal, please according to http://www.lingoes.net/en/translator/langcode.htm');
        process.exit(1);
    }
}
});
    });
});

gulp.task('build', ['lang']);