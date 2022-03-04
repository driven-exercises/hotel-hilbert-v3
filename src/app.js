import express from 'express';
import connection from './database/database.js';

const app = express();
app.use(express.json());

app.get('/allocations', async (req, res) => {
  try {
    let offset = '';
    if (req.query.offset) {

    }

    let limit = '';
    if (req.query.limit) {

    }

    let orderBy = '';
    if (req.query.order) {

    }

    const result = await connection.query(`
      SELECT 
        a.*, 
        r.name AS "roomName", 
        g.name AS "guestName" 
      FROM allocations a
        JOIN rooms r ON a."roomId"=r.id
        JOIN guests g ON a."guestId"=g.id
      ${orderBy}
      ${limit}
      ${offset}
    `);

    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server is listening on port 4000.');
});