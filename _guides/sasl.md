---
layout: documentation
title: Authenticate to IRC servers using SASL
description: How to configure The Lounge to connect to IRC servers using SASL
---

[SASL](https://en.wikipedia.org/wiki/Simple_Authentication_and_Security_Layer) authentication has been standardised in the upcoming IRC v3 specification to login into account to speed up registration and authentication.

*The Lounge* allows you to use 2 types of SASL authentication: PLAIN and EXTERNAL.

# SASL PLAIN authentication

It is rather simple to setup: edit the network settings, and choose "Username + password (SASL PLAIN)" in "Authentication". You have to fill in your username and password.

If everything has been configued correctly, you should see a "SASL authentication successful" in the network tab.

# SASL EXTERNAL authentication and CertFP

*The Lounge* automatically generates and manages the client certificate for you. To force the creation of the certificate, choose "Client certificate (SASL EXTERNAL)" in "Authentication" in the settings of the network.

Then, you have to tell the IRC server to attach your certificate fingerprint (CertFP) to your account.

The process depends on the network; you have first to login via another method to setup the account and then, later on, attach the certificate fingerprint to that account. Please follow the documentation of the network you are using.

To go through that process, you need the fingerprint of the certificate.

## Find the certificate name

First, you need to locate the certificate created by *The Lounge* for you. It is in The Lounge's home under the `certificates` directory. Each certificate name is made of a [uuid](https://en.wikipedia.org/wiki/Universally_unique_identifier).

If there are multiple certificates in that directory, you need to find the *uuid* associated with the network you are setting up with SASL EXTERNAL.
For that, you need to look into your user's json configuration file. It is located in `users` directory in The Lounge's home. Its name is made of you username (the one used to lg into The Lounge) with a `.json` extension.

Once you have the *uuid* of the network, just add the `.crt` extension to get the certificate filename.

## Get the certificate fingerprint

You can get the (sha512) fingerprint of your certificate with the command, for example for the `c225df8b-27d4-4964-9a87-13a6aa5411db.crt` certificate:

    openssl x509 -in c225df8b-27d4-4964-9a87-13a6aa5411db.crt -noout -fingerprint -sha512 | awk -F= '{gsub(":",""); print tolower ($2)}'

If you don't have `openssl` installed, here is a *python* script to print various fingerprints of *x509* certificates. It should be cross-platform.

```python

#!/usr/bin/env python3

import sys
import os.path
from OpenSSL.crypto import load_certificate, FILETYPE_PEM

if len(sys.argv) < 2 or '-h' in  sys.argv or '--help' in sys.argv:
    print(f'Usage: {sys.argv[0]} [CERT] ...', file=sys.stderr)
    sys.exit(1)

for filename in sys.argv[1:]:
    if not os.path.isfile(filename):
        print(f'Warning: {filename} is not found or not a file. Skipped', file=sys.stderr)
        continue

    with open(filename, 'rb') as f:
        cert_file_string = f.read()
    cert = load_certificate(FILETYPE_PEM, cert_file_string)

    for hash in ('sha1', 'sha256', 'sha512'):
        fingerprint = cert.digest(hash).decode('utf-8').replace(':','').lower()
        print(f'{filename} {hash} fingerprint: {fingerprint}')
```

Save the script as `x509_fingerprint.py` and run it, for example on `c225df8b-27d4-4964-9a87-13a6aa5411db.crt`:

    $ python3 ./x509_fingerprint.py c225df8b-27d4-4964-9a87-13a6aa5411db.crt
    c225df8b-27d4-4964-9a87-13a6aa5411db.crt sha1 fingerprint: 53dcd8dfc81768f1ec8423ad40a1990124531a3a
    c225df8b-27d4-4964-9a87-13a6aa5411db.crt sha256 fingerprint: 6c36f9aed54bf5a81a9d25e61e3be037cd4edc03ad064bf67a278921cd0dd87d
    c225df8b-27d4-4964-9a87-13a6aa5411db.crt sha512 fingerprint: 212f00dc8c88f425b9b535a8553f9fb58d76d665550634d9d99c350cebebf8424d6f28693f263959cf4158f35d44c823889f93dc3639d2f8ba69a7cd617edfb7

## Attach the certificate to your account (on the IRC server)
Usually, the last step of the process is to run the command (in The Lounge):

    /msg nickserv cert add 53dcd8dfc81768f1ec8423ad40a1990124531a3a

In the example above, we used the sha1 fingerprint of our example c225df8b-27d4-4964-9a87-13a6aa5411db.crt certificate
