#!/bin/bash

cd $GITHUB_WORKSPACE
git config user.email "${GITHUB_ACTOR}@nutanix.com"
git config user.name "${GITHUB_ACTOR}"
git fetch --all

git checkout ${DEVELOP_BRANCH}

# most recent commit with LCC tag
MOST_RECENT_TAGGED=$(git for-each-ref --sort='-*committerdate' --format='%(refname:short) %(*objectname)' refs/tags/LCC*)
line=($MOST_RECENT_TAGGED)
TAG=${line[0]}
COMMIT=${line[1]}

echo "Most Recent LCC Commit : ${COMMIT}"

ALL_TAGS=$(git tag --contains ${COMMIT})
readarray -t ARRAY_ALL_TAGS <<< "$ALL_TAGS"

if [[ " ${ARRAY_ALL_TAGS[@]:0:3} " =~ "LKG" ]]; then
  echo "Already LKGed"
  exit 0
fi

git rebase master
git checkout master
git merge ${DEVELOP_BRANCH}
git push origin master

scripts/add_tag.sh ${COMMIT} "LKG-"$(date +"%s")
