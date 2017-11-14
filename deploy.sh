#!/bin/sh
npm run build
git add .
cp CNAME out/CNAME
git commit -m "update out folder"
git subtree push --prefix out origin master
