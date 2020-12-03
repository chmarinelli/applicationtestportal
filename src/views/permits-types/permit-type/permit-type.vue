<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-card no-body class="p-5 mt-5">
      <div class="row">
        <div class="col-md-12">
          <b-button variant="info" :to="{ name: 'permits-types' }"
            ><b-icon icon="arrow-left"></b-icon> Retornar</b-button
          >
        </div>
        <div class="col-md-12 mt-3">
          <label for="description">Descripción</label>
          <input
            type="text"
            name="description"
            v-model="model.description"
            v-validate="'required|max:150'"
            required
            class="form-control"
            :class="{ 'is-invalid': errors.has('description') }"
            id="description"
            placeholder="Descripción"
          />
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
<script lang="ts" src="./permit-type.ts"></script>
