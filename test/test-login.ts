import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href);
import * as faker from 'faker';

const url = `http://87.44.18.111:4200`;

// User Information
const fName = faker.name.firstName();
const sName = faker.name.lastName();
const username = faker.internet.userName();
const email = faker.internet.email();
const pass = faker.internet.password();
const address = faker.address.streetAddress();
const phone = faker.phone.phoneNumber();

// tslint:disable-next-line:no-unused-expression
fixture`User Accounts.`.page(url);

test('Sign Up to Stork as a User.', async t => {
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText('input[name="inputUserSignUpUsername"]', username)
    .typeText('input[name="inputUserLoginEmail"]', email)
    .typeText('input[name="inputUserLoginPassword"]', pass)
    .typeText('input[name="inputUserSignUpFName"]', fName)
    .typeText('input[name="inputUserSignUpSName"]', sName)
    .typeText('input[name="inputUserSignUpAddress"]', address)
    .typeText('input[name="inputUserSignUpPhoneNumber"]', phone)
    .click('p > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/login');
});

test('Login to Stork as a User.', async t => {
  await t
    .typeText('input[name="inputUserLoginEmail"]', email)
    .typeText('input[name="inputUserLoginPassword"]', pass)
    .click('form > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/storks/your-storks');
});
