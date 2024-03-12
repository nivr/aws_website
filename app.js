import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'COGNITO_IDENTITY_POOL_ID',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: '4e66c10351e74fe7901f81a18ade9b89',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

//Record an event
Analytics.record('some-event-name');

//Record a custom event
Analytics.record({
    name: 'Album',
    attributes: { genre: 'Rock', year: '1989' }
});
