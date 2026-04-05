const BOT_PATTERN = new RegExp(
  [
    // 汎用キーワード
    "bot",
    "crawler",
    "spider",
    "crawl",
    "scraper",
    "scrape",
    // ヘッドレス・自動化
    "headless",
    "phantom",
    "selenium",
    "puppeteer",
    "playwright",
    "webdriver",
    // レンダリング・プリレンダ
    "prerender",
    "rendertron",
    "googleweblight",
    // 監視・テスト
    "lighthouse",
    "pingdom",
    "uptimerobot",
    "statuscake",
    "newrelic",
    "datadog",
    // 検索エンジン
    "googlebot",
    "bingbot",
    "slurp",
    "duckduckbot",
    "baiduspider",
    "yandexbot",
    "sogou",
    "exabot",
    "facebot",
    // SNS プレビュー
    "facebookexternalhit",
    "twitterbot",
    "linkedinbot",
    "whatsapp",
    "slackbot",
    "discordbot",
    "telegrambot",
    "line-poker",
    // SEO ツール
    "ahrefsbot",
    "semrushbot",
    "mj12bot",
    "dotbot",
    "rogerbot",
    "seznambot",
    "blexbot",
    "sistrix",
    // AI クローラー
    "gptbot",
    "claudebot",
    "anthropic-ai",
    "ccbot",
    "chatgpt-user",
    "cohere-ai",
    "perplexitybot",
    "youbot",
    // アーカイブ
    "archive.org_bot",
    "ia_archiver",
    "wayback",
    // セキュリティスキャナー
    "nikto",
    "sqlmap",
    "nessus",
    "masscan",
    "zgrab",
    // HTTP クライアント（スクリプト系）
    "python-requests",
    "python-urllib",
    "curl",
    "wget",
    "axios",
    "node-fetch",
    "go-http-client",
    "java/",
    "libwww",
    "okhttp",
    "httpie",
    "httpx",
  ].join("|"),
  "i",
);

export function isBot(ua: string): boolean {
  if (!ua || ua.trim().length < 10) return true;
  return BOT_PATTERN.test(ua);
}
