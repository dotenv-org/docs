---
layout: default
title: Specifications
parent: Security
nav_order: 9
permalink: /docs/security/specifications
---

# Security Specifications

* The Dotenv Vault is a separate datastore from the application database. This way if an attacker gains access to the application database they do not gain access to the vault datastore.
* The Dotenv Vault datastore is not accessible via the internet and all external connections are prevented. This way an attacker can not remotely access the Dotenv Vault datastore.
* Encrypted clients are required and these clients have to go through the application - which has its own layers of encryption.
* There are stricter TLS requirements for connecting to the Dotenv Vault datastore. TLS 1.0 cannot be used to connect.
* The secrets stored in the Dotenv Vault are not just encrypted at the datastore level. They are also encrypted at each VALUE. This way even if an attacker gains access to the datastore they could not make sense of the encrypted values.
* The VAULT does NOT store the KEY. It ONLY stores the VALUE. The KEY is stored in the application database and a shared pointer (in both datastores) allows them to be identified as a pair. This way an attacker must gain access to both the application database and the Dotenv Vault datastore to make sense of the values.
* The encryption key(s) used to encrypt the secret values are rotated on an unpublished schedule. This way an attacker might gain access to an old encryption key but not the most recent - foiling their ability to decrypt the secret values.
* Encryption uses AES-GCM encryption. It is a well-studied, NIST recommended, and IEFT standard algorithim.
* As you see, we go to great lengths to make sure your secrets are safe. Afterall, we keep our secrets here as well.

We hope you like dotenv-vault as much as we do.
