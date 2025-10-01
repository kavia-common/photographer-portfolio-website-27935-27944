#!/bin/bash
cd /home/kavia/workspace/code-generation/photographer-portfolio-website-27935-27944/photographer_website_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

