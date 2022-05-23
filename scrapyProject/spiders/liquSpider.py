import scrapy
# from scrapyProject.items import APPItem

class LiquspiderSpider(scrapy.Spider):
    name = 'liquSpider'
    # allowed_domains = ['www.liqucn.com']
    start_urls = ['https://www.liqucn.com/rj/new/']

    def parse(self, response):
        li_trees = response.xpath("//ul[@class='tip_blist']/li")
        for li_tree in li_trees:
            url = li_tree.xpath("./div[@class='tip_list']/a/@href").get()
            yield scrapy.Request(url, method='GET',callback=self.index_parse,meta={"url": url})
            break

    def index_parse(self,response):
        desc_list = response.xpath("//div[@class='game_txt']//text()").getall()
        item = {
            "app_name": response.xpath("//div[@class='info_con']/h1/text()").get().replace("app",''),
            "app_type": response.xpath('//p[contains(text(),"类型：")]/em[1]/text()').get(),
            "app_hot": eval(response.xpath("//span[@class='star']/@title").get().replace("热度评级：","")),
            "ent_name": response.xpath('//p[contains(text(),"系统：")]/em/following-sibling::em/text()').get(),
            "desc": ''.join(desc_list),
            "source_url": response.meta['url'],
            "update": response.xpath('//p[contains(text(),"类型：")]/em/following-sibling::em/text()').get()
        }
        yield item

