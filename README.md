# Web App Promo Page - *ATNSAYSDONT*

Developed by [Etienne P Jacquot](mailto:jacquot.etienne@gmail.com) (2022)

- Web app promo page for my [Soundcloud](https://soundcloud.com/etienne-jacquot) content, etc: [http://saysdont.ejacquot.com](http://saysdont.ejacquot.com)

## Overview

We probably want to use *Terraform* to deploy this simple web app infrastructure, right? And we can use *git* and *eb* to version & deploy the latest promo page ideas.

> ⚠️ **Update Terraform with AWS Named Profile:** in the [main.tf](./main.tf) aws required-provider resource, edit the **profile** value based on your `~/.aws/credentials` (see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)). 
> - For details on Elastic Beanstalk policies, see [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html)

- Try the following for a simple eb deployment,

    ```bash
    # clone the simple web app repo
    git clone atnsaysdont
    cd atnsaysdont/

    ## deploy your eb infra
    # create your environment on AWS
    terraform init
    terraform apply
    
    # wait for it to go live...
    eb list --all --verbose --profile=atn-developer

    ## deploy your eb code
    # check configs
    eb init -i --profile=atn-developer

    # confirm configs
    eb status --profile=atn-developer

    # deploy to environment
    eb deploy --profile=atn-developer
    ```
    
______

## Developement

- Demo for a simple **React** [single-page app](https://reactjs.org/docs/glossary.html#single-page-application)

    - To test local npm changes (http://localhost:3000):

        ```bash
        npm run start-local
        ```

- Deployed on **AWS** [Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) 

> ⚠️ Use an **AWS IAM Role** (see [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/home)) for AWS **ElasticBeanstalkAdminister** & **Route53FullAccess** as named profile `[atn-developer]` in `~/.aws/credentials` config.

> some errors for npm install on ec2 `t4g.nano` or `t4g.micro`, cheapest is `t4g.small`. See details at [https://aws.amazon.com/ec2/instance-types/t4/](https://aws.amazon.com/ec2/instance-types/t4/)