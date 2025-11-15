import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique },
    playlists: { type: [mongoose.Schema.Types.ObjectId], default: [] },
    password: { type: String, required: true, minlength: 6 },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async (next) => {
  if (!this.isModified(password)) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async (candidatePassword) => {
  return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);
