<template>
  <div class="row mt-5">
    <div
      :class="{ 'col-md-12': !!!selectedModel, 'col-md-8': !!selectedModel }"
    >
      <b-button variant="info" class="float-left" :to="{ name: 'home' }"
        ><b-icon icon="arrow-left"></b-icon> Retornar</b-button
      >
      <b-button
        variant="outline-success"
        class="float-right"
        :to="{ name: 'permit' }"
        ><b-icon icon="plus"></b-icon> Solicitar permiso</b-button
      >
      <br /><br />
      <hr />
      <div class="row">
        <div
          v-for="(permit, index) in permits"
          class="mb-4"
          :class="{ 'col-md-4': !!!selectedModel, 'col-md-6': !!selectedModel }"
          :key="index"
        >
          <permit-card
            :permit="permit"
            :isSelectedView="isSelectedView(permit)"
            @view="selectedModel = isSelectedView(permit) ? null : permit"
            @delete="onDelete(permit.id)"
          />
        </div>
      </div>
    </div>
    <div
      v-if="selectedModel"
      class="col-md-4"
      style="border-left: 1px solid rgba(0, 0, 0, 0.1"
    >
      <div class="row">
        <div class="col-md-12">
          <b-button
            variant="info"
            class="float-left"
            @click="selectedModel = null"
            ><b-icon icon="arrow-left"></b-icon> Retornar</b-button
          >
        </div>
        <div class="col-md-12 mt-3">
          <permit-card
            :permit="selectedModel"
            :isAdvanced="true"
            @delete="onDelete(selectedModel.id)"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./permits.ts"></script>
