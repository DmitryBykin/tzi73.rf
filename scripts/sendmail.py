#!/usr/bin/env python
# coding: utf-8

import smtplib
from email.mime.text import MIMEText

# отправитель
emailfrom = 'site@tzi73.ru'
# получатель
emailto = 'bykin2002@mail.ru'
# текст письма
text = 'Тестовое письмо!\nОтправка письма из python ящик site@tzi73.ru'
# заголовок письма
subj = 'Тестовое письмо'

# SMTP-сервер
server = "smtp.mail.ru"
port = 465
user_name = "site@tzi73.ru"
user_passwd = "hfwhfwsite"

# формирование сообщения
msg = MIMEText(text, "", "utf-8")
msg['Subject'] = subj
msg['From'] = emailfrom
msg['To'] = emailto

# отправка
s = smtplib.SMTP(server)
s.ehlo()
s.starttls()
s.ehlo()
s.login(user_name, user_passwd)
s.sendmail(emailfrom, [emailto,'dmitry.bykin@gmail.com'], msg.as_string())
s.quit()


