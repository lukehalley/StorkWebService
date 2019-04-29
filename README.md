# Jump To:

[Setup](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#setup)

[Tests](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#tests)

[User Stories](https://gitlab.com/stork-group/stork-web-service/wikis/Home/#user-stories)

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

## [User Stories](https://gitlab.com/stork-group/stork-web-service/wikis/home#user-stories)

### Account User Stories
*User stories for Stork user accounts*

#### Valid Sign Up 👍
*A user successfully signs up using valid credentials and fills in all required fields*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| new user | set up my stork device |  use the stork device |

| Action |
| ----------- |
| My first Stork card tells me I need to make a stork account to use my stork device so I visit **[stork_signup]**  |
| I click the **[Sign Up]** button |
| I enter my **[fname]** in the **[First Name Field]** |
| I enter my **[sname]** in the **[Second Name Field]** |
| I enter my **[email]** in the required **[email_field]** |
| I enter my **[password]** in the required **[password_field]** |
| I enter my **[address]** in the **[Address Field]** |
| I enter my **[phone_num]** in the **[Phone Number Field]** |
| I click the **[Create Account Button]** |
| I am told that my account has been created successfully. |

#### Invalid Sign Up 👎
*A user unsuccessfully signs up using valstork_device_id credentials but only fills in some required fields*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| new user | set up my stork device |  use the stork device |

| Action |
| ----------- |
| My first Stork card tells me I need to make a stork account to use my stork device so I visit **[stork_signup]**  |
| I click the **[Sign Up]** button |
| I enter my **[fname]** in the **[First Name Field]** |
| I don't enter my **[sname]** in the **[Second Name Field]** |
| I enter my **[email]** in the required **[email_field]** |
| I don't enter my **[password]** in the required **[password_field]** |
| I don't enter my **[address]** in the **[Address Field]** |
| I enter my **[phone_num]** in the **[Phone Number Field]** |
| I click the **[Create Account Button]** |
| I am told that my account has been created unsuccessfully. |
| I am prompted to try and sign up again. |

#### Successful Sign In 👍
*A user successfully signs in using valstork_device_id credentials*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| registered user | sign in to the Stork dashboard |  set up my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| I click the **[Login Button]** |
| The system authenticates my credentials as valstork_device_id |
| I am taken to my **[user_dashboard_landing_page]** |

#### Unsuccessful Sign In 👎
*A user unsuccessfully signs in using invalstork_device_id credentials.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| registered user | sign in to the Stork dashboard |  set up my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my invalstork_device_id **[password]** in the **[password_field]** |
| I click the **[Login Button]** |
| The system authenticates my credentials as invalstork_device_id |
| I am prompted to try and log in again. |

### Stork Device User Stories
*User stories for Stork Devices*

### Valid Stork Device Registration 👍
*A user successfully registers their Stork device using valstork_device_id information.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | register a stork |  use my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| The system authenticates my credentials |
| I am brought to the **[stork_homepage]** |
| I click the **[register_stork_button]**  in the **[navbar]**  |
| I am brought to the **[register_stork_page]** |
| I enter a valstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a valstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[add_stork_button]** |
| I can see the Stork I just added is now in the list of my Storks. |

### Invalid Stork Registration 👎
*A user unsuccessfully registers their Stork device using invalstork_device_id information.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | register a stork |  use my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| The system authenticates my credentials |
| I am brought to the **[stork_homepage]** |
| I click the **[register_stork_button]**  in the **[navbar]**  |
| I am brought to the **[register_stork_page]** |
| I enter a invalstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a invalstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[add_stork_button]** |
| The system authenticates the entered details as invalstork_device_id |
| I am prompted to try and register a stork again. |

#### Valid Stork Device Edit 👍
*A user successfully edits their Stork device using valstork_device_id information.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | edit a stork |  change my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| The system authenticates my credentials as valstork_device_id |
| I am brought to the **[stork_homepage]** |
| I click the **[register_stork_button]**  in the **[navbar]**  |
| I am brought to the **[register_stork_page]** |
| I enter a valstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a valstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[add_stork_button]** |
| I can see the Stork I just added is now in the list of my Storks. |
| I click the **[Edit]** button on the first Stork in my list |
| I am brought to the **[edit_stork_page]** |
| I enter a new valstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a new valstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[update_stork_button]** |
| I can see the Stork I just edited is now in the list of my Storks with the updated info. |

#### Invalid Stork Edit 👎
*A user unsuccessfully edits their Stork device using invalstork_device_id information.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | edit a stork |  change my stork device |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| The system authenticates my credentials as valstork_device_id |
| I am brought to the **[stork_homepage]** |
| I click the **[register_stork_button]**  in the **[navbar]**  |
| I am brought to the **[register_stork_page]** |
| I enter a valstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a valstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[add_stork_button]** |
| I can see the Stork I just added is now in the list of my Storks. |
| I click the **[Edit]** button on the first Stork in my list |
| I am brought to the **[edit_stork_page]** |
| I enter a new invalstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a new invalstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[update_stork_button]** |
| I click the **[add_stork_button]** |
| The system authenticates the entered details as invalstork_device_id |
| I am prompted to try and edit the stork again. |

#### Valid Stork Device Delete 👍
*A user successfully deletes a Stork device.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | delete a stork | remove it from my account |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| The system authenticates my credentials as valstork_device_id |
| I am brought to the **[stork_homepage]** |
| I click the **[register_stork_button]**  in the **[navbar]**  |
| I am brought to the **[register_stork_page]** |
| I enter a valstork_device_id **[stork_code]** in the **[stork_code Field]** |
| I enter a valstork_device_id **[stork_nickname]** in the **[stork_nickname_field]** |
| I click the **[add_stork_button]** |
| I can see the Stork I just added is now in the list of my Storks |
| I click the **[Delete]** button on the first Stork in my list |
| I can see the Stork I just deleted is no longer in the list |

### Security User Stories
*User stories for the security of the Stork Web Application*

#### Authenticated User Accessing A Protected Route 👍
*An authenticated user is allowed navigate to a protected route as they are authenticated.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| authenticated in user | navigate to /your-storks |  see my Storks |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I click the **[sign_in_button]** and the **[Sign In View]** appears|
| I enter my valstork_device_id **[email]** in the **[email_field]** |
| I enter my valstork_device_id **[password]** in the **[password_field]** |
| I click the **[Login Button]** |
| The system authenticates my credentials as valstork_device_id |
| I am taken to my **[user_dashboard_landing_page]** |
| I navigate to Google |
| I navigate back to /your-storks |
| I am taken to my **[my_storks_page]** |
| I navigate back to /register-stork |
| I am taken to my **[register_storks_page]** |

#### An Unauthenticated User Accessing A Protected Route 👎
*An unauthenticated user is not allowed navigate to a protected route as they are not signed in. Therefore stopping them seeing other users data*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| unauthenticated in user | navigate to /your-storks |  see other users data |

| Action |
| ----------- |
| I visit the **[stork_homepage]** and I can see the **[stork_homepage]** |
| I navigate to /your-storks |
| I am taken back to the **[stork_login_page]** |
| I navigate to /register-stork |
| I am taken back to the **[stork_login_page]** |

#### Unauthorised Stork Device Edit 👎
*A user tries to edit another users Stork device.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | edit another users stork | edit their Stork |

| Action |
| ----------- |
| I somehow get the **[stork_device_id]** of another users Stork device |
| I enter /edit/ followed by the **[stork_device_id]** and try and visit that page |
| I fail to edit the Stork as I am unauthorised |

#### Unauthorised Stork Device Delete 👎
*A user tries to deletes another users Stork device.*

| As a | I want to | so that I can |
| ----------- | ----------- | ----------- |
| signed in user | delete another users stork | remove it from their account |

| Action |
| ----------- |
| I somehow get the **[stork_device_id]** of another users Stork device |
| I enter /delete/ followed by the **[stork_device_id]** and try and visit that page |
| I fail to delete the Stork as I am unauthorised |