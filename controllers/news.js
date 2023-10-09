

async function getNews(req, res) {
  const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`)
  const news = await apiResponse.json()
  res.json(news)
}

export {
  getNews
}