#!/bin/bash

set -eo pipefail

# Adds a tag to a specific "commit".

# usage: ./add-tag <git hash> <tag name> [<message>]

# We will use this API: POST /repos/:owner/:repo/git/tags
# Data needed:
#  * commit_id: The commit id to add a tag
#  * tag:       The tag to be created
#  * message:   The message to be added to the tag. If empty use the tag

# We expect the following ENV vars
#  * GITHUB_API_URL: The URL for the API
#  * SERVICE_NAME: The org/repo to use for the status update
#  * GITHUB_OAUTH_TOKEN: The token to use for the API call

# Expected reponse: 201 (created) with body data for the result.

COMMIT_ID=${1}
TAG="${2}"
MESSAGE="${3:-$TAG}"

GITHUB_API_URL=${GITHUB_API_URL:-'https://api.github.com'}
BLOCK_API_URL="${GITHUB_API_URL}/repos/${SERVICE_NAME}/git/tags"

POST_DOC="{\"tag\":\"${TAG}\",\"message\":\"${MESSAGE}\",\"object\":\"${COMMIT_ID}\",\"type\":\"commit\"}"

# Add a tag object
RESP_CODE=$(curl -sS -L -d "${POST_DOC}" -X POST "${BLOCK_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}" -o /dev/null -w "%{http_code}")
if [[ "x${RESP_CODE}" != "x201" ]]; then
	echo "Request: curl -sS -L -d \"${POST_DOC}\" -X POST \"${BLOCK_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}\""
	echo "Response code: ${RESP_CODE}"
	echo "Expected response code: 201"
	exit 1
fi

# Add a tag reference
BLOCK_API_URL="${GITHUB_API_URL}/repos/${SERVICE_NAME}/git/refs"
POST_DOC="{\"ref\":\"refs/tags/${TAG}\",\"sha\":\"${COMMIT_ID}\"}"
RESP_CODE=$(curl -sS -L -d "${POST_DOC}" -X POST "${BLOCK_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}" -o /dev/null -w "%{http_code}")
if [[ "x${RESP_CODE}" != "x201" ]]; then
	echo "Request: curl -sS -L -d \"${POST_DOC}\" -X POST \"${BLOCK_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}\""
	echo "Response code: ${RESP_CODE}"
	echo "Expected response code: 201"
	exit 1
fi