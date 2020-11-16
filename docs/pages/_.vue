<template>
  <section class="overflow-y-hidden divide-y-2">
    <div class="flex justify-between mb-2">
      <nav-breadcrumb />

      <nav-prev-next />
    </div>

    <div class="pt-4">
      <h1 class="mb-6">{{ article.title }}</h1>

      <div class="flex flex-col items-start lg:flex-row-reverse">
        <nav v-if="article.toc.length > 0" class="mb-6 px-2 pt-2 lg:w-48 lg:mb-0 lg:ml-4 bg-gray-200">
          <span>Table of contents</span>
          <ul class="list-disc list-inside">
            <li
              v-for="anchor of article.toc"
              :key="anchor.id"
              :class="{ 'py-2': anchor.depth === 2, 'ml-2 pb-2': anchor.depth === 3 }">
              <nuxt-link :to="`#${anchor.id}`">{{ anchor.text }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <article class="article-content flex-1 overflow-y-hidden">
          <nuxt-content :document="article" />
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { formatArticle } from '@/utils/format';
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
      redirect(404);
    }
  },

  async fetch() {
    await this.$store.dispatch('initDocPage', { slug: this.$route.path });
  },
};
</script>

<style lang="scss">
.article-content {
  .nuxt-content {
    h2:not(:first-child) {
      @apply mt-8;
    }

    .nuxt-content-highlight {
      @apply relative;
      .filename {
        @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
      }
    }
  }
}
</style>