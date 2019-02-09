import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href);
import * as faker from 'faker';

const url = `http://87.44.18.111:4200`;

// tslint:disable-next-line:no-unused-expression
fixture`User Accounts.`.page(url);

test('Valid Sign Up + Sign In With Valid Credentials', async t => {
  const fName = faker.name.firstName();
  const sName = faker.name.lastName();
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const pass = faker.internet.password();
  const address = faker.address.streetAddress();
  const phone = faker.phone.phoneNumber();
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
    .eql(url + '/login')
    .typeText('input[name="inputUserLoginEmail"]', email)
    .typeText('input[name="inputUserLoginPassword"]', pass)
    .click('form > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/storks/your-storks');
});

test('Attempt To Sign Up With The Same  Username', async t => {
  const fName = faker.name.firstName();
  const sName = faker.name.lastName();
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const pass = faker.internet.password();
  const address = faker.address.streetAddress();
  const phone = faker.phone.phoneNumber();
  const signupErrorExists = Selector('#swal2-title').withExactText(
    'Sign Up Unsuccessful!'
  ).exists;
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
    .eql(url + '/login')
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText('input[name="inputUserSignUpUsername"]', username)
    .typeText('input[name="inputUserLoginEmail"]', faker.internet.email())
    .typeText('input[name="inputUserLoginPassword"]', faker.internet.password())
    .typeText('input[name="inputUserSignUpFName"]', faker.name.firstName())
    .typeText('input[name="inputUserSignUpSName"]', faker.name.lastName())
    .typeText(
      'input[name="inputUserSignUpAddress"]',
      faker.address.streetAddress()
    )
    .typeText(
      'input[name="inputUserSignUpPhoneNumber"]',
      faker.phone.phoneNumber()
    )
    .click('p > button[type="submit"]')
    .expect(signupErrorExists)
    .ok()
    .click(
      'div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled'
    );
});

test('Valid Sign Up + Sign In With Invalid Credentials', async t => {
  const fName = faker.name.firstName();
  const sName = faker.name.lastName();
  const username = faker.internet.userName();
  const email = faker.internet.email();
  const pass = faker.internet.password();
  const address = faker.address.streetAddress();
  const phone = faker.phone.phoneNumber();
  const loginErrorExists = Selector('#swal2-title').withExactText(
    'Login Unsuccessful!'
  ).exists;
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
    .eql(url + '/login')
    .typeText('input[name="inputUserLoginEmail"]', email)
    .typeText('input[name="inputUserLoginPassword"]', 'wrong')
    .click('form > button[type="submit"]')
    .expect(loginErrorExists)
    .ok();
});
