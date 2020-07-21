#/usr/bin/bash
COMMIT_ID=${1}

GITHUB_API_URL=${GITHUB_API_URL:-'https://api.github.com'}
MERGE_API_URL="${GITHUB_API_URL}/repos/${SERVICE_NAME}/merges"

POST_DOC="{\"base\":\"master\",\"head\":\"${COMMIT_ID}\"}"

# merge the commit ID to master
RESP_CODE=$(curl -sS -L -d "${POST_DOC}" -X POST "${MERGE_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}" -o /dev/null -w "%{http_code}")

if [[ "x${RESP_CODE}" != "x201" ]]; then
	echo "Request: curl -sS -L -d \"${POST_DOC}\" -X POST \"${MERGE_API_URL}?access_token=${GITHUB_OAUTH_TOKEN}\""
	echo "Response code: ${RESP_CODE}"
	echo "Expected response code: 201"
	exit 1
fi
