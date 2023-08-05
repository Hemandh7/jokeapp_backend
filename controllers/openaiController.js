const openai = require('../config/openaiConfig')

const generateJoke = async (req, res) => {
  const {title} = req.body

  const joke= await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: 'user',
        content: `Come up with a joke based on the given ${title}`
      }
    ],
    max_tokens: 100
  })

  console.log(joke.data.choices[0].message)

  const story = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
      role: 'user',
      content:`come up with a funny story for the given ${title}`
    }],
    max_tokens: 100
  })

  res.status(200).json({
    joke: joke.data.choices[0].message,
    story: story.data.choices[0].message
  })
}

const generateImage = async (req, res) => {

  const image = await openai.createImage({
    prompt: req.body.prompt,
    n: 1,
    size: '512x512'
  })

  res.json({
    url: image.data.data[0].url
  })
}

module.exports = { generateJoke, generateImage }