<template>
  <div
    class="m-auto max-w-2xl bg-white px-4 py-10 dark:bg-gray-800 sm:rounded sm:px-8 sm:shadow"
  >
    <main class="prose prose-gray max-w-none dark:prose-invert">
      <h1 class="sr-only">404: Page not found</h1>
      <Jumbotron>
        <template v-slot:title>Sorry, we could not find this page</template>
      </Jumbotron>
      <img src="/image/404.gif" alt="Confused Travolta meme" />
      <div>Try coming back to <a href="/">homepage</a> instead.</div>
    </main>
  </div>
</template>
