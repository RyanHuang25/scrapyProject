# -*- coding: utf8 -*-
'''
@Author : huangrenwu
@File: find_app_spider.py
@Time: 2022/5/25 9:40
@Email: leo.r.huang@microcore.tech
@Desc: 
'''

from scrapyProject.pipelines import ConnectMySQL

t = ConnectMySQL()
conn, cursor = t.connect_conn()
a = 0
result_list = []
while True:
    sql = f'select * from app_list limit {a},1000'
    cursor.execute(sql)
    data_list = cursor.fetchall()
    for data in data_list:
        result_list.append(data)
    if len(data_list) < 1000:
        break
    a += 1000

for su in result_list:
    if '停车' in su[1] or '泊车' in su[1]:
        print(su)

