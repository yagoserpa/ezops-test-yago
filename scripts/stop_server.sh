#!/bin/bash

export PM2_HOME=/root/workspace/ezops-test-yago/.pm2
cd /root/workspace/ezops-test-yago/
pm2 stop --name server npm -- stop
