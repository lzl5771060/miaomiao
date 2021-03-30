<template>
  <div class="cinema-list" >
		<div class="list-wrap" v-html="citylist"></div>
	</div>
</template>
<script>
export default {
	name:"allcity",
	data() {
		return {
			citylist:""
		}
	},
	mounted() {
		// this.$axios.get("/ajax/filterCinemas?ci=10&optimus_uuid=82E6AED0905811EB94DA2532BA8995111D5D25CB924E45EEBF43948AAA015EAD&optimus_risk_level=71&optimus_code=10").then((result) => {
		// 	console.log(result);
			
		// }).catch((err) => {
		// 	console.log(err);
			
		// });
		this.$axios.get("/ajax/moreCinemas?day=2021-03-30&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1617083394849&cityId=59&optimus_uuid=82E6AED0905811EB94DA2532BA8995111D5D25CB924E45EEBF43948AAA015EAD&optimus_risk_level=71&optimus_code=10").then((result) => {
			this.citylist = result.data;
			
		}).catch((err) => {
			console.log(err);
			
		});
	},
	
}
</script>
<style>
#content .cinema_body{ flex:1; overflow:auto;}
/* .cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{ font-size: 13px; color:#666;}
.cinema_body .address span:nth-of-type(2){ float:right; }
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
.cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;} */
.cinema-list .list-wrap  .item {
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}
.cinema-list .list-wrap .box-flex:not(.column).middle, .inline-flex:not(.column).middle {
    -webkit-box-align: center;
    align-items: center;
}
.cinema-list .list-wrap .title-block .title {
    height: 23px;
    line-height: 23px;
    font-size: 16px;
    color: #000;
}
.cinema-list .list-wrap .price-block {
    padding-top: 9px;
    padding-left: 3px;
}
.cinema-list .list-wrap .price-block .d, .cinema-list .list-wrap .price-block .price, .cinema-list .list-wrap .price-block .q {
    font-size: 18px;
    color: #f03d37;
}
.cinema-list .list-wrap .price-block .q {
    margin-left: 3px;
}
.cinema-list .list-wrap .location-block {
	display: flex;
    margin-top: 6px;
    font-size: 13px;
    color: #666;
}
/* .box-flex {
    display: -webkit-box;
    display: flex;
} */
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.flex {
    -webkit-box-flex: 1;
    flex: 1;
}
.cinema-list .list-wrap .title-block .label-block {
    height: 17px;
    line-height: 17px;
    margin-top: 4px;
    margin-bottom: 4px;
    overflow: hidden;
    font-size: 0;
    flex-shrink: 0;
}
.cinema-list .list-wrap .title-block .label-block div.allowRefund, .cinema-list .list-wrap .title-block .label-block div.endorse, .cinema-list .list-wrap .title-block .label-block div.hallType, .cinema-list .list-wrap .title-block .label-block div.sell {
    color: #589daf;
    border: 1px solid #589daf;
}
.cinema-list .list-wrap .title-block .label-block div.snack, .cinema-list .list-wrap .title-block .label-block div.vipTag {
    color: #f90;
    border: 1px solid #f90;
}
.cinema-list .list-wrap .title-block .label-block>div {
    position: relative;
    display: inline-block;
		padding: 0 3px;
		margin-right: 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: .6rem;
}
.cinema-list .discount-block {
    color: #999;
    margin-bottom: 4px;
}
.cinema-list .discount-block .discount-label {
    width: 15px;
    height: 14px;
    position: relative;
		top: 3px;
		display: -webkit-inline-box;
		display: inline-flex;
}
.cinema-list .discount-block .discount-label img{
    width: 100%;
}
.cinema-list .discount-block .discount-label-text {
    margin-left: 0;
		font-size: 11px;
		display: inline-block;
}
</style>