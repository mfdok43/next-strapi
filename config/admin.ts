export default ({ env }) => ({
  auth: {
    secret: "BAAtSNZSMzfWsyK5G3CqyA==",
  },
  apiToken: {
    salt: "p4O0rv+Q2kQIDMMZ9w10AQ==",
  },
  transfer: {
    token: {
      salt: "SrECpdbaqryXKdktDHGjcA==",
    },
  },
  secrets: {
    encryptionKey: "8EygFu15mWBjDkmWa6x8kw==",
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
