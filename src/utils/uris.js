const SERVER_URL = 'http://localhost:2193'

const GET_TALLERES = `${SERVER_URL}/getTalleres` // Crear ruta para obtener todos los talleres
const GET_TALLERES_FROM_ALUMNO = `${SERVER_URL}/alumno/{codigo}/getTalleres`
const CREATE_MATRICULA = `${SERVER_URL}/createMatricula`

export default {
  GET_TALLERES,
  GET_TALLERES_FROM_ALUMNO,
  CREATE_MATRICULA,
  
}
