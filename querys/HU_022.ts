/*"Historia de usuario: HU_022
*Como estudiante
*Dado que estoy viendo la lista de proyectos
*Cuando requiera registrar avances a un proyecto en el que estoy inscrito (Y este se encuentra en estado activo)
*Entonces podré ingresar la descripción de mi avance en el proyecto"
*/
import conectarBD from '../db/db';
import { AvancesModel } from '../models/advance';
const main=async()=>{
    await conectarBD();
    await AvancesModel.create({
        proyecto:'6197b66585646e5844bab56c',
        fecha: Date.now(),
        descripcion: 'Modificación',
        observaciones:['primera observacion','segunda observacion'],
        creadoPor:'619862f59be04c0e6c204c14'
    })
    .then((a)=>{
        console.log('Avance agregado',a)
    })
    .catch((e)=>{
        console.log('Error agregando avance')
    });
}
main();