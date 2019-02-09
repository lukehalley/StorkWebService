import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
const getLocation = ClientFunction(() => document.location.href);
import * as faker from 'faker';

const url = `http://87.44.18.111:4200`;

// tslint:disable-next-line:no-unused-expression
fixture`User Accounts.`.page(url);
const fNameValid = faker.name.firstName();
const sNameValid = faker.name.lastName();
const usernameValid = faker.internet.userName();
const emailValid = faker.internet.email();
const passValid = faker.internet.password();
const addressValid = faker.address.streetAddress();
const phoneValid = faker.phone.phoneNumber();

const fNameInvalid = faker.name.firstName();
const sNameInvalid = faker.name.lastName();
const usernameInvalid = faker.internet.userName();
const emailInvalid = faker.internet.email();
const passInvalid = faker.internet.password();
const addressInvalid = faker.address.streetAddress();
const phoneInvalid = faker.phone.phoneNumber();

test('Valid Sign Up + Sign In With Valid Credentials', async t => {
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText('input[name="inputUserSignUpUsername"]', usernameValid)
    .typeText('input[name="inputUserLoginEmail"]', emailValid)
    .typeText('input[name="inputUserLoginPassword"]', passValid)
    .typeText('input[name="inputUserSignUpFName"]', fNameValid)
    .typeText('input[name="inputUserSignUpSName"]', sNameValid)
    .typeText('input[name="inputUserSignUpAddress"]', addressValid)
    .typeText('input[name="inputUserSignUpPhoneNumber"]', phoneValid)
    .click('p > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/login')
    .typeText('input[name="inputUserLoginEmail"]', emailValid)
    .typeText('input[name="inputUserLoginPassword"]', passValid)
    .click('form > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/storks/your-storks');
});

test('Invalid Sign Up: Duplicate Email', async t => {
  const signupErrorExists = Selector('#swal2-title').withExactText(
    'Sign Up Unsuccessful!'
  ).exists;
  await t
    .click('body > app-root > ng-component > section > div > div > p > a')
    .typeText('input[name="inputUserSignUpUsername"]', usernameInvalid)
    .typeText('input[name="inputUserLoginEmail"]', emailValid)
    .typeText('input[name="inputUserLoginPassword"]', passInvalid)
    .typeText('input[name="inputUserSignUpFName"]', fNameInvalid)
    .typeText('input[name="inputUserSignUpSName"]', sNameInvalid)
    .typeText('input[name="inputUserSignUpAddress"]', addressInvalid)
    .typeText('input[name="inputUserSignUpPhoneNumber"]', phoneInvalid)
    .click('p > button[type="submit"]')
    .expect(signupErrorExists)
    .ok()
    .click(
      'div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled'
    );
});

test('Valid Sign Up + Invalid Sign In: Invalid Credentials', async t => {
  const loginErrorExists = Selector('#swal2-title').withExactText(
    'Login Unsuccessful!'
  ).exists;
  await t
    .typeText('input[name="inputUserLoginEmail"]', emailValid)
    .typeText('input[name="inputUserLoginPassword"]', 'wrongpassword')
    .click('form > button[type="submit"]')
    .expect(loginErrorExists)
    .ok();
});

test('Register A Stork: Error Checking ', async t => {
  const registerNavButton = 'div#storkNavbar a:nth-child(2)';
  const addStorkButton = 'p > button[type="submit"]';
  const storkId = 'STR1234';
  const storkNickname = 'YourNickname1234';
  await t
    .typeText('input[name="inputUserLoginEmail"]', emailValid)
    .typeText('input[name="inputUserLoginPassword"]', passValid)
    .click('form > button[type="submit"]')
    .expect(getLocation())
    .eql(url + '/storks/your-storks')
    .click(registerNavButton)
    .expect(getLocation())
    .eql(url + '/storks/register-stork')
    .typeText('input[name="inputStorkID"]', storkId)
    .typeText('input[name="inputStorkNickname"]', storkNickname)
    .click(addStorkButton)
    .expect(getLocation())
    .eql(url + '/storks/your-storks')
    .expect(Selector('p.subtitle').withExactText(storkId).exists)
    .ok()
    .expect(Selector('p.subtitle').withExactText(storkId).exists)
    .ok();
});
