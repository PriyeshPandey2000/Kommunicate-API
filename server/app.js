const express = require('express');
const bodyParser = require('body-parser');
const errorMiddleware = require('./middleware/errorMiddleware');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api', chatRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Log unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
