echo ">> deleting actual ormconfig.json"
unlink ormconfig.json

echo ">> deleting node_modules"
rm -r node_modules

echo ">> deleting coverage"
rm -r coverage

echo ">> deleting package-lock.json"
unlink package-lock.json

echo ">> deleting yarn.lock"
unlink yarn.lock

echo ">> deleting old build"
rm -r build

if [ $1 = "dev" ]; then
  echo ">> Starting development configuration"

  echo ">> copying ormconfig-dev.json"
  cp -r scripts/ormconfig-dev.json  ./

  echo "rename ormconfig-dev.json to ormconfig.json"
  mv ormconfig-dev.json ormconfig.json

  echo ">> install dependencies"
  yarn

  echo ">> start server"
  yarn dev:server

else
  echo ">> Starting production configuration"

  echo ">> copying ormconfig-prod.json"
  cp -r scripts/ormconfig-prod.json  ./

  echo ">> rename ormconfig-prod.json to ormconfig.json"
  mv ormconfig-prod.json ormconfig.json

  echo ">> install dependencies"
  npm install

  echo ">> build application"
  npm run build
fi