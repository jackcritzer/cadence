#!/bin/bash

# Load all SSM parameters under /cadence/ and export as environment variables
export $(aws ssm get-parameters-by-path \
  --path "/cadence/" \
  --with-decryption \
  --query "Parameters[*].[Name,Value]" \
  --output text | sed 's|/cadence/||' | awk '{print $1 "=" $2}')

# Start your app
npm run start
