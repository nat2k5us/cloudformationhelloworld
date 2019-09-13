 ==> Command to packageto yaml file
 
natrajbontha@natrajs-mbp sam-test-microservice % aws cloudformation package --template-file template.yml --s3-bucket awssamsample --output-template-file packaged-template.yaml
Uploading to 88c6ea1158787408810faa28478b3d0d  6198 / 6198.0  (100.00%)
Successfully packaged artifacts and wrote output template to file packaged-template.yaml.

=>> Execute the following command to deploy the packaged template

aws cloudformation deploy --template-file /Users/natrajbontha/dev/awssampls/sam-test-microservice/packaged-template.yaml --stack-name sam-test-microservice --capabilities CAPABILITY_IAM


==> Clean up (delete cloud formaton)
aws cloudformation delete-stack --stack-name sam-test-microservice
