---
layout: default
title: Security
nav_order: 3
has_children: true
permalink: /security
---

# Security

Security is an evermoving target - an arms race. But that doesn't mean it should be hard to use. Good design can make complex things simple, and that is what we are after at Dotenv.

Dotenv is a security tool. It has been since it was first developed in 2013. We saw developers struggling to keep their secrets safe so we pioneered the .env file format standard. The design led to better DSX - which led to safer secrets for millions of developers. Today, we are taking that to the next logical step.

What is the problem with .env files today? The world has changed. Developers manage secrets at far greater scale than a decade ago. .env files are not easily shareable between machines, environments, and team members. As a result, developers often share secrets over Slack and email. It's not scaleable and fraught with security risks. For a CTO or CSO it is a risk they should not take.

So, we started extending the .env file format to support syncing across machines, environments, and team members. It's come a long way and it is only going to get better. It's an exciting development and we welcome you to go on this journey with us.

We are designing a handful of extensions and services on top of the .env file format to make this happen. They are:

* .env file
* .env.vault identifier
* .env.me credential
* dotenv-vault cli

And this is just the start. There are also integrations into 3rd party services like AWS Secrets, AWS Parameter Store, Vercel, Netlify, Slack, Heroku, GitHub, and more - as well as plans to allow you to Bring Your Own Vault™.

It is going to be an exciting journey. Thank you for using Dotenv.
