#!/usr/bin/env bash


set -e

unzip $1

mv swim-pace-clock/dist/* .
mv swim-pace-clock/src/* src

rm -rf swim-pace-clock