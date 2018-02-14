rm lambda.zip
zip -r ../lambda.zip lambda
cd ..
aws lambda update-function-code --function-name howMuchChange --zip-file fileb://lambda.zip
