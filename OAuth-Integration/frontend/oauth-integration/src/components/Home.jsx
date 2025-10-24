import React from 'react';

const Home = () => {
  const loginUrl = (provider) => `/oauth2/authorization/${provider}`; // matches spring endpoint

  return (
    <div style={{ padding: 24 }}>
      <h1>OAuth2 Integration</h1>
      <p>Login using Google or GitHub</p>
      <div style={{ display: 'flex', gap: 12 }}>
        <a href={loginUrl('google')}>
          <button>Login with Google</button>
        </a>
        <a href={loginUrl('github')}>
          <button>Login with GitHub</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
