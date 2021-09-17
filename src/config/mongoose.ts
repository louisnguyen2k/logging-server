import { Mongoose } from 'mongoose';
import { environment, logger } from '.';

const connectionMongodb = (): Mongoose => {
  const mongoose: Mongoose = new Mongoose();
  const uri = `mongodb://${environment.mongo_user}:${environment.mongo_password}@${environment.mongo_host}:${environment.mongo_port}/${environment.mongo_dbname}`;
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
