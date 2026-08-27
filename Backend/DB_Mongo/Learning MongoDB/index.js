import { MongoClient } from 'mongodb';


async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://shahbazalicgs5624_db_user:6RZovWeKFhqzPwEm@cluster0.7a3kv8t.mongodb.net/';
  const client = new MongoClient(uri);
  try {
    const database = client.db('Hospital');
    const movies = database.collection('Paisent');
    // Queries for a movie that has a title value of 'Back to the Future'
    // url, database
    const query = { title: 'Back to the Future' };
    const movie = await movies.insertMany([  // insert data
  {
    item: 'journal',
    qty: 25,
    tags: ['blank', 'red'],
    size: { h: 14, w: 21, uom: 'cm' }
  },
  {
    item: 'mat',
    qty: 85,
    tags: ['gray'],
    size: { h: 27.9, w: 35.5, uom: 'cm' }
  },
  {
    item: 'mousepad',
    qty: 25,
    tags: ['gel', 'blue'],
    size: { h: 19, w: 22.85, uom: 'cm' }
  }
])
    console.log(movie);
  } finally {
    await client.close();
  }
}

runGetStarted().catch(console.dir);