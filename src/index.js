import { app } from './app.js';

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Feathers server running on http://localhost:${port}`);
});
