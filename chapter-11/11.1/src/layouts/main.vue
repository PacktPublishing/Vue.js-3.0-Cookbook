<template>
  <div>
    <section class="section">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're
          currently reading
        </h2>
      </div>
    </section>
    <slot />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code
          is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA
          4.0</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'MainLayout',
};
</script>
