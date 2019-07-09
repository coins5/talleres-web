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

          <b-table :data="talleres">
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
                  @click="viewTaller(props.row.codigo)"
                  size="is-small"
                  type="is-info"
                  outlined
                  icon-left="eye">
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

        <div class="is-size-5">
          Talleres disponibles
        </div>
        <br />

      </div>
    </div>
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
      docente: {},
      talleres: []
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
    viewTaller (codigo) {
      axios.get(uris.GET_ALUMNOS_FROM_TALLER(codigo))
        .then(response => console.log(response.data.rows))
    },
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style>

</style>
