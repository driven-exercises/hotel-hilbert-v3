import express from 'express';
import connection from './database/database.js';

const app = express();
app.use(express.json());

app.get('/allocations', async (req, res) => {
  try {
    // busque o histórico de hospedagens, junto das informações do cliente e do quarto
    // const resultGuests = await connection.query('select * from guests');
    // const resultRooms = await connection.query('select * from rooms');
    // const resultAllocations = await connection.query('select * from allocations');

    // const allocations = resultAllocations.rows.map(allocation => ({
    //   ...allocation,
    //   guestName: resultGuests.rows.find(guest => guest.id === allocation.guestId).name,
    //   roomName: resultRooms.rows.find(room => room.id === allocation.roomId).name,
    // }));

    const result = await connection.query(`
      SELECT a.*, r.name AS "roomName", g.name AS "guestName" 
        FROM allocations a
          JOIN rooms r ON a."roomId"=r.id
          JOIN guests g ON a."guestId"=g.id
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