<template>
    <vs-row>
      <vs-col vs-w="12" class="text-center">
        <vs-icon
          icon="sentiment_dissatisfied"
          size="large"
        />
      </vs-col>
      <vs-col vs-w="12" class="text-center">
        <h1>Ops!</h1>
      </vs-col>
      <vs-col vs-w="12" class="text-center">
        <h3>The page you are looking for are not here anymore...</h3>
      </vs-col>
      <vs-col vs-w="12" class="text-center">
        <vs-button
          type="relief"
          to="/"
        >
          Back to Home...
        </vs-button>
      </vs-col>
    </vs-row>
</template>
<script>
  export default {
    name: 'NotFound',
  }
</script>
<style scoped>
  .text-center {
    text-align: center;
    margin-bottom: 20px;
  }
</style>
