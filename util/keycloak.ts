const postFormData = async (url = '', data = {}) => {
  const searchParams = new URLSearchParams(data);
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: searchParams
  });

  return response.json();
}

const getAuthToken = async () => {
  const response = await postFormData(`${process.env.FEATURELOOP_CLIENT_ISSUER}/protocol/openid-connect/token`, {
    'client_id': process.env.FEATURELOOP_CLIENT_ID,
    'client_secret': process.env.FEATURELOOP_CLIENT_SECRET,
    'username': process.env.FEATURELOOP_SUPPORT_USER,
    'password': process.env.FEATURELOOP_SUPPORT_PASS,
    'grant_type': "password"
  });

  return response;
}

const getAuthorizedJsonResponse = async (url: string) => {
  const { access_token } = await getAuthToken();

  if (!access_token) {
    return null;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${access_token}` },
  });

  return response.json();
}

export { postFormData, getAuthorizedJsonResponse, getAuthToken };
