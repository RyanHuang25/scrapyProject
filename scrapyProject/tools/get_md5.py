# -*- coding: utf8 -*-
'''
@Author : huangrenwu
@File: get_md5.py
@Time: 2022/5/23 17:34
@Email: leo.r.huang@microcore.tech
@Desc: 
'''

import hashlib

def get_dict_md5(dic):
    '''
    取所有字典的值生成MD5
    :param dic: 传入字典
    :return:
    '''
    url = ''
    for value in dic.values():
        url += str(value)
    if isinstance(url, list) or isinstance(url, tuple) or isinstance(url, str):
        url = str(url)
    m = hashlib.md5()
    if isinstance(url, str):
        url = url.encode('utf-8')
    m.update(url)
    return m.hexdigest()

def get_str_md5(url):
    '''
    对字符串进行md5加密
    :param url:
    :return:
    '''
    if isinstance(url, list) or isinstance(url, tuple) or isinstance(url, str):
        url = str(url)
    m = hashlib.md5()
    if isinstance(url, str):
        url = url.encode('utf-8')
    m.update(url)
    return m.hexdigest()