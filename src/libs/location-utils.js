// import wx from '@/common/jweixin.js';
const getCurrentLocation = () => {
	// 通过微信经纬度 - 使用百度地图api
	return getCurrentLocationByWechat();
};
// 通过微信获取位置信息
const getCurrentLocationByWechat = () => {
	return new Promise((resolve, reject) => {
		// 从此处开始注释
		wx.getLocation({
			type: 'wgs84',
			isHighAccuracy: true,
			highAccuracyExpireTime: 3000,
			success: (res) => {
				console.log('调用微信定位获取到的数据：', res);
				let point = new BMap.Point(res.longitude, res.latitude);
				let convertor = new BMap.Convertor();
				let pointArr = [];
				pointArr.push(point);
				convertor.translate(pointArr, 1, 5, (data) => {
					let myGeo = new BMap.Geocoder();
					if (data.status === 0) {
						let locationData = {
							lng: data.points[0].lng,
							lat: data.points[0].lat
						};
						myGeo.getLocation(new BMap.Point(data.points[0].lng, data.points[0].lat), (rs) => {
							if (rs) {
								let addComp = rs.addressComponents;
								let myCity = addComp.province === addComp.city ? addComp.city : addComp.province + addComp.city;
								locationData.province = addComp.province;
								locationData.city = addComp.city;
								locationData.district = addComp.district;
								locationData.poiName = myCity + addComp.district + addComp.street + addComp.streetNumber;
								locationData.address = addComp.street + addComp.streetNumber;
								resolve(locationData);
							}
						});
					}
				});
			},
			fail: (res) => {
				console.log('获取位置失败！', res);
				resolve(null);
			}
		});
		//本地调试
		// resolve(null);
	})
};
module.exports.getCurrentLocation = getCurrentLocation;
