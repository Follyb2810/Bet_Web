export default function Unauthorized() {
  return <h1>403 - You do not have permission to view this page</h1>;
}

// import { serialize } from 'cookie';

// res.setHeader('Set-Cookie', [
//   serialize('token', user.token, { path: '/', httpOnly: true }),
//   serialize('role', user.role, { path: '/', httpOnly: true }),
// ]);
