<template>
  <q-file
    v-model="file"
    outlined
    bottom-slots
    label="You Avatar"
    class="q-pr-md"
    @input="getFile"
  >
    <template
      v-if="photoUrl"
      v-slot:before
    >
      <q-avatar>
        <img :src="photoUrl">
      </q-avatar>
    </template>
    <template v-slot:after>
      <q-btn
        round
        dense
        flat
        icon="cloud_upload"
        @click="uploadFile"
      />
    </template>
  </q-file>
</template>
<script>
import { uid } from 'quasar';
import { uploadFile } from 'driver/bucket';

export default {
  name: 'AvatarInput',
  props: {
    value: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data: () => ({
    file: [],
    type: '',
    name: '',
    s3file: {
      key: '',
      bucket: '',
      region: '',
    },
    photoUrl: '',
    canUpload: false,
  }),
  methods: {
    async uploadFile() {
      try {
        if (this.canUpload) {
          const file = await uploadFile(this.file, this.name, this.type);
          this.s3file = file;
          this.$emit('input', file);
          this.canUpload = false;
        }
      } catch (err) {
        console.error(err);
      }
    },
    getFile($event) {
      this.type = $event.type;
      this.name = `${uid()}-${$event.name}`;
      const that = this;
      const reader = new FileReader();
      reader.onload = ({ target }) => {
        that.photoUrl = target.result;
        that.canUpload = true;
      };
      reader.readAsDataURL(this.file);
    },
  },
};
</script>
