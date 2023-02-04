# Web App Promo Page - *ATNSAYSDONT*

Developed by [Etienne Jacquot](mailto:jacquot.etienne@gmail.com) (2023)

## Overview 

- Web app promo page for [Soundcloud](https://soundcloud.com/etienne-jacquot) content, etc: [http://saysdont.ejacquot.com](http://saysdont.ejacquot.com), or really *whatever event* I want to celebrate with a vanity domain single-page application 🥳🥳

## Getting Started

Use *Terraform* to deploy the simple web app infrastructure, and *git* and *eb* to version & deploy the latest promo page ideas all to AWS.

> ⚠️ **Update Terraform with AWS Named Profile:** 
> - in the [main.tf](./main.tf) aws required-provider resource, edit the **profile** value based on your `~/.aws/credentials` (see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)). 
> - For details on Elastic Beanstalk policies, see [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html)

- Try the following for a simple eb deployment:

    ```bash
    # clone the simple web app repo
    git clone atnsaysdont
    cd atnsaysdont/

    ## deploy your eb infra
    # create your environment on AWS
    terraform init
    terraform apply
    ```

- To deploy a new app version to eb:

    ```bash
    ## deploy your eb code
    # check configs
    eb init -i --profile=atn-developer

    # confirm configs
    eb status --profile=atn-developer

    # deploy to environment
    eb deploy --profile=atn-developer
    ```

- When you want take down the live promo page (to save money, of course 💸):

    ```bash
    # tear down environment
    terraform destroy
    ```
    
### Hosting with HTTPS

>  🥳 Your simple web app soundcloud promo page: [https://saysdont.ejacquot.com](https://saysdont.ejacquot.com)

- You need to deploy beanstalk with an application load balancer in order to use your ACM certificate with a CloudFront Distribution.
    1. Deploy the app to eb
    2. Load balancer listener needs :443 *.ejacquot.com forwarding to HTTP LB [here](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#LoadBalancers:sort=loadBalancerName)
    3. ELB SG needs inbound :443 0.0.0.0/0 (really just cloudfront) ([here](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#SecurityGroups:))
    4. cloud front distribution takes some time to point to origin, update origin with EB CNAME
    5. think about how to accomplish most of all this using terraform
______

## Development

- Demo for a simple **React** [single-page app](https://reactjs.org/docs/glossary.html#single-page-application)

    - To test local npm changes (http://localhost:3000):

        ```bash
        npm run start-local
        ```

### Notes 

- Deployed on **AWS** [Elastic Beanstalk](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html) 

> ⚠️ Use an **AWS IAM Role** (see [here](https://us-east-1.console.aws.amazon.com/iamv2/home?region=us-east-1#/home)) for AWS **ElasticBeanstalkAdminister** & **Route53FullAccess** as named profile `[atn-developer]` in `~/.aws/credentials` config.

> some errors for npm install on ec2 `t4g.nano` or `t4g.micro`, cheapest is `t4g.small`. See details at [https://aws.amazon.com/ec2/instance-types/t4/](https://aws.amazon.com/ec2/instance-types/t4/)