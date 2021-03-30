<template>
  <div class="movie_body">
				<ul>
					<li v-for="come in coming" :key="come.id">
						<div class="pic_show"><img :src="come.img"></div>
						<div class="info_list">
							<h2>{{come.nm}}</h2>
							<p><span class="person">{{come.wish}}</span> 人想看</p>
							<p>主演: {{come.star}} </p>
							<p v-if="come.showInfo">{{come.showInfo}}</p>
							<p v-else>{{come.rt}}</p>
						</div>
						<div class="btn_pre">
							预售
						</div>
					</li>
				</ul>
			</div>
</template>
<script>
export default {
	name:"comingsoon",
	data() {
		return {
			coming:[]
		}
	},
	mounted() {
		this.$axios.get("/ajax/comingList?ci=10&token=&limit=10&optimus_uuid=82E6AED0905811EB94DA2532BA8995111D5D25CB924E45EEBF43948AAA015EAD&optimus_risk_level=71&optimus_code=10").then((result) => {
			var status = result.status;
			if (status === 200) {
				var come = result.data.coming;			
				for (let i = 0; i < come.length; i++) {	
					come[i].img = come[i].img.replace("w.h","128.180");	
				}
				this.coming = come;
			}
			
		}).catch((err) => {
			console.log(err);
			
		});
	},
}
</script>
<style scoped>
  #content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
#footer ul a.router-link-active {
    color: #f03d37;
}

</style>