const OpenAI = require('openai');

const openai = new OpenAI({
  key: process.env.OPENAI_API_KEY, 
  model: 'gpt-3.5-turbo',
});

const completeChat = async (req, res) => {
  try {
    const { partial_text } = req.body;

    if (!partial_text) {
      return res.status(400).json({ error: 'Invalid input. Missing partial_text field.' });
    }

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: partial_text },
      ],
      model: 'gpt-3.5-turbo',
    });

    const completed_text = completion.choices[0].message.content;
    
    return res.status(200).json({ completed_text });
  } catch (error) {
    console.error('Error:', error.message);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = {
  completeChat,
};
