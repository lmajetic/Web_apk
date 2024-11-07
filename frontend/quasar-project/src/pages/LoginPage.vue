<template>
  <q-page padding>
    <!-- Naslov i opis -->
    <q-toolbar>
      <q-toolbar-title>Prijava</q-toolbar-title>
    </q-toolbar>

    <div class="q-mb-md">
      <p>Molimo vas da unesete svoje korisničko ime i lozinku za prijavu.</p>
    </div>

    <!-- Forma za prijavu -->
    <q-form @submit="submitLogin">
      <div class="q-mb-md">
        <q-input
          v-model="loginData.username"
          label="Korisničko ime"
          outlined
          required
        />
      </div>

      <div class="q-mb-md">
        <q-input
          v-model="loginData.password"
          label="Lozinka"
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
  name: 'LoginPage',

  data() {
    return {
      // Objekt za unos korisničkog imena i lozinke
      loginData: {
        username: '',
        password: '',
      }
    };
  },

  methods: {
    // Funkcija za prijavu
    submitLogin() {
      // Provjera da li su uneseni podaci
      if (!this.loginData.username || !this.loginData.password) {
        this.$q.notify({
          type: 'negative',
          message: 'Molimo vas da unesete korisničko ime i lozinku.',
        });
        return;
      }

      // Simulacija slanja podataka (zamijeniti s pozivom na API za prijavu)
      console.log('Prijava korisnika:', this.loginData);

      // Ovdje možeš dodati logiku za stvarnu autentifikaciju, npr. poziv na API

      // Obavijest o uspješnoj prijavi
      this.$q.notify({
        type: 'positive',
        message: 'Prijava uspješna!',
      });

      // Ovdje bi se mogao preusmjeriti korisnik na drugu stranicu nakon uspješne prijave
      this.$router.push('/');
    }
  }
};
</script>