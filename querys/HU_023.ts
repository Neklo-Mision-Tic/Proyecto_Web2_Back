import conectarBD from "../db/db";
import { AvancesModel } from "../models/advance";

/*Historia de usuario: HU_023
*Como estudiante
*Dado estoy viendo la lista de avances de un proyecto
*Cuando requiera actualizar la información de un avance
*Entonces podré modificar la descripción del avance
*/
const main=async()=>{
    await conectarBD();
    await AvancesModel.findByIdAndUpdate('6198691cee16d8f4e05508b1',{descripcion:'nueva descripcion'})
    .then((a)=>{
        console.log('Descripción de avance modificada');
    })
    .catch((e)=>{
        console.log('error modificando avance');
    })
}
main();