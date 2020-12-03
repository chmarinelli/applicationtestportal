<template>
  <b-card no-body class="p-3">
    <b-card-img
      v-if="isAdvanced"
      src="https://picsum.photos/600/300/?image=25"
      alt="Image"
      top
    ></b-card-img>
    <div class="row">
      <div class="col-md-12 mb-2">
        <b-list-group flush>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Nombre
            <b-badge variant="info" pill>{{ permit.employeeName }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Apellido
            <b-badge variant="info" pill>{{ permit.employeeLastName }}</b-badge>
          </b-list-group-item>

          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Permiso
            <b-badge variant="info" pill>{{ permit.permitType.description }}</b-badge>
          </b-list-group-item>
          <b-list-group-item
            class="d-flex justify-content-between align-items-center"
          >
            Fecha
            <b-badge variant="info" pill>{{
              permit.permitDate | date
            }}</b-badge>
          </b-list-group-item>
        </b-list-group>
      </div>
      <div v-if="!isAdvanced" class="col-md-6">
        <b-button-group>
          <b-button
            :variant="isSelectedView ? 'primary' : 'outline-primary'"
            @click="onView"
            ><b-icon icon="eye"></b-icon
          ></b-button>
          <b-button
            variant="outline-warning"
            :to="{ name: 'permit-edit', params: { id: permit.id } }"
            ><b-icon icon="pencil-square"></b-icon
          ></b-button>
          <b-button variant="outline-danger" @click="$emit('delete')"
            ><b-icon icon="trash"></b-icon
          ></b-button>
        </b-button-group>
      </div>
      <div :class="{ 'col-md-12': isAdvanced, 'col-md-6': !isAdvanced }">
        <small class="float-right mt-2"
          >{{ isAdvanced ? "Creado " : "" }}
          {{ permit.createdAt | fromNow }}</small
        >
      </div>
      <div v-if="isAdvanced" class="col-md-12 mt-2">
        <b-button
          block
          variant="warning"
          :to="{ name: 'permit-edit', params: { id: permit.id } }"
          ><b-icon icon="pencil-square"></b-icon> Editar</b-button
        >

        <b-button block variant="danger" @click="$emit('delete')"
          ><b-icon icon="trash"></b-icon> Eliminar</b-button
        >
      </div>
    </div>
  </b-card>
</template>
<script lang="ts" src="./permit-card.ts"></script>
