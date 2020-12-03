<template>
  <b-navbar type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand to="/"> <h2>Test Portal</h2> </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <h4>
          <b-badge variant="info">{{
            currentDate | date("dddd, MMMM Do YYYY")
          }}</b-badge>
        </h4>
      </b-navbar-nav>
    </div>
  </b-navbar>
</template>
<script lang="ts" src="./header.ts"></script>
