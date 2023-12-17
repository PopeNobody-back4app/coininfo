curl -X POST \
  -H "X-Parse-Application-Id: coininfo" \
  -H "X-Parse-REST-API-Key: coininfo.restKey" \
  -H "X-Parse-Revocable-Session: 1" \
  -H "Content-Type: application/json" \
  -d '{"email": "coininfo@copblock.app"}' \
  http://localhost:1337/parse/verificationEmailRequest
