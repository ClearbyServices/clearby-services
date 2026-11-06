import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Clearby Services Legacy URLs redirecting to Root (/)
      ...[
        "/corporatesocialmediamarketing",
        "/contactus",
        "/privacy-policy",
        "/whatsapp-business-api",
        "/political-campaign-social-marketing/printing-material",
        "/political-campaign-social-marketing/booth-management",
        "/political-campaign-social-marketing/e-campagion",
        "/political-campaign-social-marketing/election-software",
        "/corporate-social-media-marketing/sms-marketing",
        "/corporate-social-media-marketing/marketing-campaigns",
        "/corporate-social-media-marketing/website-development",
        "/corporate-social-media-marketing/lead-generation",
        "/political-campaign-social-marketing/political-campaign",
        "/political-campaign-social-marketing/voter-slip-printer",
        "/corporate-social-media-marketing/whatsapp-business-api",
        "/corporate-social-media-marketing/audio-visual-advertisement",
        "/political-campaign-social-marketing/social-media-war-room",
        "/political-campaign-social-marketing/image-building-%26-pr",
        "/corporate-social-media-marketing/ivr-(interactive-voice-response)",
        "/corporate-social-media-marketing/search-engine-optimization-(seo)",
      ].map((source) => ({
        source,
        destination: "/",
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;