node r.js -o ./app.build.js
cd ../dist
rm -rf ./build
mv ./js/lib/requirejs/require.js ./require.js
find ./js/lib/* ! -iname requirejs -print0 | xargs -0 rm -rf
rm -rf ./js/app
rm -rf ./build.txt
rm -rf ./getGlue-Backbone-requirejs
mv ./require.js ./js/lib/requirejs/require.js
