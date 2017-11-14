#!/bin/sh
npm run build
cp CNAME out/CNAME
git add .
git commit -m "deploy"
git subtree push --prefix out origin master
