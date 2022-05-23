import scrapy


class ExampleSpider(scrapy.Spider):
    name = 'example'
    # allowed_domains = ['example.com']
    start_urls = ['https://www.baidu.com']

    def parse(self, response):
        print(response.text)
