# -*- coding: utf8 -*-
'''
@Author : huangrenwu
@File: downloads_pdf.py
@Time: 2022/6/13 14:29
@Email: leo.r.huang@microcore.tech
@Desc: 
'''
import requests

url = 'https://cdnyk.myunedu.com/static/js/10.5c32a9e3.chunk.js'
headers = {
    "authority": "cdnyk.myunedu.com",
    "method": "GET",
    "path": "/static/js/10.5c32a9e3.chunk.js",
    "scheme": "https",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36"
}
res = requests.get(url,headers=headers)
with open('./yunchuang.js','w',encoding='utf8') as fp:
    fp.write(res.text)