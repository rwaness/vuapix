<template>
  <section class="flex flex-col overflow-y-hidden divide-y-2">
    <div class="flex justify-between">
      <nav-breadcrumb />

      <nav-prev-next class="hidden md:flex ml-4" />
    </div>

    <div class="flex-1 pt-4 flex flex-col">
      <h1 class="mb-6">{{ article.title }}</h1>

      <div class="flex-1 flex flex-col items-start lg:flex-row-reverse items-stretch">
        <nav v-if="article.toc.length > 0" class="mb-6 px-2 pt-2 lg:w-48 lg:mb-4 lg:ml-4 rounded bg-green-100">
          <div class="font-medium mb-2">Table of contents</div>
          <ul class="list-disc list-inside">
            <li
              v-for="anchor of article.toc"
              :key="anchor.id"
              :class="{ 'py-1': anchor.depth === 2, 'ml-2 pb-2': anchor.depth === 3 }">
              <nuxt-link :to="`#${anchor.id}`">{{ anchor.text }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <article class="article-content flex-1 flex flex-col">
          <nuxt-content :document="article" class="mb-4"/>

          <nav-prev-next class="md:hidden border-t-2" />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { formatArticle } from '@/utils';
import NavBreadcrumb from '@/components/NavBreadcrumb';
import NavPrevNext from '@/components/NavPrevNext';

export default {
  name: 'DocArticle',

  components: {
    NavBreadcrumb,
    NavPrevNext,
  },

  head() {
    return {
      title: `${this.article.title} | Vuapix`,
      description: this.article.description, // TODO generate auto from content
    };
  },

  async asyncData ({ $content, redirect, route, store }) {
    try {
      const { path, slug } = store.getters.articleBySlug(route.path);
      if (slug !== route.path) {
        redirect(301, slug);
        return;
      }
      const article = await $content(path).fetch();
      return {
        slug,
        article: formatArticle(article),
      };
    } catch(err) {
      console.error('Unexpected error : ', err);
      // TODO handle 404
      redirect(404);
    }
  },

  mounted() {
    this.initPage();
  },

  updated() {
    this.initPage();
  },

  methods: {
    async initPage() {
      await this.$store.dispatch('initDocPage', this.$route);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-content {
  ::v-deep {
    .nuxt-content-container {
      @apply flex-1;
      
      .nuxt-content {
        h2:not(:first-child) {
          @apply mt-8;
        }

        .nuxt-content-highlight {
          @apply relative overflow-x-auto;
          .filename {
            @apply absolute right-0 text-gray-600 z-10 m-2 text-sm;
          }
        }
      }
    }
  }
}
</style>