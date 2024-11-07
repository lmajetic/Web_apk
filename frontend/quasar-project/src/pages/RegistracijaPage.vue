<template>
  <q-page padding>
    <!-- Naslov i opis registracije -->
    <q-toolbar>
      <q-toolbar-title>Registracija korisnika</q-toolbar-title>
    </q-toolbar>
    
    <div class="q-mb-md">
      <p>Popunite polja za registraciju kako biste postali član naše platforme.</p>
    </div>

    <!-- Forma za registraciju -->
    <q-form @submit="submitRegistration">
      <div class="q-mb-md">
        <q-input
          v-model="user.firstName"
          label="Ime"
          outlined
          required
        />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="user.lastName"
          label="Prezime"
          outlined
          required
        />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="user.email"
          label="Email"
          outlined
          type="email"
          required
        />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="user.password"
          label="Lozinka"
          outlined
          type="password"
          required
        />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="user.confirmPassword"
          label="Potvrdite lozinku"
          outlined
          type="password"
          required
        />
      </div>

      <!-- Gumb za potvrdu -->
      <q-btn label="Potvrdi" color="primary" type="submit" />
    </q-form>
  </q-page>
</template>

<script>
export default {
  name: 'RegistrationPage',

  data() {
    return {
      // Objekt koji čuva podatke za registraciju korisnika
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    };
  },

  methods: {
    // Funkcija za obradu registracije
    submitRegistration() {
      // Provjera da li su unesene sve obavezne informacije i da lozinke odgovaraju
      if (this.user.password !== this.user.confirmPassword) {
        this.$q.notify({
          type: 'negative',
          message: 'Lozinke se ne podudaraju!',
        });
        return;
      }

      // Simulacija slanja podataka (zamijeniti s pozivom na API za registraciju)
      console.log('Podaci za registraciju:', this.user);

      // Obavijest o uspješnoj registraciji
      this.$q.notify({
        type: 'positive',
        message: 'Registracija uspješna!',
      });

      // Ovdje bi se mogao preusmjeriti korisnik na prijavu ili početnu stranicu
      this.$router.push('/');
    }
  }
};
</script>