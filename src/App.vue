<template>
  <div id="app">
    <header class="header">
      <div class="header__container">
        <img class="header__title" src="./assets/distillery-logo.png" />
      </div>
      <div id="nav" class="header__nav nav">
        <router-link to="/" class="nav__item">Home</router-link>
        <router-link to="/settings" class="nav__item">Settings</router-link>
      </div>
    </header>

    <section class="section">
      <router-view/>
    </section>

    <footer class="footer">
      <div class="footer__copyright">
        <p class="footer__copyright-item">
          AwesomeTEAM &copy;
          {{ new Date().getFullYear() }}
        </p>
      </div>
    </footer>
  </div>
</template>

<style lang="less">
  @import "./less/global.less";
  @import "./less/header.less";
  @import "./less/card.less";
  @import "./less/button.less";
  @import "./less/footer.less";
</style>
