#!/bin/bash
yum update -y && yum install -y gcc gcc-c++ make openssl-devel git && curl --silent --location https://rpm.nodesource.com/setup_10.x | bash - && yum install -y nodejs && npm install pm2@latest -g
