<template>
  <div id="root">
    <div>
      <div class="row">
        <div class="col-xs-offset-2 col-xs-8">
          <div class="page-header"><h2>我是HOME里面的内容</h2></div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <div class="list-group">
            <!-- <a class="list-group-item" href="/about">About</a>
            <a class="list-group-item active" href="/home" aria-current="page"
              >Home</a
            > -->
            <router-link
              active-class="active"
              replace
              to="/home/news"
              class="list-group-item"
              >News</router-link
            >
            <router-link
              active-class="active"
              replace
              to="/home/message"
              class="list-group-item"
              >Message</router-link
            >
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <div>
                <keep-alive include="News">
                  <router-view></router-view>
                </keep-alive>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Message from "./Message";
import News from "./News";
export default {
  name: "Home",
  components: { Message, News },
};
</script>