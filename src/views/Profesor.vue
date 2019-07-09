<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <img :src="require('../assets/logo_upc_red.png')" width="64" />
        <div class="is-size-4">
          Profesor
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">

          <b-dropdown aria-role="list" :mobile-modal="false">
              <b-button type="is-primary" slot="trigger" outlined>
                  <span style="vertical-align: top;">{{docente.nombre}}</span>
                  <b-icon icon="menu-down"></b-icon>
              </b-button>

              <b-dropdown-item aria-role="listitem" @click="logout()">
                  <div class="media">
                      <b-icon class="media-left" icon="power"></b-icon>
                      <div class="media-content">
                          <h3>Salir</h3>
                      </div>
                  </div>
              </b-dropdown-item>
          </b-dropdown>
        </p>
      </div>
    </nav>

    <div class="columns is-mobile is-centered">
      <div class="column">
        <br />
        <div >
          <div class="is-size-5">
            Talleres
          </div>
          <br />
          <b-table :data="talleres" :selected.sync="selectedTaller" focusable>
            <template slot-scope="props">
              <b-table-column field="codigo" label="ID" width="40" numeric>
                {{ props.row.codigo }}
              </b-table-column>

              <b-table-column field="nombre" label="Nombre taller">
                {{ props.row.nombre }}
              </b-table-column>

              <b-table-column field="tipoTaller" label="Tipo de taller">
                {{ props.row.tipoTaller }}
              </b-table-column>

              <b-table-column field="alumnos" label="Alumnos" width="80" numeric>
                {{ props.row.alumnos }}
              </b-table-column>

              <b-table-column field="acciones" label="Acciones" width="80" numeric>
                <b-button
                  @click="viewTaller(props.row)"
                  size="is-small"
                  type="is-info"
                  outlined
                  icon-left="eye"
                  :inverted="selectedTaller == props.row">
                    ver
                </b-button>
              </b-table-column>

            </template>
          </b-table>

          <br />

          <br />
          <br />
          <br />
        </div>

        <div v-show="alumnosFromTaller.length > 0">
          <div class="is-size-5">
            Alumnos en:  {{tallerSeleccionado.codigo}} - {{tallerSeleccionado.nombre}} ({{tallerSeleccionado.tipoTaller}})
          </div>
          <br />

          <b-table :data="alumnosFromTaller" :selected.sync="selectedAlumnoFromTaller" focusable>
            <template slot-scope="props">
              <b-table-column field="codigo" label="ID" width="40" numeric>
                {{ props.row.codigo }}
              </b-table-column>

              <b-table-column field="nombre" label="Alumno">
                {{ props.row.nombre }}
              </b-table-column>

              <b-table-column field="eval1" label="Eval 1" width="80" numeric>
                {{ parseFloat(props.row.eval1) }}
              </b-table-column>
              <b-table-column field="eval2" label="Eval 2" width="80" numeric>
                {{ parseFloat(props.row.eval2) }}
              </b-table-column>
              <b-table-column field="evalFinal" label="Eval final" width="80" numeric>
                {{ parseFloat(props.row.evalFinal) }}
              </b-table-column>
              <b-table-column field="promedio" label="Promedio" width="80" numeric>
                {{ calcPromedioInLine(props.row) }}
              </b-table-column>

              <b-table-column field="acciones" label="Acciones" width="80" numeric>
                <b-button
                  @click="editNota(props.row)"
                  size="is-small"
                  type="is-info"
                  outlined
                  icon-left="pen"
                  :inverted="selectedAlumnoFromTaller == props.row">
                    Notas
                </b-button>
              </b-table-column>

            </template>
          </b-table>

          <br />
          <br />
          <br />
        </div>

        <br />

      </div>
    </div>

    <b-modal :active.sync="isEditingNotas" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="content">
            <div class="is-size-5">
              {{alumnoSeleccionado.codigo}} - {{alumnoSeleccionado.nombre}}
            </div>
            <br />
            <b-field horizontal label="Eval 1">
                <b-input name="eval1" v-model="alumnoSeleccionado.eval1" expanded type="number" min="0" max="20" step="0.01"></b-input>
            </b-field>
            <b-field horizontal label="Eval 2">
              <b-input name="eval2" v-model="alumnoSeleccionado.eval2" expanded type="number" min="0" max="20" step="0.01"></b-input>
            </b-field>
            <b-field horizontal label="Eval final">
              <b-input name="evalFinal" v-model="alumnoSeleccionado.evalFinal" expanded type="number" min="0" max="20" step="0.01"></b-input>
            </b-field>
            <br />
            <div class="level">
              <div class="level-left">
              Promedio final: {{calcPromedio}}
              </div>
              <div class="level-right">
                <b-button type="is-primary" @click="saveNotas()">Aceptar</b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from 'axios'
import uris from '../utils/uris'
// import _ from 'lodash'

export default {
  mounted () {
    this.loadData()
  },
  data () {
    return {
      selectedTaller: null,
      selectedAlumnoFromTaller: null,

      docente: {},
      talleres: [],
      alumnosFromTaller: [],
      tallerSeleccionado: {},
      isEditingNotas: false,
      alumnoSeleccionado: {}
    }
  },
  computed: {
    calcPromedio () {
      const eval1 = parseFloat(this.alumnoSeleccionado.eval1)
      const eval2 = parseFloat(this.alumnoSeleccionado.eval2)
      const evalFinal = parseFloat(this.alumnoSeleccionado.evalFinal)
      const result = (eval1 + eval2 + evalFinal) / 3
      return Math.round(result * 100) / 100
    }
  },
  methods: {
    loadData () {
      axios.get(uris.GET_DOCENTE(this.$route.params.codigo))
        .then(response => {
          this.docente = response.data.rows[0]
          return axios.get(uris.GET_TALLERES_FROM_DOCENTE(this.$route.params.codigo))
        })
        .then(response => {
          console.log(response.data.rows)
          this.talleres = response.data.rows
        })
        .catch(error => console.log(error, error.response))
    },
    viewTaller (taller) {
      this.tallerSeleccionado = taller
      axios.get(uris.GET_ALUMNOS_FROM_TALLER(this.tallerSeleccionado.codigo))
        .then(response => {
          window.scrollTo(0, 999999)
          console.log(response.data.rows)
          this.alumnosFromTaller = response.data.rows
        })
    },
    editNota (alumno) {
      console.log(alumno)
      alumno.eval1 = parseFloat(alumno.eval1)
      alumno.eval2 = parseFloat(alumno.eval2)
      alumno.evalFinal = parseFloat(alumno.evalFinal)
      this.alumnoSeleccionado = alumno
      this.isEditingNotas = true
    },
    saveNotas () {
      const eval1 = {
        codigoAlumno: this.alumnoSeleccionado.codigo,
        codigoTaller: this.tallerSeleccionado.codigo,
        tipoEval: 'eval1',
        nota: this.alumnoSeleccionado.eval1
      }

      const eval2 = {
        codigoAlumno: this.alumnoSeleccionado.codigo,
        codigoTaller: this.tallerSeleccionado.codigo,
        tipoEval: 'eval2',
        nota: this.alumnoSeleccionado.eval2
      }

      const evalFinal = {
        codigoAlumno: this.alumnoSeleccionado.codigo,
        codigoTaller: this.tallerSeleccionado.codigo,
        tipoEval: 'evalFinal',
        nota: this.alumnoSeleccionado.evalFinal
      }

      axios.post(uris.MATRICULA_SET_NOTA, eval1)
        .then(response => axios.post(uris.MATRICULA_SET_NOTA, eval2))
        .then(response => axios.post(uris.MATRICULA_SET_NOTA, evalFinal))
        // eslint-disable-next-line
        .then(response => this.isEditingNotas = false)
        .catch(error => console.log(error))
      // console.log(this.alumnoSeleccionado)
    },
    calcPromedioInLine (alumno) {
      const eval1 = parseFloat(alumno.eval1)
      const eval2 = parseFloat(alumno.eval2)
      const evalFinal = parseFloat(alumno.evalFinal)
      const result = (eval1 + eval2 + evalFinal) / 3
      return Math.round(result * 100) / 100
    },
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style>

</style>
