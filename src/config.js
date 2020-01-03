//A couple of notes here.
// Amplify refers to Cognito as Auth , S3 as Storage , and API Gateway as API. The mandatorySignIn flag for Auth is set to true because we want our users to be signed in before they can interact with our app. The name: "notes" is basically telling Amplify that we want to name our API. Amplify allows you to add mul9ple APIs that your app is going to work with. In our case our en9re backend is just one single API. The Amplify.configure() is just se\ng the various AWS resources that we want to interact with. It isn’t doing anything else special here beside configura9on. 

export default {
    s3: {
        REGION: "us-west-2",
        BUCKET: "notes-seemee-uploads"
    }, 
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://uab5a0859j.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_i7GiQoGD0", 
        APP_CLIENT_ID: "67sr2rr6dmeci5g2vn44vsgup9", IDENTITY_POOL_ID: "us-west-2:9cbf4c73-a756-4ae6-a50f-0ccf83741171"
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_DTF7gdkLp8rI07ZKix49C2oZ008XqEo4F1",
};