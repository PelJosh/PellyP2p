import {MongoClient, MongoClientOptions} from 'mongodb'


export async function connectToDatabase() {
    const uri = 'mongodb://localhost:27017'; 
    const dbName = 'P2P'; 
  
   
  
    const client = new MongoClient(uri);
  
    try {
     
      await client.connect();
      console.log('Connected to MongoDB');
  
      const database = client.db(dbName);
      return database;
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    }
  }
  
  
  

