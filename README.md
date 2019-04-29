# Jump To:

[Setup](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#setup)

[Tests](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#tests)

## [Setup](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#setup)

To get a Stork system up and running is simple.

First install **Docker** and **Docker Compose**:

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

docker-compose --version
```

**Make** must be then installed:

`sudo apt install gcc`

Then clone the **stork-web-service** repository:

`git clone git@gitlab.com:stork-group/stork-web-service.git`

Finally simply run the following command to at the root of Stork directory:

`Make -i build`

After the build has finished simply visit the IP address of your server and you should have a fully functional version of the Stork Web Application :smile:

## [Tests](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#tests)

A set of extensive end to end UI tests can be ran against the Stork web application and can be run using:

`npm run test-ui`

which actually runs:

`testcafe 'chrome:headless' test/test-ui.ts`

Which will be followed by the test results:

![image](/uploads/95becbd18d5090c2100115ab80f1d87a/image.png)

These tests are being run using a **headless** browser which will allow me to run this in the terminal without bring the actual browser up as seen below:

![image](/uploads/ee621a42ff4b702c060338ad6998d6ef/image.png)

The above can be run by using:

`testcafe 'chrome:headless' test/test-ui.ts`

The tests are contained in within `stork-web-service/test/test-ui.ts` which will be added to everytime a feature is added to the web app

Chrome must be installed to use testcafe, here is how to install it on Ubuntu 18.04

### Install **Chrome Headless**

`sudo apt update && apt upgrade -y`

`sudo apt install chromium-browser`

`sudo apt install chromium-chromedriver`