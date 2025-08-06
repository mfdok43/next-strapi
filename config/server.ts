export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: ["qE8TAuqOBPkYmjSBqzQgvw==","dUogiw6EU90QohZqKO6Vfw==","7coV/OkhKEkmEE40TtaqOQ==","2w5rhcONBQJEq8rjA4wC6Q=="]
  },
});
