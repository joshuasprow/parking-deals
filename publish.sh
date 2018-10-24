#!/bin/bash

# I need to figure out how to make this work on Windows

# Create new deployment
now

# Store deployment url in variable
DEPLOY_ID="$(pbpaste)"

# Alias doployment to fancy url
now alias $DEPLOY_ID tappflylansing.com
