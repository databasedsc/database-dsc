#!/bin/bash

cd server/dsc-db-be
echo 'CF Download start'
wget https://s3.amazonaws.com/go-cli/releases/v6.12.4/cf-cli_amd64.deb -qO temp.deb && sudo dpkg -i temp.deb
echo 'CF DONE - STARTING DEPLOY'
echo $CF_EMAIL $CF_PWD
cf api https://api.run.pivotal.io
cf auth $CF_EMAIL $CF_PWD
cf target TechIreland
cf push

cf logout
