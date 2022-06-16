import scrapy,datetime

class WangyispiderSpider(scrapy.Spider):
    name = 'wangyi_news_Spider'
    # allowed_domains = ['www.163.com']
    start_urls = ['https://www.163.com/dy/media/T1603594732083.html']

    def parse(self, response):
        index_urls = response.xpath("//h2[@class='media_article_title']/a/@href").getall()
        for index_url in index_urls:
            yield scrapy.Request(index_url,method='GET',callback=self.indexParse)


    def indexParse(self,response):
        title = response.xpath("//h1[@class='post_title']/text()").get()
        time = str(datetime.date.today())[:4] + '-' + title.split(' ')[-1].replace("月",'-').replace("日",'').replace(' ','')
        # time = str(datetime.date.today())[:4] + '-' + title[-6:].replace("月",'-').replace("日",'').replace(' ','')
        data_list = response.xpath("//div[@class='post_body']/p//text()").getall()
        data = '\n'.join(data_list).replace('"','')
        item = {
            "pbdate": time,
            "title": title,
            "body": data
        }
        yield item