// //A couple of notes here.
// // Amplify refers to Cognito as Auth , S3 as Storage , and API Gateway as API. The mandatorySignIn flag for Auth is set to true because we want our users to be signed in before they can interact with our app. The name: "notes" is basically telling Amplify that we want to name our API. Amplify allows you to add mul9ple APIs that your app is going to work with. In our case our en9re backend is just one single API. The Amplify.configure() is just se\ng the various AWS resources that we want to interact with. It isn’t doing anything else special here beside configura9on. 

// export default {
//     s3: {
//         REGION: "us-west-2",
//         BUCKET: "notes-seemee-uploads"
//     }, 
//     apiGateway: {
//         REGION: "us-west-2",
//         URL: "https://uab5a0859j.execute-api.us-west-2.amazonaws.com/prod"
//     },
//     cognito: {
//         REGION: "us-west-2",
//         USER_POOL_ID: "us-west-2_i7GiQoGD0", 
//         APP_CLIENT_ID: "67sr2rr6dmeci5g2vn44vsgup9", IDENTITY_POOL_ID: "us-west-2:9cbf4c73-a756-4ae6-a50f-0ccf83741171"
//     },
//     MAX_ATTACHMENT_SIZE: 5000000,
//     STRIPE_KEY: "pk_test_DTF7gdkLp8rI07ZKix49C2oZ008XqEo4F1"
// };

const dev = {
    STRIPE_KEY: "pk_test_DTF7gdkLp8rI07ZKix49C2oZ008XqEo4F1Y",
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-demo-api-dev-attachmentsbucket-1fgl9460ztppu"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://tgeconp3u8.execute-api.us-west-2.amazonaws.com/dev"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_pyc8exny9",
      APP_CLIENT_ID: "34gqnik65ce8uhrtfi0bpkpd0",
      IDENTITY_POOL_ID: "us-west-2:2b8beda5-ab66-4ff3-8bbb-cb5117bec44f"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_DTF7gdkLp8rI07ZKix49C2oZ008XqEo4F1",
    s3: {
      REGION: "us-west-2",
      BUCKET: "notes-app-demo-api-prod-attachmentsbucket-ysh9fibprayd"
    },
    apiGateway: {
      REGION: "us-west-2",
      URL: "https://5o58mv4013.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-west-2",
      USER_POOL_ID: "us-west-2_5eEZkG5xO",
      APP_CLIENT_ID: "55remo35skgoh1hja08cmnh0us",
      IDENTITY_POOL_ID: "us-west-2:beef767f-868d-4c08-be42-2cebf26fb99f"
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
  
  export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
  };