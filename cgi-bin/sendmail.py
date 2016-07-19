#!/usr/bin/env python
# coding: utf-8

import cgi
import sys
import codecs
import html
import smtplib
from email.mime.text import MIMEText

sys.stdout = codecs.getwriter("utf-8")(sys.stdout.detach())
form = cgi.FieldStorage()
email = form.getfirst("e_mail", "не задано")
name = form.getfirst("name", "не задано")
message = form.getfirst("letter-content", "не задано")
email = html.escape(email)
name = html.escape(name)
message = html.escape(message)

print("Content-type: text/html\n")
print("Ваше сообщение отправлено\n")
# отправитель
emailfrom = 'site@tzi73.ru'
# получатель
emailto = 'bykin2002@mail.ru'
# заголовок письма
subj = 'Сообщение с сайта тзи73.рф'
# текст письма
text = 'Сообщение с сайта\n'
text+= 'От: ' + name + '\n'
text+= 'e-mail: ' + email + '\n'
text+= 'Текст сообщения: ' + '\n'
text+= '*******************************************\n'
text+= message + '\n'
text+= '*******************************************\n'

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

# отправка администратору сайта тзи73.рф
s = smtplib.SMTP(server)
s.ehlo()
s.starttls()
s.ehlo()
s.login(user_name, user_passwd)
s.sendmail(emailfrom, [emailto,'dmitry.bykin@gmail.com'], msg.as_string())
s.quit()

# отправка клиенту подтверждения
emailto = email
text = 'Здравствуйте.\nВаш адрес был указан при обращении на сайте тзи73.рф для обратной связи \n'
text+= 'Мы постараемся в ближайшее время ответить на Ваш запрос.\n'  
text+= 'Спасибо за обращение в нашу компанию!\n\n'
text+= 'Администрация сайта тзи73.рф \n'
text+= '(8422) 62-02-09, mail@tzi73.ru'
subj = 'Запрос на сайте тзи73.рф' 

msg = MIMEText(text, "", "utf-8")
msg['Subject'] = subj
msg['From'] = emailfrom
msg['To'] = emailto

 
s = smtplib.SMTP(server)
s.ehlo()
s.starttls()
s.ehlo()
s.login(user_name, user_passwd)
s.sendmail(emailfrom, emailto, msg.as_string())
s.quit()