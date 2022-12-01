import mongoose from 'mongoose';

export const connectionWithMongo = mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.exilxgi.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log('=== Database Connected ===');
  })
  .catch((err: any) => {
    console.log(`Connection Failed with error${err.message}`);
  });
