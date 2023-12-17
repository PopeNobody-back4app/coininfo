#!/bin/bash
cd $(dirname "${BASH_SOURCE}")
set -xv;
source session.sh
echo "session: $PARSE_SESSION"
curl -X GET \
  -H "X-Parse-Application-Id: coininfo" \
  -H "X-Parse-REST-API-Key: coininfo.restKey" \
  -H "X-Parse-Session-Token: $PARSE_SESSION" \
  http://localhost:1337/parse/users
