import scrapy
from scrapy import Request

class ShunqispiderSpider(scrapy.Spider):
    name = 'shunqiSpider'
    # allowed_domains = ['www.11467.com']
    start_urls = ['https://b2b.11467.com/']

    def parse(self, response):
        li_trees = response.xpath("//div[@class='boxcontent']/ul/li")
        for li_tree in li_trees:
            url = 'https:' + li_tree.xpath("./a/@href").get()
            yield Request(url=url,callback=self.listParse)

    def listParse(self,response):
        h_trees = response.xpath("//div[@class='f_l']")
        for h in h_trees:
            url = 'https:' + h.xpath("./h4/a/@href").get() + '#contact'
            yield Request(url=url,callback=self.contactParse,meta={'source': url})

        nextPageUrl = response.xpath("//a[contains(text(),'下一页')]/@href").get()
        if nextPageUrl:
            yield Request(url=f'https:{nextPageUrl}',callback=self.listParse)

    def contactParse(self,response):
        phone = response.xpath("//dl[@class='codl']/dt[contains(text(),'电话')]/following-sibling::dd[1]/text()").get()
        telphone = response.xpath("//dl[@class='codl']/dt[contains(text(),'手机')]/following-sibling::dd[1]/text()").get()
        item = {
            "entname": response.xpath("//div[@id='logoco']/h1/span/text()").get(),
            "address": response.xpath("//dl[@class='codl']/dt[contains(text(),'公司地址')]/following-sibling::dd[1]/text()").get(),
            "phone": phone.replace("未核实",'').replace('仅供参考','').replace(' ','').replace('，','') if phone else phone,
            "telphone": telphone.replace("未核实",'').replace('仅供参考','').replace(' ','').replace('，','') if telphone else telphone,
            "email": response.xpath("//dl[@class='codl']/dt[contains(text(),'邮件')]/following-sibling::dd[1]/text()").get(),
            "url": response.meta['source'],
            "source": "one11467"
        }
        yield item