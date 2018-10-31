#!/bin/sh
git fetch origin
git config --list --local
git log --oneline --graph --decorate
git reset --hard origin/master
git push origin master:1.x --force
echo ' --- Status  => '$(date)  >> glissMe.md
git commit -am $(date "+%H:%M + version" )
git push github master:$(date "+%H-%M")
git checkout

