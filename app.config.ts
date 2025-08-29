import "dotenv/config";
import { ExpoConfig } from "expo/config";

export default ({ config }: { config: ExpoConfig }): ExpoConfig => ({
  ...config,
  extra: {
    API_URL: process.env.BASE_URL,
    SENTRY_DSN: process.env.API_KEY,
  },
});
