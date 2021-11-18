export default {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  MAX_LENGTH_VIDEO: 15,
  VIDEO_WATCH_TIME_PERCENTAGE: 25,
  finderType: [
    { id: 1, value: 'coach', name: 'Coach' },
    { id: 2, value: 'sport_director', name: 'Sport director' },
    { id: 3, value: 'agent', name: 'Agent' },
    { id: 4, value: 'brand_manager', name: 'Brand manager' }
  ],
  privacyType: [
    { id: 1, value: 'anonymous', name: 'Private' },
    { id: 2, value: 'open', name: 'Public' }
  ],
  meta: {
    KEYWORDS: "sports, athletes, sportstech, sqill, video, app, android, ios, talent, football, technology, AI, video, portugal, startup, clubs, agents, brands, players, federations, associations, streaming, mobile, squill",
    DESCRIPTION: "sqill is the video app for athletes. We are disrupting the sports industry through short-form vídeos (sqills) and artificial intelligence, showcasing talent (athletes) and connecting them with demand (clubs, agents and brands)."

  }
}