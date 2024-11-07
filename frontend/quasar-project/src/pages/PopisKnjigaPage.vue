<template>
  <q-page padding>
    <!-- Tablica s podacima o knjigama -->
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      :pagination="pagination"
    >
      <template v-slot:top>
        <q-toolbar>
          <q-toolbar-title>Popis knjiga</q-toolbar-title>
        </q-toolbar>
      </template>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Dummy podaci za knjige
      books: [
        { id: 1, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genre: 'Romance' },
        { id: 2, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genre: 'Dystopian' },
        { id: 3, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Psychological Fiction' },
        { id: 4, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genre: 'Fiction' },
        { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, genre: 'Fantasy' },
      ],

      // Definicija kolona u tablici
      columns: [
        { name: 'title', label: 'Naziv knjige', align: 'left', field: row => row.title },
        { name: 'author', label: 'Autor', align: 'left', field: row => row.author },
        { name: 'year', label: 'Godina izdavanja', align: 'center', field: row => row.year },
        { name: 'genre', label: 'Žanr', align: 'left', field: row => row.genre },
      ],

      // Pagination (ako je potrebno)
      pagination: {
        rowsPerPage: 5,
      },
    };
  },
};
</script>