#!/bin/bash

export PM2_HOME=/root/workspace/ezops-test-yago/.pm2
pm2 delete server
cd /root/workspace/ezops-test-yago/
pm2 start --name server npm -- start
