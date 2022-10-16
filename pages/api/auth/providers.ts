import { getAuthorizedJsonResponse } from '@/util/keycloak';

export const handler = async (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const providers = await getAuthorizedJsonResponse(`${process.env.FEATURELOOP_CLIENT_URL}/admin/realms/${process.env.FEATURELOOP_CLIENT_REALM}/identity-provider/instances`);

  const results = providers.filter(provider => provider.enabled).map(x => ({
    alias: x.alias,
    providerId: x.providerId
  }));

  return res.status(200).json(results);
}

export default handler;