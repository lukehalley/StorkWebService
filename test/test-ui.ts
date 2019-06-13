import { Selector } from 'testcafe';
import { ClientFunction } from 'testcafe';
import * as faker from 'faker';

import { addDevice } from './helpers/test-helpers';
import { remDevice } from './helpers/test-helpers';

const getLocation = ClientFunction(() => document.location.href);
const url = `http://18.219.152.38`;

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

const signUpPromptUnderLogin =
  'body > app-root > ng-component > section > div > div > p > a';

// Navbar buttons
const registerNavButton = 'div#storkNavbar a:nth-child(2)';
const addStorkButton = 'p > button[type="submit"]';
const saveStorkButton = 'p > button[type="submit"]';
const editStorkButton = 'footer > a:nth-child(1)';
const deleteStorkButton = 'footer > a:nth-child(2)';

// Details to Create and Edit Stork.
const storkId = 'AB1CD8';
const storkIdEdit = 'AB1CD3';
const storkNickname = 'YourNickname1234';
const storkNicknameEdit = 'YourNickname4321';
const storkTitle =
  'body > app-root > app-stork-create > div > div > div:nth-child(1) > div > p';

// Titles
const addStorkTitle = 'Register Your Stork.';
const editStorkTitle = 'Edit Your Stork.';

// Inputs
const emailField = 'input[name="inputUserLoginEmail"]';
const usernameField = 'input[name="inputUserSignUpUsername"]';
const passwordField = 'input[name="inputUserLoginPassword"]';
const firstNameField = 'input[name="inputUserSignUpFName"]';
const secondNameField = 'input[name="inputUserSignUpSName"]';
const addressField = 'input[name="inputUserSignUpAddress"]';
const phoneNumberField = 'input[name="inputUserSignUpPhoneNumber"]';

// Buttons
const signupSubmitButton = 'p > button[type="submit"]';
const loginSubmitButton = 'form > button[type="submit"]';
const logoutButton = '#storkNavbar > div.navbar-end > div > div > a > strong';
const deleteStork =
  'body > app-root > app-stork-create > div > div > div.tile.is-5.is-vertical.is-parent > div > app-stork-list > nav > div > div > div > footer > a';

// Pop Up Selectors
const popUpOkButton =
  'div.swal2-actions > button[type="button"].swal2-confirm.swal2-styled';
const popUpTitle = '#swal2-title';
const signUpUnsuccessfulMessage = 'Sign Up Unsuccessful!';
const loginUnsuccessfulMessage = 'Login Unsuccessful!';

// Stork Inputs
const inputStorkID = 'input[name="inputStorkID"]';
const inputStorkNickname = 'input[name="inputStorkNickname"]';

// Stork Main Cards List
const firstStorkListCardNickname = 'p.title';
const firstStorkListCardStorkCode = 'p.subtitle';

// Other
const selectAllAndDeleteField = 'ctrl+a delete';

// fixture`Stork`.page`http://18.219.152.38`;

fixture`Stork`.page`http://18.219.152.38`;
// .before(async ctx => {
//   console.log('BEFORE: ');
//   // Remove the device just in case it exists
//   await remDevice(storkId);
//   // Add the device
//   await addDevice(storkId);
// })
// .after(async ctx => {
//   console.log('AFTER: ');
//   // Remove the user
//   await remDevice(storkId);
// });

test('Valid Sign Up + Sign In With Valid Credentials', async t => {
  console.log('BEFORE: ');
  // Remove the device just in case it exists
  await remDevice(storkId);
  // Add the device
  await addDevice(storkId);
  await t
    // Click the 'Don't have an account? Sign Up'
    .click(signUpPromptUnderLogin)

    // Fill in the fields of the user
    .typeText(usernameField, usernameValid)
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .typeText(firstNameField, fNameValid)
    .typeText(secondNameField, sNameValid)
    .typeText(addressField, addressValid)
    .typeText(phoneNumberField, phoneValid)

    // Create user, should be brought to the sign in page.
    .click(signupSubmitButton)
    .expect(getLocation())
    .contains('/login')

    // Sign in with the details.
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .click(loginSubmitButton)

    // If the sign in went correctly you should be brought to the list of the users Storks.
    .expect(getLocation())
    .contains('/storks/your-storks')
    .click(logoutButton)
    .expect(getLocation())
    .contains('/login');
});

test('Sign Up With A Duplicate Email', async t => {
  const signupErrorExists = Selector(popUpTitle).withExactText(
    signUpUnsuccessfulMessage
  ).exists;
  await t
    // Fill in the fields of the user but use the same Email as the above test.
    .click(signUpPromptUnderLogin)
    .typeText(usernameField, usernameInvalid)
    .typeText(emailField, emailValid)
    .typeText(passwordField, passInvalid)
    .typeText(firstNameField, fNameInvalid)
    .typeText(secondNameField, sNameInvalid)
    .typeText(addressField, addressInvalid)
    .typeText(phoneNumberField, phoneInvalid)
    .click(signupSubmitButton)
    // The pop error should appear with the message.
    .expect(signupErrorExists)
    .ok()
    .click(popUpOkButton);
});

test('Sign Up With A Duplicate Username', async t => {
  // Sign in with a correct password but a wrong email.
  const signupErrorExists = Selector(popUpTitle).withExactText(
    signUpUnsuccessfulMessage
  ).exists;
  await t
    // Fill in the fields of the user but use the same Username as the above test.
    .click(signUpPromptUnderLogin)
    .typeText(usernameField, usernameValid)
    .typeText(emailField, emailInvalid)
    .typeText(passwordField, passInvalid)
    .typeText(firstNameField, fNameInvalid)
    .typeText(secondNameField, sNameInvalid)
    .typeText(addressField, addressInvalid)
    .typeText(phoneNumberField, phoneInvalid)
    .click(signupSubmitButton)
    // The pop error should appear with the message.
    .expect(signupErrorExists)
    .ok()
    .click(popUpOkButton);
});

test('Sign In With Invalid Email', async t => {
  // Sign in with a correct password but a wrong email.
  const loginErrorExists = Selector(popUpTitle).withExactText(
    loginUnsuccessfulMessage
  ).exists;
  await t
    .typeText(emailField, 'stork@ireland.ie')
    .typeText(passwordField, passValid)
    .click(loginSubmitButton)
    .expect(loginErrorExists)
    .ok();
});

test('Sign In With Invalid Password', async t => {
  // Sign in with a correct email but a wrong password.
  const loginErrorExists = Selector(popUpTitle).withExactText(
    loginUnsuccessfulMessage
  ).exists;
  await t
    .typeText(emailField, emailValid)
    .typeText(passwordField, 'wrongpassword')
    .click(loginSubmitButton)
    .expect(loginErrorExists)
    .ok();
});

test('Register, Edit and Delete A Stork', async t => {
  await t
    // Login with correct details.
    .typeText(emailField, emailValid)
    .typeText(passwordField, passValid)
    .click(loginSubmitButton)
    .expect(getLocation())
    .contains('/storks/your-storks')
    // Click the register button in the navbar.
    .click(registerNavButton)
    .expect(getLocation())
    .contains('/storks/register-stork')
    // The title should say 'Register Your Stork.'
    .expect(Selector(storkTitle).withExactText(addStorkTitle).exists)
    .ok()
    // Enter the Stork details - storkId and storkNickname.
    .typeText(inputStorkID, storkId)
    .typeText(inputStorkNickname, storkNickname)
    .expect(Selector(addStorkButton).textContent)
    .contains('Add')
    .click(addStorkButton)
    .expect(getLocation())
    // If the Stork register goes correctly the user should be brought to the list of the users Stork list.
    // The details the user just entered should be seen on the first card.
    .contains('/storks/your-storks')
    .expect(
      Selector(firstStorkListCardNickname).withExactText(storkNickname).exists
    )
    .ok()
    .expect(Selector(firstStorkListCardStorkCode).withExactText(storkId).exists)
    .ok()
    // Click the edit button on the first Stork card.
    .click(editStorkButton)
    .expect(getLocation())
    // The user should be brought to the edit page.
    .contains('/storks/edit/')
    // Check the Sublist of the users current Storks
    .expect(
      Selector(firstStorkListCardNickname).withExactText(storkNickname).exists
    )
    .ok()
    .expect(Selector(firstStorkListCardStorkCode).withExactText(storkId).exists)
    .ok()
    // Check the title, it should be 'Edit Your Stork.
    .expect(Selector(storkTitle).withExactText(editStorkTitle).exists)
    .ok()
    // Clear the text from the nickname field.
    .click(inputStorkNickname)
    .pressKey(selectAllAndDeleteField)
    .typeText(inputStorkNickname, storkNicknameEdit)
    // Save the Stork by pressing the Save button
    .expect(Selector(saveStorkButton).textContent)
    .contains('Save')
    .click(saveStorkButton)
    .expect(getLocation())
    .contains('/storks/your-storks')
    .expect(
      Selector(firstStorkListCardNickname).withExactText(storkNicknameEdit)
        .exists
    )
    .ok()
    // Click the edit button on the first Stork card.
    .click(editStorkButton)
    .expect(getLocation())
    // The user should be brought to the edit page.
    .contains('/storks/edit/')
    .click(deleteStork)
    .click(logoutButton)
    .expect(getLocation())
    .contains('/login');
  console.log('AFTER: ');
  // Remove the user
  await remDevice(storkId);
});
