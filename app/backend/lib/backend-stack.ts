import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

import * as path from "path";
export class BackendStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);


    // const api = new SpecRestApi(this, 'monitoring-api', {
    //   apiDefinition: ApiDefinition.fromAsset('path-to-file.json')
    // });

    // const depsLayer = new lambda.LayerVersion(this, 'nodeDependencies', {
    //   code: lambda.Code.fromAsset('./lambda-handler', {
    //     exclude: ['*', '!package.json', '!package-lock.json'],
    //     bundling: {
    //       image: lambda.Runtime.NODEJS_14_X.bundlingImage,
    //       command: ['bash', '-c', 'mkdir /asset-output/nodejs && cd $_ &&'
    //         + 'cp /asset-input/{package.json,package-lock.json} . &&'
    //         + 'npm ci'],
    //       environment: { HOME: '/tmp/home' },
    //     },
    //   }),
    // });

    const dockerfile = path.join(__dirname, "../");
    // defines an AWS Lambda resource
    const monitorLambda = new lambda.DockerImageFunction(this, 'MonitorApplicationHandler', {
      code: lambda.DockerImageCode.fromImageAsset(dockerfile),
      // layers: [depsLayer]
    });
  }
}
