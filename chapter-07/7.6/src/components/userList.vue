<template>
  <vs-table
    :data="userList"
    search
    stripe
    pagination
    max-items="10"
    style="width: 100%; padding: 20px;"
  >
    <template slot="thead">
      <vs-th sort-key="name">
        #
      </vs-th>
      <vs-th sort-key="name">
        Name
      </vs-th>
      <vs-th sort-key="email">
        Email
      </vs-th>
      <vs-th sort-key="country">
        Country
      </vs-th>
      <vs-th sort-key="phone">
        Phone
      </vs-th>
      <vs-th sort-key="Birthday">
        Birthday
      </vs-th>
      <vs-th>
        Actions
      </vs-th>
    </template>
    <template slot-scope="{data}">
      <vs-tr :key="index" v-for="(tr, index) in data">
        <vs-td :data="data[index].id">
          {{data[index].id}}
        </vs-td>
        <vs-td :data="data[index].name">
          {{data[index].name}}
        </vs-td>
        <vs-td :data="data[index].email">
          <a :href="`mailto:${data[index].email}`">
            {{data[index].email}}
          </a>
        </vs-td>
        <vs-td :data="data[index].country">
          {{data[index].country}}
        </vs-td>
        <vs-td :data="data[index].phone">
          {{data[index].phone}}
        </vs-td>
        <vs-td :data="data[index].birthday">
          {{data[index].birthday}}
        </vs-td>
        <vs-td :data="data[index].id">
          <vs-button
            color="primary"
            type="filled"
            icon="remove_red_eye"
            size="small"
            @click="changeRoute('view', data[index].id)"
          />
          <vs-button
            color="success"
            type="filled"
            icon="edit"
            size="small"
            @click="changeRoute('edit', data[index].id)"
          />
          <vs-button
            color="danger"
            type="filled"
            icon="delete"
            size="small"
            @click="deleteUser(data[index].id)"
          />
        </vs-td>
      </vs-tr>
    </template>
  </vs-table>
</template>
<script>
  import changeRouteMixin from '@/mixin/changeRoute';

  export default {
    name: 'UserTableList',
    mixins: [changeRouteMixin],
    computed: {
      userList() {
        return this.$store.getters.getUsersList;
      },
    },
  }
</script>
