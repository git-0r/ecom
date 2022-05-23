export const authHeader = (token) => {
  return { headers: { token: `Bearer ${token}` } };
};
