#! /bin/bash

# Create directory

mkdir -p lambda-layer/nodejs

# copy the dependencies
cp ../package.json lambda-layer/nodejs

## install dependecies

cd lambda-layer/nodejs

npm i