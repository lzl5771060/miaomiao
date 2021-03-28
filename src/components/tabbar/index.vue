<template>
    <footer id="footer">
			<ul>
				<router-link to="/movie/nowplaying">
					<i class="iconfont icon-dianying"></i>
					<p>电影</p>
				</router-link>
				<router-link to="/cinima/allcity">
					<i class="iconfont icon-yingyuan"></i>
					<p>影院</p>
				</router-link>
				<router-link to="/mine/login">
					<i class="iconfont icon-wode"></i>
					<p>我的</p>
				</router-link>
			</ul>
		</footer>
</template>
<script>
export default {
  name:"tabbar"
}
</script>
<style scoped>
#footer {
    width: 100%;
    height: 50px;
    background: white;
    border-top: 2px #ebe8e3 solid;
    position: fixed;
    left: 0;
    bottom: 0;
    }
#footer ul {
    display: flex;
    text-align: center;
    height: 50px;
    align-items: center;
}
#footer ul a {flex: 1;height: 40px;}
#footer ul a {color: #757373;}
#footer ul a.router-link-active {color: #f03d37;}
/* #footer ul a.router-link-exact-active {color: #f03d37;} */
/* #footer ul li.active {color: #f03d37;} */
#footer ul i {font-size: 20px;}
#footer ul p {font-size: 12px;line-height: 18px;}
</style>