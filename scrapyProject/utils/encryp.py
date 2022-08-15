# -*- coding: utf8 -*-
'''
@Author: huangrenwu
@File: encryp.py
@Time: 2022/8/6 12:09
@Email: leo.r.huang@microcore.tech
加密，所有的加密方法都可以写到这里，方便调用
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