import mongoose from 'mongoose';

// User Config
const UserSchema = new mongoose.Schema({
  first_name: { type: String },
  last_name: { type: String },
  phone: { type: Number },
  email: { type: String, required: true },
  username: { type: String, required: true },
  address: {
    "street": { type: String },
    "city": { type: String },
    "state": { type: String },
    "zip_code": { type: String },
    "country": { type: String, },
  },
  authentication: {
    password: { type: String, required: true, select: false },
    salt: { type: String, select: false },
    sessionToken: { type: String, select: false },
  },
});

export const UserModel = mongoose.model('User', UserSchema);

// User Actions
export const getUsers = () => UserModel.find();
export const getUserByEmail = (email: string) => UserModel.findOne({ email });
export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({ 'authentication.sessionToken': sessionToken });
export const getUserById = (id: string) => UserModel.findById(id);
export const createUser = (values: Record<string, any>) => new UserModel(values).save().then((user) => user.toObject());
export const deleteUserById = (id: string) => UserModel.findOneAndDelete({ _id: id });
export const updateUserById = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values);
