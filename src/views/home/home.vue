<template>
  <div class="d-flex justify-content-around align-items-center mt-5">
    <router-link
      to="/permits"
      style="color: black"
      class="text-decoration-none"
    >
      <b-card
        title="Permisos"
        sub-title="Administrar permisos"
        style="max-width: 300px"
      >
        <b-icon icon="person-lines-fill" font-scale="4"></b-icon>
        <b-card-text> Crear/editar/visualizar/eliminar permisos </b-card-text>
      </b-card>
    </router-link>
    <router-link
      to="/permits-types"
      style="color: black"
      class="text-decoration-none"
    >
      <b-card
        title="Tipos de permisos"
        sub-title="Administrar tipos de permisos"
        style="max-width: 300px"
      >
        <b-icon icon="list-ul" font-scale="4"></b-icon>
        <b-card-text>
          Crear/editar/visualizar/eliminar Tipos de permisos
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>
<script lang="ts" src="./home.ts"></script>
