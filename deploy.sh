rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:zl454/kirin-ui-website.git &&
git push -f -u origin master &&
cd -
echo https://zl454.github.io/kirin-ui-website/index.html

