import { ConfigService } from "./ConfigService";

export { ConfigService };

if (process.env.NODE_ENV === "development") {
  (window as any).configs = ConfigService;
}
