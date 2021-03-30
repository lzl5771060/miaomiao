<template>
  <div class="search_body">
				<div class="search_input">
					<div class="search_input_wrapper">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" @keyup="sear" v-model="item">
					</div>					
				</div>
				<div class="search_result" v-show="item">
					<h3>电影/电视剧/综艺</h3>
					<ul>
						<li v-for="list in movelist" :key="list.id">
							<div class="img"><img :src="list.img"></div>
							<div class="info">
								<p><span> {{list.nm}} </span><span> {{list.sc}}分</span></p>
								<div class="txt">
										<div class="text">
											<p v-show="list.enm"> {{list.enm}} </p>
											<p> {{list.cat}} </p>
											<p> {{list.rt}} </p>
								</div>
								</div>
							</div>
						</li>
					</ul>
					<div class="more-result" data-target="movies" :data-total="mtotal" @click="more">查看全部{{mtotal}}部影视剧</div>
				</div>
				<div class="result" v-show="item">
					<h3>影院</h3>
					<div class="list">
					<div class="cinema cell" data-id="" v-for="list in cinemalist" :key="list.id">
						<div class="info">
							<p class="name-price">
								<span class="name one-line">{{list.nm}}</span>
								<span class="sell-price">
									<span class="price">{{list.sellPrice}}</span>
									元起
								</span>
							</p>
							<p class="address one-line">{{list.addr}}</p>
							<p class="feature-tags">
									<span v-for="hall in list.hallType" :key="hall">{{hall}}</span>
									<!-- <span class="featrue">小吃</span> -->
							</p>
						</div>
						<div class="distance">{{list.distance}}</div>
					</div>
					</div>
					<div class="more-result" data-target="cinemas" :data-total="ctotal">查看全部{{ctotal}}家电影院</div>
				</div>
	</div>
</template>
<script>
export default {
	name:"search",
	data() {
		return {
			item:"",
			movelist:[],
			mtotal:0,
			cinemalist:[],
			ctotal:0
		}
	},
	methods: {
		sear(){
			if (this.item === "") {
				this.movelist=[];
				return;
			}
			this.$axios.get(`/ajax/search?kw=${this.item}&cityId=10&stype=-1`).then((result) => {
				if (result.status === 200) {
					var list = result.data.movies.list;			
					var mtotal = result.data.movies.total;	
					var cinema = result.data.cinemas;
					this.mtotal = mtotal;
					this.ctotal = cinema.total;
					this.cinemalist = cinema.list;
					console.log(result.data);
					
					for (let i = 0; i < list.length; i++) {	
						list[i].img = list[i].img.replace("w.h","128.180");	
					}
				}				
				this.movelist = list;
			}).catch((err) => {
				console.log(err);
			});
		}
	},
}
</script>
<style scoped>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}
.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}
.search_body .search_result { margin-bottom: 20px;background-color: #fff;}
.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box;}
.search_body .search_result .img{ width: 60px; float:left; margin-right: 10px;}
.search_body .search_result .img img{ width: 100%;}
.search_body .search_result .info{ margin-left: 15px;}
.search_body .search_result .info p{ line-height: 22px; font-size: 12px;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ float: right; font-size: 16px; color:#fc7103;}
.search_body .search_result .info .txt{ position: relative;}
.search_body .search_result .info .text{ padding-right: 10px; margin-right: 40px; overflow: hidden;}
.search_body .more-result {
    font-size: 15px;
    color: #ef4238;
    line-height: 44px;
    height: 44px;
    text-align: center;
}
.search_body .result{
   background-color: #fff;
}
.search_body .result h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
}
.search_body .result .cell{
    border-bottom: 1px solid #e6e6e6;
}
.search_body .result .list {
    padding-left: 15px;
    border-top: 1px solid #e6e6e6;
}
.search_body .result .cinema {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 15px 15px 15px 0;
}
.search_body .result .cinema .info {
    -webkit-box-flex: 1;
    flex: 1;
    overflow: hidden;
}
.search_body .result .cinema .name-price {
    font-size: 16px;
    color: #000;
    margin-bottom: 6px;
    display: -webkit-box;
    display: flex;
}
.search_body .result .cinema .one-line {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.search_body .result .cinema .sell-price {
    font-size: 11px;
    color: #999;
    white-space: nowrap;
    margin-left: 10px;
}
.search_body .result .cinema .price {
    font-size: 17px;
    color: #ef4238;
}
.search_body .result .cinema .address {
    font-size: 13px;
    color: #999;
}
.search_body .result .cinema .feature-tags {
    margin-top: 7px;
}
.search_body .result .cinema .feature-tags span {
    border: 1px solid #589daf;
    color: #589daf;
    position: relative;
    display: inline-block;
		padding: 0 3px;
		margin: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem;
}
.search_body  .result .cinema .distance {
    font-size: 13px;
    color: #999;
}
.search_body  .result .cinema .feature-tags span.featrue {
    color: #f90;
    border-color: #f90;
}
#footer ul a.router-link-active {
    color: #f03d37;
}

</style>