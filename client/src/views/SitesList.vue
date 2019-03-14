<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="Добавление страницы">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12 >
                  <v-text-field label="URL страницы" class="purple-input" v-model="url" />
                </v-flex>
                <v-flex xs6 md2 >
                  <v-text-field class="purple-input" label="Просмотры" type="number" v-model="views" />
                </v-flex>
                <v-flex xs6 md2 >
                  <v-text-field class="purple-input" label="Досмотры" type="number" v-model="scroll" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success" @click="addSiteToTable">Добавить сайт</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card color="green" title="Список" text="Here is a subtitle for this table">
          <v-data-table :headers="headers" :items="sitesList" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text-success text--darken-3" v-text="header.text"></span>
            </template>
            <template slot="items" slot-scope="{ item }">
              <td><img :src="item.logo" :alt="item.name" height="25" width="25"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.url }}</td>
              <td>{{ item.views }}</td>
              <td>{{ item.scroll }}</td>
              <td>{{ item.status }}</td>
              <td class="text-xs-right"><v-btn flat small color="error"><v-icon>mdi-delete</v-icon></v-btn></td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data: () => ({
      headers: [
        {
          sortable: false,
          text: 'Лого',
          value: 'logo'
        },
        {
          sortable: false,
          text: 'Название страницы',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Адресс страницы',
          value: 'url'
        },
        {
          sortable: false,
          text: 'Просмотры',
          value: 'views'
        },
        {
          sortable: false,
          text: 'Досмотры',
          value: 'scroll'
        },
        {
          sortable: false,
          text: 'Статус',
          value: 'status'
        },
        {
          sortable: false,
          text: '',
          value: 'delete',
          align: 'right'
        }
      ],
      url: '',
      views: 0,
      scroll: 0
    }),
    computed: {
      ...mapGetters('sites', ['sitesList']),
    },
    methods: {
      ...mapActions('sites', ['addSite']),
      addSiteToTable() {
        this.addSite({
          url: this.url,
          views: this.views,
          scroll: this.scroll,
        })
      }
    }
  }
</script>
