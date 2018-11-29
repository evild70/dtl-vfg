<template>
  <div v-html="skima.content" />
</template>

<script>
/* eslint-disable */
import { abstractField } from 'vue-form-generator';
// import { get as objGet } from 'lodash';

export default {
  name: 'statictext',
  mixins: [abstractField],
  data() {
    return {
      skima: this.schema,
    };
  },
  mounted() {
    // console.log('field-statictext', 'schema', this.schema, 'model', this.model, objGet(this.model, this.schema.model, false));
  },
};
</script>
