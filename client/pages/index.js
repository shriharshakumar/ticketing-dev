import buildClient from '../api/build-client';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser)
  return currentUser !== 'Is null' ? (<h1>You are Signed in!</h1>):(<h1>You are NOT signed in.</h1>)
};

LandingPage.getInitialProps = async (context) => {
  
  const { data } = await buildClient(context).get('/api/users/currentuser');

  return data;

}

export default LandingPage;