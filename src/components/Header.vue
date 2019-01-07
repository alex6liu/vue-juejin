<template>
  <div class="main-header-box">
    <header class="main-header main-header visible">
      <div class="container">
        <a href="/" class="logo">
          <img src="../assets/logo.svg" alt="掘金" class="logo-img">
        </a>
        <nav role="navigation" class="main-nav">
          <ul class="nav-list">
            <li class="main-nav-list">
              <div class="phone-show-menu">
                <span>首页</span>
                <div class="icon ion-arrow-down-b"></div>
              </div>
              <ul class="phone-hide">
                <li class="nav-item link-item route-active active">
                  <router-link to="/">首页</router-link>
                </li>
                <li class="nav-item link-item activities">
                  <router-link to="/activities">动态</router-link>
                </li>
                <li class="nav-item link-item">
                  <router-link to="/topics">话题</router-link>
                </li>
                <li class="nav-item link-item book">
                  <router-link to="/books">小册</router-link>
                </li>
                <li class="nav-item link-item">
                  <router-link to="/events/all">活动</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.main-header .container {
  max-width: 960px;
  margin: auto;
}
.container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 100%;
}
.logo {
  min-width: 98px;
  margin-right: 2rem;
}
a {
  text-decoration: none;
  cursor: pointer;
  color: #909090;
}
.main-nav {
  height: 100%;
  flex: 1 0 auto;

  .nav-list {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    height: 100%;
    margin: 0;

    .main-nav-list {
      display: flex;

      li {
        list-style: none;
      }
    }
  }
}
.phone-show-menu {
  display: none;
}
.phone-hide {
  display: flex;

  .nav-item {
    color: #71777c;
    padding: 0 1.2rem;
    font-size: 1.33rem;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .nav-item.link-item {
    padding: 0 1.6rem;
    height: 5rem;
  }
}
</style>
