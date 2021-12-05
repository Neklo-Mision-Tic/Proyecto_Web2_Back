import { UserModel } from "../../models/usuario/usuario.js";
import bcrypt from "bcrypt";
import { generateToken } from "../../utils/tokenUtils.js";

const resolversAutenticacion = {
    Mutation:{
        registro: async (parent, args) => {

        },
        login: async (parent, args) => {
            const usuarioEcontrado = await UserModel.findOne({correo: args.correo});
            if(await bcrypt.compare(args.password, usuarioEcontrado.password)){
                return{
                    token: generateToken({
                        _id: usuarioCreado._id,
                        nombre: usuarioCreado.nombre,
                        apellido: usuarioCreado.apellido,
                        identificacion: usuarioCreado.identificacion,
                        correo: usuarioCreado.correo,
                        rol: usuarioCreado.rol, 
                }),
            };

            }

        },
    },
};
export {resolversAutenticacion}