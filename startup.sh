#!/bin/bash

echo "Copying .npmrc-example into .npmrc"
cp /var/code/.npmrc-example /var/code/.npmrc

echo "Removing node_modules"
rm -r node_modules
  
echo "Installing dependencies"
npm install
  
echo "Startup commands are completed successfully"
bash
