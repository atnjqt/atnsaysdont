# Web App Promo Page - *ATNSAYSDONT*

Developed by [Etienne P Jacquot](mailto:jacquot.etienne@gmail.com) (2022)

## *Update on Deployment* 

We probably want to use Terraform to deploy this simple web app, right?

- Try the following for a simple eb deployment, see [main.tf](./main.tf)

    > make sure to set your required-provider named **profile** in `~/.aws/credentials`

    ```bash
    terraform init

    terraform apply
    
    # wait for it to go live
    eb list --all --verbose --profile=atn-developer
    ```
______

## Overview

- Web app promo page for my Soundcloud content, etc: [http://saysdont.ejacquot.com](http://saysdont.ejacquot.com)

- Demo for a simple **React** [single-page app](https://reactjs.org/docs/glossary.html#single-page-application)


    - To test local npm changes (http://localhost:3000):

        ```bash
        npm run start-local
        ```

- Deployed on **AWS** [Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) 


## Getting Started

Manually create your environment in AWS Console [here](https://us-east-1.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/application/overview?applicationName=atnsaysdont).


- To deploy new app version for `Atnsaysdont-env`:

    ```bash
    # check configs
    eb init -i --profile=atn-developer

    # confirm configs
    eb status --profile=atn-developer

    # deploy to environment
    eb deploy --profile=atn-developer
    ```


> ⚠️ Use an **AWS IAM Role** (see [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/home)) for AWS **ElasticBeanstalkAdminister** & **Route53FullAccess** as named profile `[atn-developer]` in `~/.aws/credentials` config.

> some errors for npm install on ec2 `t4g.nano` or `t4g.micro`, cheapest is `t4g.small`. See details at [https://aws.amazon.com/ec2/instance-types/t4/](https://aws.amazon.com/ec2/instance-types/t4/)