#!/usr/bin/env python3
#coding: utf-8

import cgi
import html
import codecs
import sys

sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())

print("Content-type: text/html\n")
print("""<!DOCTYPE HTML>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Обработка данных форм</title>
        </head>
        <body>""")

print("<h1>Сообщение отправлено!</h1>")
print("""</body>
        </html>""")
