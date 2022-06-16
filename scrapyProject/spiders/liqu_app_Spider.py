import datetime

import scrapy
# from scrapyProject.items import APPItem
from scrapyProject.tools.print_color import print_green

class LiquspiderSpider(scrapy.Spider):
    name = 'liqu_app_Spider'
    # allowed_domains = ['www.liqucn.com']
    start_urls = ['https://www.liqucn.com/rj/new/']

    def parse(self, response):
        li_trees = response.xpath("//ul[@class='tip_blist']/li")
        for li_tree in li_trees:
            try:
                url = li_tree.xpath("./div[@class='tip_list']/a/@href").get()
                yield scrapy.Request(url, method='GET',callback=self.index_parse,meta={"url": url})
            except Exception:
                continue

        try:
            last_next_url = response.xpath("//a[contains(text(),'下一页')]/@href").get()
            next_url = f'https://www.liqucn.com/rj/new/{last_next_url}'
            yield scrapy.Request(next_url,method='GET',callback=self.parse)
        except Exception:
            return

    def index_parse(self,response):
        desc_list = response.xpath("//div[@class='game_txt']//text()").getall()
        try:
            ent_name = response.xpath('//p[contains(text(),"系统：")]/em/following-sibling::em/text()').get().replace(" ",'')
        except Exception:
            ent_name = ""
        try:
            updated = response.xpath('//p[contains(text(),"类型：")]/em/following-sibling::em/text()').get().replace(" ",'')
        except Exception:
            updated = datetime.date.today()
        item = {
            "app_name": response.xpath("//div[@class='info_con']/h1/text()").get().replace("app",''),
            "app_type": response.xpath('//p[contains(text(),"类型：")]/em[1]/text()').get(),
            "app_hot": eval(response.xpath("//span[@class='star']/@title").get().replace("热度评级：","")),
            "ent_name": ent_name,
            "infomation": ''.join(desc_list).replace('\r','').replace('\n','').replace('\t','').replace(' ',''),
            "source_url": response.meta['url'],
            "source": "历趣",
            "updated": updated
        }
        yield item

