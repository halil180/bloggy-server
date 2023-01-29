import User from "../models/user-model.js";


const deleteUserById =async (pUserId)=>{
  return await User.destroy({
    where: {
      id: pUserId
    }
  });
}

const getUsers = async () => {
  try {
    const users = await User.findAll()
    return  users
  } catch (error) {
    
  }

}
const getUserById = async(pId) => {
    return await User.findByPk(pId)
}


const createUser = async (pUser) => {
  try {
    // Check if user with provided email already exists
    const existingUser = await User.findOne({ where: { email: pUser.email } });
    if (existingUser) {
      return { msg: "User with this email already exists" };
    }
    // Create new user if email does not exist
    const newUser = await User.create({
      email: pUser.email,
      name: pUser.name,
      password: pUser.password
    });
    return { msg: ` ${newUser }User created successfully` };
  } catch (error) {
    console.log(error);
  }
};
const getUserByMail = async (email) => {
  try {
    const user = await User.findOne({ where: { email } });
    return user.id;
  } catch (err) {
    console.error(err);
    throw new Error('Error fetching user by email');
  }
}

const  isUserExisting = async (pEmail) => {
  const emailCount = await User.count({
      where: {email: pEmail}
    });
  return emailCount == 0 ? false : true;
}
export default {
  isUserExisting,
  getUserByMail,
  deleteUserById,
  getUsers,
  createUser,
  getUserById
}