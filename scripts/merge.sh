#!/bin/bash

LKG_TAG_PREFIX="Release"
LCC_TAG_PREFIX="LCC"

cd $GITHUB_WORKSPACE

# checkout DEVELOP_BRANCH
git config user.email "${GITHUB_ACTOR}@nutanix.com"
git config user.name "${GITHUB_ACTOR}"
git fetch --all
git checkout ${DEVELOP_BRANCH}

# find the most recent commit with LCC tag
MOST_RECENT_TAGGED=$(git for-each-ref --sort='-*committerdate' --format='%(refname:short) %(*objectname)' refs/tags/${LCC_TAG_PREFIX}*)
line=($MOST_RECENT_TAGGED)
LCC_TAG=${line[0]}
COMMIT=${line[1]}

echo "Most Recent LCC TAG and Commit : ${LCC_TAG}, ${COMMIT}"

# check if already LKGed
ALL_TAGS=$(git tag --contains ${COMMIT})
readarray -t ARRAY_ALL_TAGS <<< "$ALL_TAGS"
if [[ " ${ARRAY_ALL_TAGS[@]:0:7} " =~ "${LKG_TAG_PREFIX}" ]]; then
  echo "Already LKGed"
  exit 0
fi

# merge DEVELOP_BRANCH to master
git rebase master
git checkout master
git merge ${DEVELOP_BRANCH} ${COMMIT}
git push origin master

# add LKG tag to DEVELOP_BRANCH
scripts/add_tag.sh ${COMMIT} "${LKG_TAG_PREFIX}${LCC_TAG:3}"
