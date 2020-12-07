<template>
	<div>
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item path="/home" activeColor="red">
				<template #item-icon>
					<img src="~assets/img/tabbar/home.png" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/home_active.png" alt="" />
				</template>
				<template #item-text>
					<div>首页</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/category" activeColor="red">
				<template #item-icon>
					<img src="~assets/img/tabbar/category.png" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/category_active.png" alt="" />
				</template>
				<template #item-text>
					<div>分类</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/shopcar" activeColor="red">
				<template #item-icon>
					<img src="~assets/img/tabbar/shop_car.png" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/shop_car_active.png" alt="" />
				</template>
				<template #item-text>
					<div>购物车</div>
				</template>
			</tab-bar-item>

			<tab-bar-item path="/profile" activeColor="red">
				<template #item-icon>
					<img src="~assets/img/tabbar/profile.png" alt="" />
				</template>
				<template #item-icon-active>
					<img src="~assets/img/tabbar/profile_active.png" alt="" />
				</template>
				<template #item-text>
					<div>我的</div>
				</template>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
	import TabBar from 'components/common/tabbar/TabBar.vue'
	import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

	export default {
		name: 'TabBarShow',
		components: {
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
