<template>
  <Layout>
    <div v-html="$page.lang.content" />

    <g-image alt="Cover image" v-if="$page.lang.cover_image" :src="$page.lang.cover_image" />
  </Layout>
</template>

<page-query>
query TermsAndConditions ($id: String!) {
  lang: termsAndConditions (id: $id) {
    content
    cover_image(width: 860, blur: 10)
  }
}
</page-query>
