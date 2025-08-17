const ALLOW_BOTS = [
  "360Spider",
  "AdsBot-Google",
  "AhrefsBot",
  "Amazonbot",
  "Applebot",
  "archive.org_bot",
  "Baiduspider",
  "Baiduspider-image",
  "Baiduspider-video",
  "Bingbot",
  "BingPreview",
  "BLEXBot",
  "coccocbot",
  "DataForSeoBot",
  "DuckAssistBot",
  "DuckDuckBot",
  "Exabot",
  "Facebookexternalhit",
  "FeedlyBot",
  "Google-InspectionTool",
  "Google-PageRenderer",
  "Googlebot",
  "Googlebot-Image",
  "Googlebot-News",
  "Googlebot-Video",
  "Linebot",
  "MJ12bot",
  "Mediapartners-Google",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "linkdexbot",
  "Nimbostratus-Bot",
  "PetalBot",
  "Qwantify",
  "rogerbot",
  "searchbot",
  "SEOkicks",
  "SemrushBot",
  "Sogou",
  "Sogou web spider",
  "Storebot-Google",
  "Twitterbot",
  "Uptimebot",
  "Yahoo! Slurp",
  "YandexBot",
  "YisouSpider",
  "heritrix",
  "Slack-ImgProxy",
  "Slackbot-LinkExpanding",
  "SlackBot",
  "Steeler",
  "Datadog/Synthetics",
  "notebot"
];

const ALLOW_RULES = ALLOW_BOTS.map(bot => ({
  userAgent: bot,
  allow: "/"
}));

export default function robots() {
  return {
    rules: [...ALLOW_RULES],
    sitemap: `https://www.yuito-it.jp/sitemap.xml`
  };
}
