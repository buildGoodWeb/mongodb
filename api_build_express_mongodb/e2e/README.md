## install
link: http://nightwatchjs.org/
```bash
npm install nightwatchjs.org
```

## 依赖
1. java sdk: http://www.oracle.com/technetwork/java/javase/downloads/index.html
2. selenium: https://github.com/SeleniumHQ/selenium
3. docker-selenium: https://github.com/SeleniumHQ/docker-selenium

## selenium server
```bash
mkdir bin && cd bin
curl -O http://selenium-release.storage.googleapis.com/3.9/selenium-server-standalone-3.9.1.jar
curl -O https://chromedriver.storage.googleapis.com/2.37/chromedriver_mac64.ziptar
tar zxf chromedriver_mac64.zip

# runing selenuim manually
java -jar selenium-server-standalone-3.9.1.jar
# open http://localhost:4444/
# help
java -jar selenium-server-standalone-3.9.1.jar -help
```
> 相关： https://github.com/SeleniumHQ/selenium/wiki/RemoteWebDriverServer