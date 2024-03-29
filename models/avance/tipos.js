import { gql } from "apollo-server-express";

const tipoAvance=gql`
type Avance{
    _id:ID!
    fecha:Date!
    descripcion:String!
    observaciones:[String]
    proyecto:Proyecto!
    creadoPor:Usuario!
}
type Query{
    Avances:[Avance]
    filtrarAvance(idProyecto:String!):[Avance]
}
type Mutation{
    crearAvance(fecha:Date!
        descripcion:String!
        observaciones:[String]
        proyecto:String!
        creadoPor:String!):Avance

    modificarAvance(
        _id:String!
        fecha:Date
    descripcion:String
    observaciones:[String]
        ):Avance
}
`
export {tipoAvance};