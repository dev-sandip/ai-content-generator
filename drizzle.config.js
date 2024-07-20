/** @type { import("drizzle-kit").Config } */
const config = {
    schema: "./src/utils/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        url: "postgresql://ai-content-generator_owner:8wDXWTBfpm2r@ep-red-voice-a1cz7gpv.ap-southeast-1.aws.neon.tech/ai-content-generator?sslmode=require",
    }
};

export default config;