<template>
  <section class="flex flex-col">
    <div class="flex justify-between">
      <nav-breadcrumb />

      <nav-prev-next />
    </div>

    <h2>{{ article.title }}</h2>

    <div class="article">
      <nav class="toc">
        <ul>
          <li v-for="anchor of article.toc" :key="anchor.id">
            <nuxt-link :to="`#${anchor.id}`">{{ anchor.text }}</nuxt-link>
          </li>
        </ul>
      </nav>

      <article class="article-content">
        <nuxt-content :document="article" />
      </article>
    </div>
  </section>
</template>

<script>
import NavBreadcrumb from '@/components/NavBreadcrumb';
import NavPrevNext from '@/components/NavPrevNext';

export default {
  components: {
    NavBreadcrumb,
    NavPrevNext,
  },

  head() {
    return {
      title: this.article.title,
      description: this.article.description,
    };
  },

  async asyncData ({ $content, redirect, route, store }) {
    // console.log('asycnData');
    try {
      const { path, slug } = store.getters.articleBySlug(route.path);
      if (slug !== route.path) {
        // console.log('redirect');
        redirect(301, slug);
        return;
      }
      // console.log('slug', slug);
      const article = await $content(path).fetch();
      // console.log('article', article);
      return {
        slug,
        article,
      };
    } catch(err) {
      console.error('Unexpected error : ', err);
      redirect(404);
    }
  },

  created() {
    this.fixedFetch();
  },

  watch: {
    article() {
      this.fixedFetch();
    },
  },

  methods: {
    fixedFetch() {
      // FETCH NOT CALLED IF WE STAY ON SAME PAGE
      return this.$store.dispatch('initDocPage', { slug: this.$route.path });
    },
  },
};
</script>

<style lang="scss">
.guide {
  // @apply col-span-3;

  .article {
    @apply flex flex-row-reverse;

    .toc {

    }

    .article-content {
      @apply flex-1;

      .nuxt-content {
        .nuxt-content-highlight {
          @apply relative;
          .filename {
            @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
          }
        }
      }
    }

  }
}
</style>