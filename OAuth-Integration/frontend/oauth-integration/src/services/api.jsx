const BASE = process.env.REACT_APP_API_BASE || "http://localhost:8080";

async function fetchWithCredentials(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...(opts.headers || {})
    },
    ...opts
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export const api = {
  getProfile: () => fetchWithCredentials('/api/profile'),
  updateProfile: (data) => fetchWithCredentials('/api/profile', {
    method: 'POST',
    body: JSON.stringify(data)
  }),
  // endpoint to check authentication
  me: () => fetchWithCredentials('/api/public/me')
};
