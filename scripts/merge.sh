#!/bin/bash

set -eo pipefail

LKG_TAG_PREFIX="Release"
LCC_TAG_PREFIX="RC"

cd $GITHUB_WORKSPACE

# checkout DEVELOP_BRANCH
git config user.email "${GITHUB_ACTOR}@nutanix.com"
git config user.name "${GITHUB_ACTOR}"
git fetch --all
git checkout ${DEVELOP_BRANCH}

# find the most recent commit with LCC tag
MOST_RECENT_TAGGED=$(git for-each-ref --sort='-*committerdate' --format='%(refname:short) %(objectname)' refs/tags/${LCC_TAG_PREFIX}*)
line=($MOST_RECENT_TAGGED)
LCC_TAG=${line[0]}
COMMIT=${line[1]}

if [[ "x${COMMIT}" == "x" ]]; then
	echo "No commit with tag prefix ${LCC_TAG_PREFIX} found"
  exit 1
fi

echo "Most Recent LCC TAG and Commit : ${LCC_TAG}, ${COMMIT}"

# check if already LKGed
ALL_TAGS=$(git tag --contains ${COMMIT})
readarray -t ARRAY_ALL_TAGS <<< "$ALL_TAGS"
if [[ " ${ARRAY_ALL_TAGS[@]:0:7} " =~ "${LKG_TAG_PREFIX}" ]]; then
  echo "Already LKGed"
  exit 0
fi

# merge DEVELOP_BRANCH to master
scripts/merge_to_master.sh ${COMMIT}

# add LKG tag to DEVELOP_BRANCH
TAG_STR="${LKG_TAG_PREFIX}${LCC_TAG:2}"
scripts/add_tag.sh  ${COMMIT} ${TAG_STR}