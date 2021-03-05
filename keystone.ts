import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const databaseURL =
  process.env.DATABASE_URL ||
  'mongodb+srv://admin:password@193.46.198.75:27017/maps?retryWrites=true&w=majority';

// jwt cookie
const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
    },
  },
  db: {
    adapter: 'mongoose',
    use: databaseURL,
    // TODO: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
  }),

  ui: {
    // TODO: change this for roles
    isAccessAllowed: () => true,
  },
  // TODO: Add session values here
});
