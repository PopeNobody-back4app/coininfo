curl -X POST \
  -H "X-Parse-Application-Id: coininfo" \
  -H "X-Parse-REST-API-Key: coininfo.restKey" \
  -H "X-Parse-Revocable-Session: 1" \
  -H "Content-Type: application/json" \
  -d '{"username":"nobody","password":"no-password","phone":"603-757-3283"}' \
  http://localhost:1337/parse/users
