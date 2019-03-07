<template>
  <v-container fill-height fluid grid-list-xl>
    <v-layout justify-center wrap>
      <v-flex xs12 md8>
        <material-card color="green" title="Добавление страницы">
          <v-form>
            <v-container py-0>
              <v-layout wrap>
                <v-flex xs12 md12 >
                  <v-text-field label="URL страницы" class="purple-input" />
                </v-flex>
                <v-flex xs6 md2 >
                  <v-text-field class="purple-input" label="Просмотры" type="number" />
                </v-flex>
                <v-flex xs6 md2 >
                  <v-text-field class="purple-input" label="Досмотры" type="number" />
                </v-flex>
                <v-flex xs12 text-xs-right>
                  <v-btn class="mx-0 font-weight-light" color="success">Добавить сайт</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </material-card>
      </v-flex>
      <v-flex md12>
        <material-card color="green" title="Список" text="Here is a subtitle for this table">
          <v-data-table :headers="headers" :items="items" hide-actions>
            <template slot="headerCell" slot-scope="{ header }">
              <span class="subheading font-weight-light text-success text--darken-3" v-text="header.text"></span>
            </template>
            <template slot="items" slot-scope="{ item }">
              <td><img :src="item.logo" :alt="item.name" height="25" width="25"></td>
              <td>{{ item.name }}</td>
              <td>{{ item.url }}</td>
              <td>{{ item.views }}</td>
              <td>{{ item.scroll }}</td>
              <td class="text-xs-right">{{ item.status }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
          value: 'status',
          align: 'right'
        }
      ],
      items: [
        {
          logo: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
          name: 'Google',
          url: 'www.google.com',
          views: '10',
          scroll: '20',
          status: 'Выполнено'
        }
      ]
    })
  }
</script>
