// Add only approved Aquafeel customer evidence. Keep private source notes outside dist/.
// Set approved:true only after attribution, permission and the source have been checked.
window.AQUAFEEL_CONTENT = {
  reviewMode: true,
  defaultLanguage: "en",
  reviews: [
    { platform: "Google", approved: false, quote: "", author: "", sourceUrl: "" },
    { platform: "Yelp", approved: false, quote: "", author: "", sourceUrl: "" },
    { platform: "Trustpilot", approved: false, quote: "", author: "", sourceUrl: "" }
  ],
  videos: [
    // Both videos are spoken in Spanish with captions burned into the video. Vertical 9:16 phone recordings.
    // name is the accessible (screen reader) name; the visible label is hidden with hideLabel.
    { language: "es", approved: true, orientation: "portrait", hideLabel: true, name: "Testimonio en español (1)", src: "assets/testimonial-es.mp4", poster: "assets/testimonial-es-poster.jpg", captions: "" },
    // Original was a square file with black side bars; cropped to 9:16 to match the first video.
    { language: "es", approved: true, orientation: "portrait", hideLabel: true, name: "Testimonio en español (2)", src: "assets/testimonial-es-2.mp4", poster: "assets/testimonial-es-2-poster.jpg", captions: "" }
  ],
  // Lewis owns the new GHL flow. Do not substitute the archived booking URL.
  booking: { approved: false, embedUrl: "" }
};
