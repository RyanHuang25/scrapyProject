# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface

import pymysql,redis,json
# from scrapyProject import settings
from scrapyProject.utils import println,encryp
from scrapyProject import settings
from DBUtils.PersistentDB import PersistentDB

########## redis链接 ############
redis_host = settings.REDIS_HOST
redis_port = settings.REDIS_PORT
redis_passwd = settings.REDIS_PASSWD
redis_db = settings.REDIS_DB
pika = redis.Redis(host=redis_host,password=redis_passwd,port=redis_port,db=redis_db,decode_responses=True)
println.print_green(f'============= Redis链接成功: {pika} =============')


class ScrapyprojectPipeline:
    def process_item(self, item, spider):
        return item

class ContactPipeline:

    def process_item(self, item, spider):
        md5 = encryp.get_dict_md5(item)
        if pika.hexists(f"{item['source']}_contact_fingerprint",md5):
            println.print_yellow(f"数据已存在：{item['url']}")
        else:
            pika.hset(f"{item['source']}_contact_fingerprint",item['url'],md5)
            pika.lpush(f'{item["source"]}_contact',json.dumps(item))
            println.print_green(f"数据存储成功: {item}")
        return item