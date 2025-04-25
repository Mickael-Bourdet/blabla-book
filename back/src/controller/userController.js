import { User} from "../models/User.js"



const userController = {
 
    async getOneUser(req, res, next) {
        const id = parseInt(req.params.userId);
      
        const result = await User.findByPk(id);
    
        if (!result) {
            return next({
              statusCode: 404,
              message: "Utilisateur non trouvé",
            });
          }
    
        res.status(200).json(result);
      },

      async updateUser(req, res, next) {
        
           
        
          
            const id = parseInt(req.params.userId);
            const result = await User.findByPk(id);
            if (!result) {
                return next({
                  statusCode: 404,
                  message: "Utilisateur non trouvé",
                });
              }
            // Récupérer les params dans req.body
            const { email,name, password } = req.body;

            if (email) {
                result.email = email;
            }
            if (name) {
                result.name = name;
            }
        
            if (password) {
                result.password = password;
            }
        
            await result.save();
        
            // On retourne la liste à jour
            res.status(200).json(result);
            
        },
    
        async deleteUser(req, res, next) {
            const id = parseInt(req.params.userId);
            const user = await User.findByPk(id);
        
            if (!user) {
             
                  return next({
                    statusCode: 404,
                    message: "Utilisateur non trouvé",
                  });
    
         }else{
            await user.destroy();
        
            // Il me reste à répondre au client
            res.status(200).json({ message: "Utilisateur supprimé avec succès" });
        
         }
       
           
           
       
    }

}


export { userController };