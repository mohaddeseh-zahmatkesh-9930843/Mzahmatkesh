const { MongoClient } = require('mongodb');

// Replace 'your-mongodb-uri' with your actual MongoDB connection string
const uri = '<your-connection-string>';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectAndInsertMany() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('mongoP1'); // Replace 'your-database-name' with your actual database name
    const collection = db.collection('posts');

    // Insert multiple documents
    const result = await collection.insertMany([
      {
        title: "Post Title 2",
        body: "Body of post.",
        category: "Event",
        likes: 2,
        tags: ["news", "events"],
        date: new Date()
      },
      {
        title: "Post Title 3",
        body: "Body of post.",
        category: "Technology",
        likes: 3,
        tags: ["news", "events"],
        date: new Date()
      },
      {
        title: "Post Title 4",
        body: "Body of post.",
        category: "Event",
        likes: 4,
        tags: ["news", "events"],
        date: new Date()
      }
    ]);

    console.log('Inserted Multiple Documents:', result.insertedIds);
  } finally {
    // Close the connection after the operation
    client.close();
    console.log('MongoDB connection closed');
  }
}

// Run the function to insert multiple documents
connectAndInsertMany();
