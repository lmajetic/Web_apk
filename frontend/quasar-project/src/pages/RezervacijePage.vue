<template>
    <q-page padding>
      <div class="q-pa-md">
        <q-table
          separator="horizontal"
          title="Rezervirane Knjige"
          title-class="text-h4 text-bold text-red-9"
          :rows="rezervacije"
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
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td v-for="col in props.cols" :key="col.name" :props="props">
                <span v-if="col.name !== 'opis'">
                  {{ col.value }}
                </span>
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </q-page>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const columns = [
    { name: 'id', label: 'ID', field: 'id', align: 'left' },
    { name: 'naslov', label: 'Naslov', field: 'naslov', align: 'left' },
    { name: 'autor', label: 'Autor', field: 'autor', align: 'left' },
    { name: 'korisnik', label: 'Korisnik', field: 'ime', align: 'left' },
    { name: 'datum_rez', label: 'Datum Rezervacije', field: 'datum_rez', align: 'left' }
  ];
  
  export default {
    setup() {
      const rezervacije = ref([]);
  
      const loadRezervacije = async () => {
        try {
          const response = await axios.get('http://localhost:3000/api/rezervirane_knjige');
          rezervacije.value = response.data;
        } catch (error) {
          console.error("Error fetching reservations:", error);
        }
      };
  
      onMounted(() => {
        loadRezervacije();
      });
  
      return {
        columns,
        rezervacije
      };
    }
  };
  </script>
  