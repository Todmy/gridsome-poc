<template>
  <Layout>
    <div v-html="pageContent" />

    <div>{{ test }}</div>

    <div v-html="dataPart" />
    <a :href="`/${langCode}/terms-and-conditions`">terms and conditions</a>
  </Layout>
</template>

<page-query>
query Landing ($id: String!) {
  lang: landing (id: $id) {
    content
    lang {
      id
      belongsTo {
        edges {
          node {
            __typename
            ...on DataPart {
              content
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import { setTimeout } from 'timers';

export default {
  data: () => ({
    test: 'test'
  }),
  computed: {
    langCode() {
      return this.$page.lang.lang.id;
    },
    pageContent() {
      return this.$page.lang.content;
    },
    relatedData() {
      return this.$page.lang.lang.belongsTo.edges;
    },
    dataPart() {
      const dataPart = this.relatedData.find(el => el.node.__typename === 'DataPart') || { node: {} }
      return dataPart.node.content
    }
  },
  created() {
    fetch('http://example.com/movies.json')
      .catch((response) => {
        this.test = 'hello from dynamic request'
        setTimeout(() => {
          const routes = ['ru', 'ua', 'en']
          const randInd = Math.floor(Math.random()*routes.length);
          this.$router.push(`/${routes[randInd]}`)
          console.log(routes[randInd])
        }, 5000);
      })
  }
}
</script>
