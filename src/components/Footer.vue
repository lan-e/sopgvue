<template>
  <div class="footer">
    <p>
      2023. SOPG BAKALE
      <br />
      Sva prava pridržana.
    </p>
    <p class="icons">
      <a href="https://www.instagram.com/sopg.bakale/" target="_blank">
        <font-awesome-icon :icon="['fab', 'instagram']" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100064179074932"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'facebook']" />
      </a>
      <a href="mailto:opg.bakalehrvoje@gmail.com" target="_blank"
        ><font-awesome-icon :icon="['far', 'envelope']" />
      </a>
    </p>
  </div>
</template>

<style>
.footer {
  background: #deb887;
  padding: 24px;
  font-weight: 600;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.footer .icons a {
  text-decoration: none;
  color: #9e4d30;
  font-size: 32px;
  margin: 8px;
}
</style>
