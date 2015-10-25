echo 'cleaning out dist directory'

rm -rf dist/*.html
rm -rf dist/partials/*.html
rm -rf dist/js/*.js
rm -rf dist/css/*.css


echo 'rebuilding dist directory'
cp src/*.html dist/
cp src/partials/*.html dist/partials/
cp src/js/*.js dist/js/
node-sass src/scss/main.scss dist/css/main.css

echo 'done - check to make sure the site works before deploying!!!'
