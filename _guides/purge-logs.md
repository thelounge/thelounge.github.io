---
layout: documentation
title: How to purge the logs
description: How to purge or clean the logs of The Lounge
---

*The Lounge* keeps track of channel history (all user messages) if you have configured it to do so.
Globally, in `config.js`, if you have `messageStorage` list non empty i.e. with either `text` or `sqlite` or both.

There is also a per-user settings `log`, in every users' json.

The logs can grow significatly over time, depending of number of users and channels.
Here is an example python script that will purge text and sqlite logs of messages older than 7 days. You can change that number of days to what you want.

It is best to stop the *thelounge* while you run that script, to avoid any problem or **corruption**.

```python
#!/usr/bin/env python3

import pathlib
import io
import datetime
import tempfile
import shutil
import os
import sqlite3
import asyncio

THELOUNGE_HOME = '/var/lib/thelounge'
days = 7

limit = datetime.datetime.utcnow() - datetime.timedelta(days=days)

root_dir = pathlib.Path(THELOUNGE_HOME) / 'logs'

def purge_txt(log):
    print(f':: processing {log}')
    with io.open(log, mode='r', encoding='utf-8') as f:
        output = tempfile.NamedTemporaryFile('w', encoding='utf-8', prefix=log.name, delete=False)
        line = f.readline()
        while line:
            timestamp = line.lstrip('\x00').split(']', 1)[0].lstrip('[') # strip leading null character if log has not been closed cleanly
            ts = datetime.datetime.strptime(timestamp, '%Y-%m-%dT%H:%M:%S.%fZ')
            if ts >= limit:
                output.write(line)
            line = f.readline()
        output.close() 
    shutil.copyfile(output.name, str(log))
    os.remove(output.name)

def purge_sqlite(log):
    print(f':: processing {log}')
    con = sqlite3.connect(log)
    cur = con.cursor()
    cur.execute(f"delete from messages where time < strftime('%s', datetime('now', '-{days} day'))*1000;")
    con.commit()
    cur.execute("VACUUM;")
    con.close()

def purge_all_txt():
    logs = list(root_dir.glob('**/*.log'))
    for log in logs:
        purge_txt(log)

def purge_all_sqlite3():
    logs = list(root_dir.glob('**/*.sqlite3'))
    for log in logs:
        purge_sqlite(log)

def main():
    purge_all_txt()
    purge_all_sqlite3()

if __name__ == '__main__':
    main()
```

It has been tested on linux, needs to be checked on windows and macOS.
