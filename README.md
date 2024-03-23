# Web App Promo Page - *ATNSAYSDONT*

Developed by [Etienne Jacquot](mailto:jacquot.etienne@gmail.com) (2024)

## Overview 

- Web app promo page for [Soundcloud](https://soundcloud.com/etienne-jacquot) content, etc: [http://saysdont.ejacquot.com](http://saysdont.ejacquot.com), or really *whatever event* I want to celebrate with a vanity domain single-page application 🥳🥳
- <em>> Some additional testing & promo stuff!</em>

## Getting Started

Use *Terraform* to deploy the simple web app infrastructure, and *git* and *eb* to version & deploy the latest promo page ideas all to AWS.

> ⚠️ **Update Terraform with AWS Named Profile:** 
> - in the [main.tf](./main.tf) aws required-provider resource, edit the **profile** value based on your `~/.aws/credentials` (see [here](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)). 
> - For details on Elastic Beanstalk policies, see [here](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/AWSHowTo.iam.managed-policies.html)

### Infrastructure Deploy

- Try the following for a simple eb deployment IaC deployment. This spins out a simple AWS Elastic Beanstalk environment using NodeJS on Linux:

    ```bash
    # clone the simple web app repo
    git clone atnsaysdont
    cd atnsaysdont/

    ## deploy your eb infra
    # create your environment on AWS
    terraform init
    terraform apply
    ```

### Application Deployment

- When your terraform apply is finished with, proceed to deploy a new app version to eb. This will update the live promo page with the latest changes commited to git on the current branch:

    ```bash
    ## deploy your eb code
    # check configs
    eb init -i --profile=atn-developer

    # confirm configs
    eb status --profile=atn-developer

    # deploy to environment
    eb deploy --profile=atn-developer
    ```
    > if you get an error about certificate, run to check the value associated w your domain name (i.e. saysdont.com) `aws acm list-certificates --region=us-east-1 --profile=atn-developer | jq -r '.CertificateSummaryList[] | select(.DomainName=="*.saysdont.com") | .CertificateArn'` -- this guide assumes you have the ACM already created!

### Tear Down (Optional but Recommended)

- When you want take down the live promo page (to save money, of course 💸):

    ```bash
    # tear down environment
    terraform destroy
    ```
    
### Hosting on AWS with HTTPS

>  🥳 Your simple web app soundcloud promo page: [https://saysdont.com](https://saysdont.com)

#### Manual Steps on AWS Console

1. Deploy the app to EB ([here](https://us-east-1.console.aws.amazon.com/elasticbeanstalk/home?region=us-east-1#/environments)), per instructions above 🤗
2. Load balancer listener needs `:443` for `*.saysdont.com` forwarding to HTTP LB, see [here](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#LoadBalancers:sort=loadBalancerName)
3. ALB security group needs inbound rule, I set public via `:443` on `0.0.0.0/0`, but really just for inbound from cloudfront serving the app, see ([here](https://us-east-1.console.aws.amazon.com/ec2/home?region=us-east-1#SecurityGroups:))
4. cloudfront distribution takes some time to point to origin, update origin with Elastic Beanstalk CNAME
5. A Route53 hosted zone for <b>*.saysdont.com</b> ([here](https://us-east-1.console.aws.amazon.com/route53/v2/hostedzones?region=us-east-1))& ACM certificate for `*.saysdont.com` ([here](https://us-east-1.console.aws.amazon.com/acm/home?region=us-east-1#)) linking to cloudfront CDN
6. Continue to think about how to accomplish most of all this using terraform!

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