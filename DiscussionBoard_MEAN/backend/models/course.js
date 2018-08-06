import mongoose from 'mongoose';
import uuid from 'uuid';
const schema = mongoose.Schema;

const courseSchema = new schema({
	id: {type: String, default: uuid.v1},
	title: String,
	author: String,
	description: String,
	topic: String,
	url: String,
	voteCount: {type: Number, default: 0}
});

courseSchema.index({'$**': 'text'}); //text based index for all fields,later when implemeting ui,input-users can search with string

const model = mongoose.model('course',courseSchema);

export default model;
