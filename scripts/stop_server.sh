#!/bin/bash
PID=$(ps -fuxa | grep server | grep -v auto | awk '{print $2}')
if [ -z $PID ];then
	kill -9 $PID
fi
