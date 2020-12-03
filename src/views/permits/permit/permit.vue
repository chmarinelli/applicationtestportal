<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-card no-body class="p-5 mt-5">
      <div class="row">
        <div class="col-md-12 mb-3">
          <b-button variant="info" :to="{ name: 'permits' }"
            ><b-icon icon="arrow-left"></b-icon> Retornar</b-button
          >
        </div>
        <div class="col-md-6">
          <label for="name">Nombre</label>
          <input
            type="text"
            name="name"
            v-model="model.employeeName"
            v-validate="'required|max:150'"
            class="form-control"
            :class="{ 'is-invalid': errors.has('name') }"
            id="name"
            placeholder="Nombre"
          />
        </div>
        <div class="col-md-6">
          <label for="lastname">Apellido</label>
          <input
            type="text"
            name="lastname"
            v-model="model.employeeLastName"
            v-validate="'required|max:150'"
            class="form-control"
            :class="{ 'is-invalid': errors.has('lastname') }"
            id="lastname"
            placeholder="Apellido"
          />
        </div>
        <div class="col-md-6">
          <label for="permitType">Tipo de permiso</label>
          <b-form-select
            id="permitType"
            name="permitType"
            v-validate="'required'"
            v-model="model.permitTypeId"
            :options="types"
            :state="!errors.has('permitType')"
            value-field="id"
            text-field="description"
            placeholder="Seleccionar"
          >
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- Por favor seleccione una opción --</b-form-select-option
              >
            </template>
          </b-form-select>
        </div>
        <div class="col-md-6">
          <label for="permitDate">Fecha de solicitud</label>
          <b-form-datepicker
            id="permitDate"
            name="permitDate"
            :min="min"
            locale="es"
            v-model="model.permitDate"
            v-validate="'required'"
            :state="!errors.has('permitDate')"
            placeholder="Por favor seleccione una fecha"
          ></b-form-datepicker>
        </div>
        <div class="col-md-12 mt-3">
          <b-button
            block
            :variant="model.id ? 'warning' : 'success'"
            @click="onSubmit"
            ><b-icon :icon="model.id ? 'pencil-square' : 'plus'"></b-icon
            >{{ model.id ? "Editar" : "Agregar" }}</b-button
          >
        </div>
      </div>
    </b-card>
  </b-overlay>
</template>
<script lang="ts" src="./permit.ts"></script>
