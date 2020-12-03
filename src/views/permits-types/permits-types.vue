<template>
  <b-overlay :show="isLoading" rounded="sm">
    <b-card no-body class="p-5 mt-5">
      <div class="row">
        <div class="col-md-12">
          <b-button variant="info" class="float-left" :to="{ name: 'home' }"
            ><b-icon icon="arrow-left"></b-icon> Retornar</b-button
          >
          <b-button
            variant="outline-success"
            class="float-right"
            :to="{ name: 'permit-type' }"
            ><b-icon icon="plus"></b-icon> Agregar</b-button
          >
        </div>
        <div class="col-md-12">
          <b-table
            ref="table"
            class="mt-3"
            hover
            :items="types"
            :fields="field"
          >
            <template #cell(actions)="row">
              <b-button
                variant="warning"
                class="mr-2"
                :to="{ name: 'permit-type-edit', params: { id: row.item.id } }"
                ><b-icon icon="pencil-square"></b-icon
              ></b-button>
              <b-button variant="danger" @click="onDelete(row.index)"
                ><b-icon icon="trash"></b-icon
              ></b-button>
            </template>
          </b-table>
        </div>
      </div>
    </b-card>
  </b-overlay>
</template>
<script lang="ts" src="./permits-types.ts"></script>
