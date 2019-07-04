<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <img :src="require('../assets/logo_upc_red.png')" />
      </div>
      <div class="level-right">
        <p class="level-item">

          <b-dropdown aria-role="list" :mobile-modal="false">
              <b-button type="is-primary" slot="trigger" outlined>
                  <span style="vertical-align: top;">Nombre alumno</span>
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
        <div class="is-size-3">
          Mis talleres
        </div>
        <br />
        Mostrar talleres actuales
        <br />
        Talleres disponibles
        <br />
        <br />    
        <b-table :data="talleres">
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
              <b-button size="is-small" type="is-info" outlined
                  icon-left="plus">
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

export default {
  mounted () {
    this.loadTalleres()
  },
  data () {
    return {
      talleresUnidos: [],
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
          label: 'Taller',
        },
        {
          field: 'tipoTaller',
          label: 'Tipo'
        },
        {
          field: 'nombre_docente',
          label: 'Docente',
        }
      ]
    }
  },
  methods: {
    loadTalleres () {
      axios.get(uris.GET_TALLERES)
        .then(response => { this.talleres = response.data.rows })
        .catch(error => console.log(error.response))
    },
    logout () {
      console.log('logout')
    }
  }
}
</script>

<style>

</style>
