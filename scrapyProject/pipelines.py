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

<<<<<<< HEAD
########## redis链接 ############
redis_host = settings.REDIS_HOST
redis_port = settings.REDIS_PORT
redis_passwd = settings.REDIS_PASSWD
redis_db = settings.REDIS_DB
pika = redis.Redis(host=redis_host,password=redis_passwd,port=redis_port,db=redis_db,decode_responses=True)
println.print_green(f'============= Redis链接成功: {pika} =============')
=======
class ConnectMySQL:
    def __init__(self):
        self.pool = PersistentDB(
            creator=pymysql,  # 使用链接数据库的模块
            maxusage=None,  # 一个链接最多被重复使用的次数，None表示无限制
            setsession=[],  # 开始会话前执行的命令列表。如：["set datestyle to ...", "set time zone ..."]
            ping=0,
            # ping MySQL服务端，检查是否服务可用。# 如：0 = None = never, 1 = default = whenever it is requested, 2 = when a cursor is created, 4 = when a query is executed, 7 = always
            closeable=False,
            # 如果为False时，conn.close() 实际上被忽略，供下次使用，再线程关闭时，才会自动关闭链接。如果为True时， conn.close()则关闭链接，那么再次调用pool.connection时就会报错，因为已经真的关闭了连接（pool.steady_connection()可以获取一个新的链接）
            threadlocal=None,  # 本线程独享值得对象，用于保存链接对象，如果链接对象被重置
            host=settings.MYSQL_HOST,
            port=settings.MYSQL_PORT,
            user=settings.MYSQL_USER,
            password=settings.MYSQL_PASSWD,
            database='huang',
            charset="utf8"
        )
>>>>>>> b22a8b31f560d2df2875c1a304e4ab85b6f97bac


class ScrapyprojectPipeline:
    def process_item(self, item, spider):
        return item

<<<<<<< HEAD
class ContactPipeline:
=======
    def item_insert_value(self, item_key, item_value):
        '''
        数据和mysql字段进行匹配
        :param item_key:
        :param item_value:
        :return: 返回字典，匹配好的结果
        '''
        for key in item_key.keys():
            try:
                item_key[key] = item_value[key]
            except:
                pass
        return item_key

    def insert_data(self, item, table_name, drop_column=['id', 'created'],not_empty=[]):
        '''
        写入mysql数据库
        :param item: 数据内容，字典类型
        :param table_name: 表明
        :return:
        '''
        item_key = self.get_columns(table_name, drop_column)
        item = self.item_insert_value(item_key, item)
        values = ''
        for key, value in item.items():
            if key in not_empty:
                if value == "":
                    values += f'"",'
                else:
                    values += f'"{value}",'
            else:
                if value == "":
                    values += f'NULL,'
                else:
                    values += f'"{value}",'
        sql = f'insert into {table_name} ({",".join(item.keys())}) values ({values[:-1]})'
        conn, cursor = self.connect_conn()
        try:
            cursor.execute(sql)
            conn.commit()
            print_green(f"{sql}")
        except Exception as e:
            print_red(e)
            print_red(sql)
        self.close_conn(conn, cursor)

    def close_conn(self, conn, cursor):
        cursor.close()
        conn.close()
>>>>>>> b22a8b31f560d2df2875c1a304e4ab85b6f97bac

class ScrapyprojectPipeline:
    def process_item(self, item, spider):
        return item

class APPPipeline:

    def open_spider(self,spider):
        pass

    def process_item(self, item, spider):
<<<<<<< HEAD
        md5 = encryp.get_dict_md5(item)
        if pika.hexists(f"{item['source']}_contact_fingerprint",md5):
            println.print_yellow(f"数据已存在：{item['url']}")
        else:
            pika.hset(f"{item['source']}_contact_fingerprint",item['url'],md5)
            pika.lpush(f'{item["source"]}_contact',json.dumps(item))
            println.print_green(f"数据存储成功: {item}")
        return item
=======
        if 'app' in spider.name:
            self.conn = ConnectMySQL()
        else:
            return item
        item['md5'] = get_dict_md5(item)
        self.conn.insert_data(item,table_name="app_list")


class WangyiPipeline:

    def open_spider(self,spider):
        pass

    def process_item(self, item, spider):
        if 'news' in spider.name:
            self.conn = ConnectMySQL()
            item['md5'] = get_dict_md5(item)
            self.conn.insert_data(item, table_name="t_163_news")
        else:
            return item
>>>>>>> b22a8b31f560d2df2875c1a304e4ab85b6f97bac
