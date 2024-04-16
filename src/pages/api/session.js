import axios from "axios";
import cheerio from "cheerio";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36";
export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Accept, Authorization"
  );
  const { query } = req.body;
  const accessKey = "adb0cfcc77074ab38735db68a601a3a0";
  const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${query}&safeSearch=Strict&mkt=en-IN&responseFilter=news`;
  try {
    const response = await axios.get(endpoint, {
      headers: {
        "Ocp-Apim-Subscription-Key": accessKey,
      },
    });
    const { value: news } = response.data?.news || { value: [] };

    const formattedNews = news.map((item) => ({
      name: item.name,
      description: item.description,
      imageUrl: item.image?.contentUrl || null,
    }));
    console.log(formattedNews);
    return res.status(200).json({ newsdata: formattedNews });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
