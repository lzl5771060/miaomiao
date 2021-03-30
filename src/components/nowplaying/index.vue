<template>
  <div class="movie_body">
				<ul>
					<li v-for="movie in movieList" :key="movie.id">
						<div class="pic_show"><img :src="movie.img"></div>
						<div class="info_list">
							<div class="title">
								<h2>{{movie.nm}}</h2>
								<img v-if="movie.version" src="@/assets/3d.png">
							</div>
							<p v-if="movie.sc && aa(movie.showInfo)">观众评 <span class="grade">{{movie.sc}}</span></p>
							<p v-else-if="!movie.sc && pp(movie.showInfo)"><span class="grade">{{movie.wish}}</span>人想看</p>
							<p v-else><span>暂无评分</span></p>
							<p v-show="movie.star">主演: {{movie.star}} </p>
							<p>{{movie.showInfo}}</p>
						</div>
						<div class="btn_pre" v-if="pp(movie.showInfo) && movie.sc == 0">
							预售
						</div>
						<div class="btn_mall" v-else>
							购票
						</div>
					</li>
				</ul>
			</div>
</template>
<script>
export default {
	name:"nowplaying",
	data() {
		return {
			movieList:[]
		}
	},
	mounted() {
		this.$axios.get("/ajax/movieOnInfoList?token=&optimus_uuid=82E6AED0905811EB94DA2532BA8995111D5D25CB924E45EEBF43948AAA015EAD&optimus_risk_level=71&optimus_code=10").then((result) => {
			var status = result.status;
			if (status === 200) {
				var movies = result.data.movieList;	
				for (let i = 0; i < movies.length; i++) {	
					movies[i].img = movies[i].img.replace("w.h","128.180");	
				}
				this.movieList = movies;
			}
		}).catch((err) => {
			console.log(err);
		});
	},
	methods: {
		pp(a){
			var res = /-/.test(a);
			return res;
		},
		aa(a){
			var res = /今天/.test(a);
			return res;
		}
	},
}
</script>
<style scoped>
#content .movie_body {
    flex: 1;
    overflow: auto;
}

.movie_body ul {
    margin: 0 12px;
    overflow: hidden;
}

.movie_body ul li {
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 10px;
}

.movie_body .pic_show {
    width: 64px;
    height: 90px;
}

.movie_body .pic_show img {
    width: 100%;
}

.movie_body .info_list {
    margin-left: 10px;
    flex: 1;
    position: relative;
}
.movie_body .info_list .title{
    display: flex;
    position: relative;
}

.movie_body .info_list h2 {
    font-size: 17px;
    line-height: 24px;
    /* width: 150px; */
		margin-right: 15px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_body .info_list p {
    font-size: 13px;
    color: #666;
    line-height: 22px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.movie_body .info_list .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}

.movie_body .info_list img {
		position: relative;
		top: 5px;
    width: 50px;
		height: 14px;
}

.movie_body .btn_mall,
.movie_body .btn_pre {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
}

.movie_body .btn_pre {
    background-color: #3c9fe6;
}
#footer ul a.router-link-active {
    color: #f03d37;
}

</style>