import { connectionMongodb } from '@config';
const mongoose = connectionMongodb();
const Schema = mongoose.Schema;

const LogsSchema = new Schema({
  app_name: {
    required: false,
    type: Schema.Types.String,
  },
  values: {
    required: false,
    type: Schema.Types.Array,
  },
  tag: {
    required: false,
    type: Schema.Types.String,
  },
  create_at: {
    required: true,
    type: Schema.Types.Date,
    default: Date.now,
  },
});
const LogsModel = mongoose.model('log', LogsSchema);

export { LogsModel };
