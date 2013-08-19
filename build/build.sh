node r.js -o ./app.build.js
cd ../dist
mv ./js/lib/requirejs/require.js ./js/require.js
rm -rf ./build
rm -rf ./js/lib
rm -rf ./js/app
rm -rf ./build.txt
rm -rf ./getGlue-Backbone-requirejs
