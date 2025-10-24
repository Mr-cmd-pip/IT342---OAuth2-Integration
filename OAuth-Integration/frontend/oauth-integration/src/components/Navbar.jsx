import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Navbar() {
  const [me, setMe] = useState(null);
  useEffect(() => {
    api.me().then(setMe).catch(() => setMe(null));
  }, []);
  return (
    <nav style={{ padding: 12, borderBottom: '1px solid #ddd' }}>
      <a href="/">Home</a> | {' '}
      {me?.authenticated ? (
        <>
          <a href="/profile">Profile</a> | <a href="http://localhost:8080/logout">Logout</a>
        </>
      ) : (
        <>
          <a href="/oauth2/authorization/google">Login Google</a> | <a href="/oauth2/authorization/github">Login GitHub</a>
        </>
      )}
    </nav>
  );
}
