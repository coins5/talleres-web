<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <img :src="require('../assets/logo_upc_red.png')" width="64" />
        <div class="is-size-4">
          Alumno
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">

          <b-dropdown aria-role="list" :mobile-modal="false">
              <b-button type="is-primary" slot="trigger" outlined>
                  <span style="vertical-align: top;">{{alumno.nombre}}</span>
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
        <div v-show="talleresFromAlumno.length > 0">
          <div class="is-size-5">
            Talleres matriculados
          </div>
          <br />
          <b-table :data="talleresFromAlumno" :selected.sync="selectedTallerFromAlumno" focusable>
            <template slot-scope="props">
              <b-table-column field="codigo_taller" label="ID" width="40" numeric>
                {{ props.row.codigo_taller }}
              </b-table-column>

              <b-table-column field="nombre_taller" label="Nombre taller">
                {{ props.row.nombre_taller }}
              </b-table-column>

              <b-table-column field="tipoTaller" label="Tipo de taller">
                {{ props.row.tipoTaller }}
              </b-table-column>

              <b-table-column field="nombre_docente" label="Nombre de docente">
                {{ props.row.nombre_docente }}
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
                {{ calcPromedio(props.row) }}
              </b-table-column>

            </template>
          </b-table>

          <br />
          <br />
          <br />
        </div>

        <div v-show="draftTalleres.length > 0">
          <div class="is-size-5">
            Matriculando en talleres
          </div>

          <br />
          <b-table :data="draftTalleres" :selected.sync="selectedDraftTaller" focusable>
            <template slot-scope="props">
              <b-table-column field="codigo_taller" label="ID" width="40" numeric>
                {{ props.row.codigo_taller }}
              </b-table-column>

              <b-table-column field="nombre_taller" label="Nombre taller">
                {{ props.row.nombre_taller }}
              </b-table-column>

              <b-table-column field="tipoTaller" label="Tipo de taller">
                {{ props.row.tipoTaller }}
              </b-table-column>

              <b-table-column field="nombre_docente" label="Nombre de docente">
                {{ props.row.nombre_docente }}
              </b-table-column>

              <b-table-column label="Acciones">
                <b-button
                  @click="drop(props.index)"
                  size="is-small"
                  type="is-danger"
                  outlined
                  icon-left="delete"
                  :inverted="selectedDraftTaller == props.row">
                    Borrar
                </b-button>
              </b-table-column>
            </template>
          </b-table>

          <br />
          <br />
          <div class="level">
            <div class="level-left">
            </div>
            <div class="level-right">
              <b-button type="is-primary" @click="joinAll()">Aceptar</b-button>
            </div>
          </div>

          <br />
        </div>

        <div class="is-size-5">
          Talleres disponibles
        </div>
        <br />
        <b-table :data="talleres" :selected.sync="selectedTaller" focusable>
          <template slot-scope="props">
            <b-table-column field="codigo_taller" label="ID" width="40" numeric>
              {{ props.row.codigo_taller }}
            </b-table-column>

            <b-table-column field="nombre_taller" label="Nombre taller">
              {{ props.row.nombre_taller }}
            </b-table-column>

            <b-table-column field="tipoTaller" label="Tipo de taller">
              {{ props.row.tipoTaller }}
            </b-table-column>

            <b-table-column field="nombre_docente" label="Nombre de docente">
              {{ props.row.nombre_docente }}
            </b-table-column>

            <b-table-column label="Acciones">
              <b-button
                v-show="inUse(props.row.codigo_taller)"
                @click="join(props.row)"
                size="is-small"
                type="is-info"
                outlined
                icon-left="plus"
                :inverted="selectedTaller == props.row">
                  Unirme
              </b-button>
            </b-table-column>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import uris from '../utils/uris'
import _ from 'lodash'

export default {
  mounted () {
    /*
    this.loadTalleres()
    this.loadAlumno()
    this.loadTalleresFromAlumno()
    */
    this.loadData()
  },
  data () {
    return {
      selectedTallerFromAlumno: null,
      selectedDraftTaller: null,
      selectedTaller: null,

      alumno: {},
      draftTalleres: [],
      talleresFromAlumno: [],
      talleres: [],
      columns: [
        {
          field: 'codigo_taller',
          label: 'ID',
          width: '40',
          numeric: true
        },
        {
          field: 'nombre_taller',
          label: 'Taller'
        },
        {
          field: 'tipoTaller',
          label: 'Tipo'
        },
        {
          field: 'nombre_docente',
          label: 'Docente'
        }
      ]
    }
  },
  methods: {
    /*
    loadTalleres () {
      axios.get(uris.GET_TALLERES)
        .then(response => { this.talleres = response.data.rows })
        .catch(error => console.log(error.response))
    },
    loadAlumno () {
      axios.get(uris.GET_ALUMNO(this.$route.params.codigo))
        .then(response => { this.alumno = response.data.rows[0] })
        .catch(error => console.log(error.response))
    },
    loadTalleresFromAlumno () {
      axios.get(uris.GET_TALLERES_FROM_ALUMNO(this.$route.params.codigo))
        .then(response => { this.talleresFromAlumno = response.data.rows })
        .catch(error => console.log(error.response))
    },
    */
    loadData () {
      axios.get(uris.GET_ALUMNO(this.$route.params.codigo))
        .then(response => {
          this.alumno = response.data.rows[0]
          return axios.get(uris.GET_TALLERES_FROM_ALUMNO(this.$route.params.codigo))
        })
        .then(response => {
          this.talleresFromAlumno = response.data.rows
          return axios.get(uris.GET_TALLERES)
        })
        .then(response => {
          this.talleres = response.data.rows
        })
        .catch(error => console.log(error.response))
    },
    inUse (codigoTaller) {
      // eslint-disable-next-line
      const inTalleresFromAlumno = _.find(this.talleresFromAlumno, item => item.codigo_taller == codigoTaller ) == undefined
      // eslint-disable-next-line
      const inDraftTalleres = _.find(this.draftTalleres, item => item.codigo_taller == codigoTaller ) == undefined
      return inTalleresFromAlumno && inDraftTalleres
    },
    join (tallerData) {
      this.draftTalleres.push(tallerData)
      console.log(tallerData)
    },
    drop (index) {
      this.draftTalleres.splice(index, 1)
      console.log(index)
    },
    joinAll () {
      const data = this.draftTalleres.map(item => ({ codigo_alumno: this.$route.params.codigo, codigo_taller: item.codigo_taller }))
      console.log(data)

      this.recursiveCreateMatricula(data)
    },
    recursiveCreateMatricula (data) {
      const last = data.pop()
      if (last !== undefined) {
        this.createMatricula(last.codigo_alumno, last.codigo_taller)
          .then(response => this.recursiveCreateMatricula(data))
          // eslint-disable-next-line
          .catch(err => this.recursiveCreateMatricula(data))
      } else {
        this.draftTalleres.length = 0
        axios.get(uris.GET_TALLERES_FROM_ALUMNO(this.$route.params.codigo))
          .then(response => { this.talleresFromAlumno = response.data.rows })
          .catch(err => console.log(err.response))
      }
    },
    createMatricula (codigoAlumno, codigoTaller) {
      return axios.post(uris.CREATE_MATRICULA, { codigo_alumno: codigoAlumno, codigo_taller: codigoTaller })
    },
    calcPromedio (alumno) {
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
