import React, { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({ displayName: '', bio: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getProfile().then(data => {
      setUser(data);
      setForm({ displayName: data.displayName || '', bio: data.bio || '' });
    }).catch(err => {
      console.error(err);
    }).finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Not authenticated</div>;

  const save = async () => {
    try {
      const updated = await api.updateProfile(form);
      setUser(updated);
      alert('Saved');
    } catch (e) {
      alert('Error saving profile');
    }
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Your Profile</h2>
      <img src={user.avatarUrl} alt="" width={80} />
      <div>
        <label>Display name</label><br/>
        <input value={form.displayName} onChange={e => setForm({...form, displayName: e.target.value})} />
      </div>
      <div>
        <label>Bio</label><br/>
        <textarea value={form.bio} onChange={e => setForm({...form, bio: e.target.value})} />
      </div>
      <button onClick={save}>Save</button>
    </div>
  );
}
