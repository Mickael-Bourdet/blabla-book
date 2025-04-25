import { User} from "../models/User.js"
import Joi from 'joi';


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
        
            // Avant tout, on commence par valider nos paramètres en utilisant Joi
            const schema = Joi.object({
              
                // email: Joi.string().email().min(3).max(100).messages({
                //     "string.base": "L'Email' doit être une chaîne de caractères",
                //     "string.min": "L'Email' doit contenir au moins 3 caractères",
                //     "string.max": "L'Email' doit contenir au plus 100 caractères",
                //     'string.email': 'L’email n’est pas valide.',
                // }),
                // a voir si il faudra confirmer son email 

                // confirEmail: Joi.string().valid(Joi.ref('email')).messages({
                //     'any.only': 'Les emails ne correspondent pas.',
                //     'string.empty': 'La confirmation est obligatoire.',
                //   }),

                name: Joi.string().min(3).max(50).messages({
                    "string.base": "Le nom doit être une chaîne de caractères",
                    "string.min": "Le le nom doit contenir au moins 3 caractères",
                    "string.max": "Le nom doit contenir au plus 100 caractères",
                    
                }),

                password: Joi.string().min(8).max(20).pattern(/^[a-zA-Z0-9]{3,30}$/)  .messages({
                    
                    'string.min': 'Le mot de passe doit contenir au moins 8 caractères.',
                    'string.max': 'Le mot de passe ne doit pas dépasser 20 caractères.',
                    'string.pattern.base': 'Le mot de passe doit contenir uniquement des lettres et des chiffres.',
                  }),

                    // a voir si il faudra confirmer son password 

                // confirPassword: Joi.string().valid(Joi.ref('password')).messages({
                //     'any.only': 'Les passwords ne correspondent pas.',
                //     'string.empty': 'La confirmation est obligatoire.',
                //   }),

            });
        
            // La variable error contient :
            //  - La valeur undefined si on n'a eu aucune erreur
            //  - Un objet avec le détail de l'erreur si on a eu des erreurs
            const error = schema.validate(req.body, { abortEarly: false }).error;
        
            // Si error n'est pas vide (n'est pas undefined), l'API retourne une erreur, sinon, on fait tout ce qu'on avait déjà fait avant
            // de mettre cette validation en place.
            if (error) {
                // La fonction "next" de express renvoi au Middleware suivant si elle n'a pas d'argument à son appel.
                // Mais si elle a un argument, elle passera non pas au prochain Middleware tout court, mais au prochain Middleware d'erreur,
                // c-a-d, le prochain Middleware ayant un paramètre "error" => en l'occurence, notre errorHandler.
                return next({
                    statusCode: 400,
                    message: error.details.map(detail => detail.message)
                });
            }
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