import userRepository from "../data/user-repository.js"

const deleteUserById =async (pUserId) => {
    return await userRepository.deleteUserById(pUserId)
}
const getUsers =async () => {
    return await userRepository.getUsers()
}

const getUserById =async (pId) => {
    return await userRepository.getUserById(pId)
}


const createUser = async (pUser) => {
    return await userRepository.createUser(pUser)
}





const  checkUser =async (pUser) => {
    // find user object by email in the database
    // if the user is existing in the db then allow the user to log in (send role info back to the react)
    // if the user is not existing then create the user in the db
    const isUserExisting = await userRepository.isUserExisting(pUser.email)
    if(isUserExisting){
      const userId = await userRepository.getUserByMail(pUser.email)
      console.log(userId,"res")
        return {
            permitted: true,
            userId:userId
        }
    }else{
        const user = await userRepository.createUser(pUser);
        console.log(user)
        // const message = populateRemidnerTemplate(user.first_name ,user.last_name);
        // emailService.send(user.email,"welcome",message)
        return {
            permitted: false,
            //role: "CUSTOMER"
        }
    }
  }
  






export default {
    checkUser,
    deleteUserById,
    getUsers,
    createUser,
    getUserById
}