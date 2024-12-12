<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table
        separator="horizontal"
        title="Popis knjiga"
        title-class="text-h4 text-bold text-red-9"
        :rows="rows"
        :columns="columns"
        row-key="id"
        table-class="text-black"
        table-style="border: 3px solid black;"
        table-header-style="height: 65px"
        table-header-class="bg-red-2"
        bordered
        flat
        square
      >
      </q-table>

    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'

const columns = [
  {
    name:'id',
    label:'id',
    field:'id',
    align:'left',
    sortable: true,
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
  {
    name: 'naslov',
    label: 'naslov',
    field: 'naslov',
    align:'left',
    sortable: true,
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
  {
    name: 'autor',
    label: 'autor',
    field: 'autor',
    align:'left',
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  },
//  { name: 'opis', label: 'opis', field: 'opis', align:'center' },
//  { name: 'slika', label: 'slika', field: 'slika', align:'center' },
  {
    name: 'stanje',
    label: 'stanje',
    field: 'stanje',
    align:'center',
    style: {
      fontSize:'18px'
    },
    headerStyle: {
      fontSize: '24px'
    }
  }
]

const rows = [
  {
    id:'1',
    naslov: 'Funny Story',
    autor: 'Emily Henry',
    opis: 'The romance novel follows librarian Daphne and Miles, whose exes are dating each other. ',
    slika: 'https://cdn.thestorygraph.com/w0ej4okqipva0xu2jclwfp0xmfdo.jpg',
    stanje: '4'
  },
  {
    id:'2',
    naslov: 'The Lord of the Rings',
    autor: 'J. R. R. Tolkien',
    opis: 'A modest hobbit is entrusted with the task of destroying a powerful ring. ',
    slika: 'https://m.media-amazon.com/images/I/7125+5E40JL._SL1500_.jpg',
    stanje: '5'
  },
  {
    id:'3',
    naslov: 'Harry Potter and the Order of the Phoenix',
    autor: 'J.K. Rowling',
    opis: 'In his fifth year at Hogwart\'s, Harry faces challenges at every turn.',
    slika: 'https://m.media-amazon.com/images/I/81BXnTqH7-L._SL1500_.jpg',
    stanje: '2'
  },
  {
    id:'4',
    naslov: 'Diary of a Wimpy Kid: Hard Luck',
    autor: 'Jeff Kinney ',
    opis: 'His best friend, Rowley Jefferson, has ditched him, and finding new friends in middle school.',
    slika: 'https://m.media-amazon.com/images/I/71DUtMXVRuL._SL1490_.jpg',
    stanje: '2'
  },
]

export default {
  setup () {
    return {
      columns,
      rows,
      pagination: ref({
        rowsPerPage: 10
      }),
    }
  }
}

</script>
