<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Početna',
    caption: 'Početna stranica',
    icon: 'school',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga u knjižnici',
    icon: 'book',
    link: '#/popisKnjiga'
  },
  {
    title: 'Pretraživanje',
    caption: 'Pretraživanje knjiga',
    icon: 'book',
    link: '#/pretrazivanje'
  },
  {
    title: 'O nama',
    caption: 'Informacije o nama',
    icon: 'record_voice_over',
    link: '#/oNama'
  },
  {
    title: 'Lokacija',
    caption: 'Kako do nas',
    icon: 'rss_feed',
    link: '#/lokacija'
  },
  {
    title: 'Login',
    caption: 'Ulogirajte se',
    icon: 'public',
    link: '#/login'
  },
  {
    title: 'Registracija',
    caption: 'Reistrirajte se',
    icon: 'favorite',
    link: '#/registracija'
  },
  {
    title: 'Popis knjiga baza',
    caption: 'Reistrirajte se',
    icon: 'favorite',
    link: '#/popisKnjigaBaza'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
