#!/bin/bash

POST_DATA=`cat << EOF
payload={
  "attachments": [
    {
      "fallback": "${TEXT}",
      "color": "#36a64f",
      "pretext": "${TEXT}",
      "fields": [
        {
          "title": "App name",
          "value": "${APP_NAME}",
          "short": false
        },
        {
          "title": "URL",
          "value": "${APP_URL}",
          "short": false
        }
      ],
      "ts": 123456789
    }
  ]
}
EOF`
curl -X POST --data-urlencode "${POST_DATA}" ${SLACK_API}