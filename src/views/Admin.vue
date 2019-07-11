<template>
  <div>
    <nav class="level">
      <div class="level-left">
        <img :src="require('../assets/logo_upc_red.png')" width="64" />
        <div class="is-size-4">
          Administracion
        </div>
      </div>
      <div class="level-right">
        <p class="level-item">

          <b-dropdown aria-role="list" :mobile-modal="false">
              <b-button type="is-primary" slot="trigger" outlined>
                  <span style="vertical-align: top;">Administrador</span>
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

    <div class="is-size-5">
      Crear Alumnos
    </div>
    <br />
    <b-field horizontal label="Nombre">
      <b-input name="alumno_nombre" expanded></b-input>
    </b-field>
    <b-field horizontal label="Apellido">
      <b-input name="alumno_apellido" expanded></b-input>
    </b-field>
    <div class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <b-button type="is-primary">Crear</b-button>    
      </div>
    </div>
    <!-- 
    <b-field horizontal label="email">
      <b-input name="alumno_email" expanded></b-input>
    </b-field>
    <b-field horizontal label="Password">
      <b-input name="alumno_password" expanded></b-input>
    </b-field>
-->

    <div class="is-size-5">
      Crear Docentes
    </div>

    <br />

    <b-field horizontal label="Nombre">
      <b-input name="docente_nombre" expanded></b-input>
    </b-field>
    <b-field horizontal label="Apellido">
      <b-input name="docente_apellido" expanded></b-input>
    </b-field>
    <!-- 
    <b-field horizontal label="email">
      <b-input name="docente_email" expanded></b-input>
    </b-field>
    <b-field horizontal label="Password">
      <b-input name="docente_password" expanded></b-input>
    </b-field>
-->
    <div class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <b-button type="is-primary">Crear</b-button>    
      </div>
    </div>

    <div class="is-size-5">
      Crear Talleres
    </div>
    <br />
    <b-field horizontal label="Nombre">
      <b-input name="taller_nombre" expanded></b-input>
    </b-field>

    <b-field horizontal label="Tipo de taller">
      <b-select v-model="tipoSelected">
        <option
          v-for="option in ['teorico', 'practico', 'blended']"
          :value="option"
          :key="option">
          {{ option }}
        </option>
      </b-select>
    </b-field>
    
    <div class="level">
      <div class="level-left">
      </div>
      <div class="level-right">
        <b-button type="is-primary">Crear</b-button>    
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      tipoSelected: 'teorico'
    }
  }
}
</script>

<style>

</style>
