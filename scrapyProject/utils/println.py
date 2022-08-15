# -*- coding: utf8 -*-
'''
@Author: huangrenwu
@File: println.py
@Time: 2022/8/6 12:11
@Email: leo.r.huang@microcore.tech
输出，格式个样的输出方式
'''

import datetime
from colorama import init, Fore

# init(autoreset=True)

def print_red(text):
    print(f"{datetime.datetime.now()} ----- {Fore.RED}{text}")

def print_bule(text):
    print(f"{datetime.datetime.now()} ----- {Fore.BLUE}{text}")

def print_yellow(text):
    print(f"{datetime.datetime.now()} ----- {Fore.YELLOW}{text}")

def print_green(text):
    print(f"{datetime.datetime.now()} ----- {Fore.GREEN}{text}")