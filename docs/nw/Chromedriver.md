## Chromedriver

Since v0.6.0 `chromedriver` is distributed with node-webkit binaries.

From [chromedriver project home page](http://code.google.com/p/chromedriver/):

> WebDriver is an open source tool for automated testing of webapps across many browsers. It provides capabilities for navigating to web pages, user input, JavaScript execution, and more. ChromeDriver is a standalone server which implements WebDriver's wire protocol for Chromium. It is being developed by members of the Chromium and WebDriver teams. 

You can use it with tools like [selenium](http://docs.seleniumhq.org/).

The only difference of the binary files from the official one is: `chromedriver2_server` will search for node-webkit binaries (nw, nw.exe) in the same directory (on OSX it's the same directory with `node-webkit.app`).

## Getting started

The following workflow uses [wd](https://github.com/admc/wd) to drive the tests:

### Installing

* Download `chromedriver2` (see links below) and place it under the same dir that contains the node-webkit binaries (`nw`, `nw.exe`, or `node-webkit.app` on OSX)
* Download the [Selenium Server Standalone](http://docs.seleniumhq.org/download/) jar and place it in the same dir as `chromedriver2`
* Install `wd` in your project's `node_modules/`:
```
$ npm install wd
```

### Running

* Start Selenium:
```
$ java -jar selenium-server-standalone-VERSION.jar -Dwebdriver.chrome.driver=./chromedriver2_server
```
* Drive Selenium as per [wd](https://github.com/admc/wd)'s instructions, for example:
```
$ (your_project_path)/node_modules/.bin/wd shell
(wd): x = wd.remote()
(wd): x.init({ browserName: "chrome" })
(wd): x.get("http://google.com")
```
* At this point you should have a node-webkit window open showing Google's homepage
* Another sample with python:  
```python
import time
from selenium import webdriver

driver = webdriver.Chrome('/home/roger/Download/node-webkit-v0.10.2-linux-x64/chromedriver')  # Optional argument, if not specified will search path.
driver.get('http://www.google.com/xhtml');
time.sleep(5) # Let the user actually see something!
search_box = driver.find_element_by_name('q')
search_box.send_keys('ChromeDriver')
search_box.submit()
time.sleep(5) # Let the user actually see something!
driver.quit()
```
### Important Note For Ubuntu 13.x Users

As you may have found from trying to run node-webkit in later versions of Ubuntu, you will probably find this won't work due to lacking libudev.so.0.  You can work around this reasonably easily.
  1. Rename `nw` to something else (I chose `myapp-bin`) - this is because ChromeDriver has hard-coded the executable to nw.
  2. Create a new executable file called `nw` with the instructions found in the Wiki for the [libudev.so.0](https://github.com/rogerwang/node-webkit/wiki/The-solution-of-lacking-libudev.so.0) hack.  **REMEMBER TO CREATE A SIMLINK IN THIS DIRECTORY!!!**

You should find this now works in Ubuntu 13.x

## Downloads
### 0.10.x
Please look for it in the release notes or the same directory with the node-webkit binary on http://dl.node-webkit.org/  
### 0.9.x
https://s3.amazonaws.com/node-webkit/v0.9.0/chromedriver2-nw-v0.9.0-linux-ia32.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.9.0/chromedriver2-nw-v0.9.0-linux-x64.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.9.0/chromedriver2-nw-v0.9.0-osx-ia32.zip  
https://s3.amazonaws.com/node-webkit/v0.9.0/chromedriver2-nw-v0.9.0-win-ia32.zip  
### 0.8.x
https://s3.amazonaws.com/node-webkit/v0.8.0/chromedriver2-nw-v0.8.0-linux-ia32.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.8.0/chromedriver2-nw-v0.8.0-linux-x64.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.8.0/chromedriver2-nw-v0.8.0-osx-ia32.zip  
https://s3.amazonaws.com/node-webkit/v0.8.0/chromedriver2-nw-v0.8.0-win-ia32.zip  
### 0.7.x
https://s3.amazonaws.com/node-webkit/v0.7.0/chromedriver2-nw-v0.7-win-ia32.zip  
https://s3.amazonaws.com/node-webkit/v0.7.0/chromedriver2-nw-v0.7-osx-ia32.zip  
https://s3.amazonaws.com/node-webkit/v0.7.0/chromedriver2-nw-v0.7-linux-ia32.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.7.0/chromedriver2-nw-v0.7-linux-x64.tar.gz  
### 0.6.x
https://s3.amazonaws.com/node-webkit/v0.6.0/chromedriver2-nw-v0.6.0-win-ia32.zip  
https://s3.amazonaws.com/node-webkit/v0.6.0/chromedriver2-nw-v0.6.0-linux-ia32.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.6.0/chromedriver2-nw-v0.6.0-linux-x64.tar.gz  
https://s3.amazonaws.com/node-webkit/v0.6.0/chromedriver2-nw-v0.6.0-osx-ia32.zip  