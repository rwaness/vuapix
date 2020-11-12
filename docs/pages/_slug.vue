<template>
  <div class="vuapix-article">
    <nav class="menu">
      <ul>
        <li v-for="link of articles" :key="link.slug">
          <nuxt-link :to="`/${link.slug}`">{{ link.slug }}</nuxt-link>
        </li>
      </ul>
    </nav>

    <section class="article-container">
      <h2>{{ article.slug }}</h2>

      <div class="article-content">
        <nav class="toc">
          <ul>
            <li v-for="link of article.toc" :key="link.id">
              <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
            </li>
          </ul>
        </nav>

        <article class="article">
          <nuxt-content :document="article" />
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const [
      articles,
      article,
    ] = await Promise.all([
      $content().sortBy('order').fetch(),
      $content(params.slug || 'introduction').fetch(),
    ]);

    return {
      articles,
      article,
    };
  },
};
</script>

<style lang="scss">
.vuapix-article {
  @apply grid grid-cols-4 gap-4;

  .menu {
    @apply border-r-2;
  }

  .article-container {
    @apply col-span-3;

    .article-content {
      @apply flex flex-row-reverse;

      .toc {

      }

      .article {
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
}
</style>