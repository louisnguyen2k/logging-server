import { Mongoose } from 'mongoose';
import { environment, logger } from '.';

const connectionMongodb = (): Mongoose => {
  const mongoose: Mongoose = new Mongoose();
  const uri = `mongodb://root:${environment.mongo_password}@${environment.mongo_host}:${environment.mongo_port}/${environment.mongo_dbname}?authSource=admin`;
  const option = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  mongoose.connect(uri, (error: Error) => {
    if (error) {
      logger.error({ message: `Unable to connect to the database MongoDB: ${JSON.stringify(error)}` });
    } else {
      logger.info({ message: `Connection MongoDB has been established successfully.` });
    }
  });
  return mongoose;
};
export { connectionMongodb };
