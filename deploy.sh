#!/bin/sh
npm run build
cp CNAME out/CNAME
git add .
git commit -m "update out folder"
git subtree push --prefix out origin master
