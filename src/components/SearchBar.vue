<script>
import DataGallery from './Gallery';
export default {
  name: 'SearchBar',
  components: {
    DataGallery,
  },
  data() {
    return {
      searchUser: '',
    };
  },
};
</script>


<template>
  <article class="container">
    <div class="main-title">
      <h1>Search on Database</h1>
    </div>
    <div class="search-container">
      <form class="search-form">
        <input
          class="search-input"
          type="text"
          placeholder="ex:Title"
          name="search"
          v-model="searchUser"
        />
        <button class="search-button">
          <i>
            <font-awesome-icon icon="search" />
          </i>
        </button>
      </form>
    </div>
    <div id="result">
      <DataGallery :searchQuery="searchUser" />
    </div>
  </article>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 10% 5% 85%;
}
.main-title {
  grid-row: 1;
  grid-column: 2 / 3;
}
.search-container {
  display: flex;
  grid-column: 2 / 3;
  grid-row: 2;
}
.search-form {
  flex-grow: 1;
  display: flex;
}
.search-input {
  flex-grow: 2;
}
#result {
  grid-row: 3;
  grid-column: 2/3;
}
</style>
