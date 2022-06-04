<template>
    <div>
        <ul>
            <li><router-link :to="{name: 'Home'}" class="company" >{{name || "Sample."}}</router-link></li>
            <li><router-link :to="{name: 'Home'}">Home</router-link></li>
            <li><router-link :to="{name: 'Form'}">Report</router-link></li>
            <li><router-link :to="{name: 'Analytics'}">Analytics</router-link></li>
            <li class="right"><router-link :to="{name: 'Login'}">Login</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            name: String
        }
    }
</script>

<style lang="css" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(53, 53, 53, 0.932);
}

li {
  float: left;
}

li.right {
    float: right;
}
li.right a {
    padding: 24px 60px;
}

.company {
    font-weight: bolder;
    padding: 24px 60px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 24px 26px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: rgb(36, 36, 36);
}
</style>

