<template>
    <div id="NavBar">
        {{ isSwitchMenu }}
        <el-menu mode="vertical" :collapse="isSwitchMenu" :show-timeout="200">
            <template v-for="(item,index) in routes">
                <el-menu-item v-if="item.children.length == 1" :key="index" :index="item.path" :class="{'switch-menu-off':isSwitchMenu}">
                    <div>
                        <i :class="item.meta.icon" class="icon"></i>
                        <span slot="title">{{ item.meta.title }}</span>
                    </div>
                </el-menu-item>
                <el-submenu v-if="item.children.length > 1" :key="index" :index="item.path" :class="{'switch-menu-off':isSwitchMenu}">
                    <template slot="title">
                        <i :class="item.meta.icon" class="icon"></i>
                        <span>{{ item.meta.title }}</span>
                    </template>
                    <navigation-list v-for="(citem,cindex) in item.children" :key="cindex" :item="citem" :isSwitchMenu="isSwitchMenu" />
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
import NavigationList from "./NavigationList";
export default {
    name: "Navbar",
    data() {
        return {
            isCollapse: true
        };
    },
    components: {
        NavigationList
    },
    computed: {
        routes() {
            return this.$router.options.routes;
        },
        isSwitchMenu() {
            return this.$store.state.isSwitchMenu;
        }
    },
    methods: {
        goLink(link) {
            this.$router.push(link);
        }
    }
};
</script>
<style scope>
</style>
