<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md" style="max-width: 400px">
      <q-form class="q-gutter-md" @submit="submitForm">
        <q-input
          filled
          v-model="naslov"
          label="Naslov *"
          hint="Naslov knjige"
        />
        
        <q-input
          filled
          v-model="autor"
          label="Autor *"
          hint="Ime i prezime autora"
        />
        
        <q-input
          filled
          v-model="opis"
          label="Opis *"
          hint="Kratki opis knjige"
        />
        
        <q-input
          filled
          v-model="slika"
          label="Slika *"
        />
        
        <q-input
          filled
          type="number"
          v-model="stanje"
          label="Stanje *"
        />
        
        <div>
          <q-btn label="Submit" type="submit" color="primary"/>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const naslov = ref(null)
    const autor = ref(null)
    const opis = ref(null)
    const slika = ref(null)
    const stanje = ref(null)
    
    // Method to submit form data
    const submitForm = async (event) => {
      event.preventDefault(); // Prevent default form submission
      
      const formData = {
        naslov: naslov.value,
        autor: autor.value,
        opis: opis.value,
        slika: slika.value,
        stanje: stanje.value
      }
      
      try {
        const response = await axios.post('http://localhost:3000/api/unos_knjige', formData)
        console.log(response.data) // Handle successful response
      } catch (error) {
        console.error('Error submitting data:', error) // Handle error
      }
    }

    return {
      naslov,
      autor,
      opis,
      slika,
      stanje,
      submitForm
    }
  }
}
</script>
