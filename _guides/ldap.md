---
layout: documentation
title: Set up LDAP authentication for The Lounge
---

Open your configuration file, located at `${THELOUNGE_HOME}/config.js` and look for the `ldap` key,
and set the following values:

* `enable` - Set to true to enable LDAP
* `url` - A url of the form `ldaps://<ldapserver>:<ldapport>`. For plain connections, use the `ldap` scheme
* `baseDN` - LDAP base DN. When unset, the LDAP auth logic with use `searchDN` instead to locate users (see below).
  For example, set it to `"ou=accounts,dc=example,dc=com"`.
* `primaryKey` - LDAP primary key. It is set to `"uid"` by default
* `searchDN` - This method is used for searching and identifying a user DN before authenticating a user.
  This field is only used when `baseDN` is unset. This object with the following fields:
  * `rootDN` - The bind DN to be used for searching
  * `rootPassword` - The bind password to be used for searching
  * `base` - The base DN to search for users
  * `filter` - The filter to be used for searching. For example, `(objectclass=user)`
  * `scope` - The scope of the search. For example, `sub`

