<template>
  <div class="home">
    <h1>Projects</h1>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div v-if="error" class="error">
        {{ error }}
      </div>
      <div class="container">
        <div v-for="post in posts" class="post-item" :key="post._id">
          <router-link :to="`/projects/${post.slug.current}`">
            <h2>{{ post.title }}</h2>
          </router-link>
          <p>{{post.excerpt}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt
}[0...50]`;

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>

  .home{
    max-width: 60rem;
    margin: auto;
  }

  h1{
    font-size: 1.5rem;
    line-height: 2rem;
    padding: 1rem;
    font-weight: normal;
    margin-bottom: 3rem;
  }

  .posts{
    grid-column: 1 / span 2;
  }

  .post-item{
    padding: 1rem;
    position: relative;
  }

  h2{
    font-size: 1.5rem;
    line-height: 2rem;
    color: black;
    font-weight: normal;
    border-bottom: 2px solid transparent;
    position: relative;
    display: inline;
  }

  h2:hover{
    color: blue;
    border-bottom: 2px solid blue;
  }

</style>