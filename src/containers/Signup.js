// So the signup flow will look something like this:
// 1. The user types in their email, password, and confirms their password.
// 2. We sign them up with Amazon Cognito using the AWS Amplify library and get a user object in return.
// 3. We then render a form to accept the confirmaBon code that AWS Cognito has emailed to them.
// 4. We confirm the sign up by sending the confirmaBon code to AWS Cognito.
// 5. We authenBcate the newly created user.
// 6. Finally, we update the app state with the session.