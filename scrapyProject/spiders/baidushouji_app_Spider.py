import scrapy


class BaidushoujispiderSpider(scrapy.Spider):
    name = 'baidushouji_app_Spider'
    # allowed_domains = ['www.baidu.com']
    domain_url = 'https://shouji.baidu.com'
    start_urls = ['https://shouji.baidu.com/software/']

    def parse(self, response):
        list_urls = response.xpath("//ul[@class='cate']/li/div/a/@href").getall()
        for list_url in list_urls:
            list_url = f"{self.domain_url}{list_url}"
            yield scrapy.Request(list_url,method='GET',callback=self.listParse)

    def listParse(self,response):
        index_urls = response.xpath("//a[@class='app-box']/@href").getall()
        for index_url in index_urls:
            index_url = f"{self.domain_url}{index_url}"

    def indexParse(self,response):
        pass