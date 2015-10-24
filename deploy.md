cp src/*.html dist/                               cp src/scss/*.scss dist/scss/
node-sass dist/scss/main.scss dist/css/main.css
rm -rf dist/scss/
cp src/js/*.js dist/js/ 
