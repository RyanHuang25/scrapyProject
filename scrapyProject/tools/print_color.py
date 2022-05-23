# -*- coding: utf8 -*-
'''
@Author : huangrenwu
@File: print_color.py
@Time: 2022/5/23 17:33
@Email: leo.r.huang@microcore.tech
@Desc: 
'''

import datetime

from colorama import init, Fore

init(autoreset=True)

def print_red(text):
    print(f"{datetime.datetime.now()} ----- {Fore.RED}{text}")

def print_bule(text):
    print(f"{datetime.datetime.now()} ----- {Fore.BLUE}{text}")

def print_yellow(text):
    print(f"{datetime.datetime.now()} ----- {Fore.YELLOW}{text}")

def print_green(text):
    print(f"{datetime.datetime.now()} ----- {Fore.GREEN}{text}")
