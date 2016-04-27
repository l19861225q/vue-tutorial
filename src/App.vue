<template>
  <div id="wrapper">
    <!-- .navbar -->
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i> 计划表
        </a>
        <ul class="nav navbar-nav">
          <li>
            <a href="javascript:;" v-link="'/home'">首页</a>
          </li>
          <li>
            <a href="javascript:;" v-link="'/time-entries'">计划列表</a>
          </li>
        </ul>
      </div>
    </nav>
    <!-- /.navbar -->
    <div class="container">
      <div class="col-sm-3"></div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
