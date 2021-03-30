<template>
  <div class="city_body">
				<div class="city_list">
					<div class="city_local">
						<h2>定位城市</h2>
						<div>{{localcity}}</div>
					</div>
					<div class="city_hot">
						<h2>热门城市</h2>
						<ul class="clearfix">
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
							<li>上海</li>
							<li>北京</li>
						</ul>
					</div>
					<div class="city_sort">
						<div v-for="city in citylist" :key="city.index">
							<h2>{{city.index}}</h2>
							<ul>
								<li v-for="citys in city.list" :key="citys.id">{{citys.nm}}</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="city_index">
					<ul>
						<li v-for="city in citylist" :key="city.index">{{city.index}}</li>
					</ul>
				</div>
			</div>
</template>
<script>
export default {
	name:"city",
	data() {
		return {
			citylist:[],
			localcity:"正在定位..."
		}
	},
	mounted(){
		this.$axios.get("/dianying/cities.json").then((result) => {
			var status = result.status;
			if (status === 200) {
				var city = result.data.cts;			
				var tt = this.formatCityList(city);
				this.citylist = tt;
			}
		}).catch((err) => {
			console.log(err);
		});
	},
	methods: {
		formatCityList(city){
			var citylist = [];
			// var hotlist = [];
			for (let i = 0; i < city.length; i++) {
				var item = city[i].py.substring(0,1).toUpperCase();
				if (fcode(item)) {
					citylist.push({index:item,list:[{id:city[i].id,nm:city[i].nm,py:city[i].py}]})
				}else{
					for (let j = 0; j < citylist.length; j++) {
						if (citylist[j].index === item) {
							citylist[j].list.push({id:city[i].id,nm:city[i].nm,py:city[i].py})
						}
					}
				}
			}
			citylist.sort((a,b)=>{
				if (a.index > b.index) {
					return 1;
				}else if(a.index < b.index){
					return -1;
				}else{
					return 0;
				}
			})
			function fcode(item){
				for (let i = 0; i < citylist.length; i++) {
					if (citylist[i].index === item) {
						return false;
					}
				}
				return true;
			}
			return citylist;
		},
	},
}
</script>
<style scoped>
#content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
.city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
.city_body .city_list::-webkit-scrollbar{
    background-color:transparent;
    width:0;
}
.city_body .city_local{padding: 15px 0; background-color: #f5f5f5;}
.city_body .city_local div{    
    background: rgb(252, 251, 251);
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 4%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
		text-overflow: ellipsis;
		}
.city_body .city_local h2{padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal; }
/* .city_body .city_hot{ margin-top: 20px;} */
.city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_hot ul{background-color: #f5f5f5;padding-bottom: 15px;}
.city_body .city_hot ul li{ float: left; background: rgb(252, 251, 251); width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
/* .city_body .city_sort div{ margin-top: 20px;} */
.city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
.city_body .city_sort ul{ padding-left: 10px; background-color: #f5f5f5;}
.city_body .city_sort ul li{ line-height: 30px; line-height: 30px; border-bottom: 1px solid #dbd8d8;}
.city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}

</style>