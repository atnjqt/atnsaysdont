terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
  profile = "atn-developer"
}

resource "aws_elastic_beanstalk_application" "eb_app" {
  name        = "atnsaysdont-tf"
  description = "ATN SAYS DONT music promo website"
}

resource "aws_elastic_beanstalk_environment" "eb_app_env" {
  name                = "etienne-site"
  application         = aws_elastic_beanstalk_application.eb_app.name
  solution_stack_name = "64bit Amazon Linux 2 v5.6.4 running Node.js 16"
  
  setting {
    namespace   = "aws:autoscaling:launchconfiguration"
    name        = "IamInstanceProfile"
    value       = "aws-elasticbeanstalk-ec2-role"
  }
  setting {
    namespace   = "aws:autoscaling:launchconfiguration"
    name        = "DisableIMDSv1"
    value       = "true"
  }
  setting { 
    namespace   = "aws:autoscaling:asg"
    name        = "MinSize"
    value       = "1"
  }
  setting {
    namespace   = "aws:autoscaling:asg"
    name        = "MaxSize"
    value       = "1"
  }
  setting {
    namespace   = "aws:elasticbeanstalk:environment"
    name        = "EnvironmentType"
    value       = "LoadBalanced"
  }
  setting {
    namespace   = "aws:elasticbeanstalk:environment"
    name        = "LoadBalancerType"
    value       = "application"
  }

  setting {
    namespace   = "aws:ec2:instances"
    name        = "InstanceTypes"
    value       = "t4g.nano"
  }

  setting {
    namespace   = "aws:elasticbeanstalk:environment:proxy"
    name        = "ProxyServer"
    value       = "apache"
  }
}