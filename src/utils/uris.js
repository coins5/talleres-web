const SERVER_URL = 'http://localhost:2193'

const GET_TALLERES = `${SERVER_URL}/getTalleres` // Crear ruta para obtener todos los talleres
const CREATE_MATRICULA = `${SERVER_URL}/createMatricula`

const GET_ALUMNO = `${SERVER_URL}/getAlumno/{codigo}`
const GET_TALLERES_FROM_ALUMNO = `${SERVER_URL}/alumno/{codigo}/getTalleres`

const GET_DOCENTE = `${SERVER_URL}/getDocente/{codigo}`
const GET_TALLERES_FROM_DOCENTE = `${SERVER_URL}/docente/{codigo}/getTalleres`
const GET_ALUMNOS_FROM_TALLER = `${SERVER_URL}/taller/{codigo}/getAlumnos`

export default {
  GET_TALLERES,
  CREATE_MATRICULA,
  GET_TALLERES_FROM_ALUMNO (codigo) {
    return GET_TALLERES_FROM_ALUMNO.replace('{codigo}', codigo)
  },
  GET_ALUMNO (codigo) {
    return GET_ALUMNO.replace('{codigo}', codigo)
  },
  GET_DOCENTE (codigo) {
    return GET_DOCENTE.replace('{codigo}', codigo)
  },
  GET_TALLERES_FROM_DOCENTE (codigo) {
    return GET_TALLERES_FROM_DOCENTE.replace('{codigo}', codigo)
  },
  GET_ALUMNOS_FROM_TALLER (codigo) {
    return GET_ALUMNOS_FROM_TALLER.replace('{codigo}', codigo)
  }
}
