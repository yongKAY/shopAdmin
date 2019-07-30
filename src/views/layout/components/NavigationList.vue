<template>
    <div>
        <template v-if="!item.children">
            <a :href="item.path">
                <el-menu-item :index="item.path">
                    <i :class="[item.meta.icon,{'switch-menu-off':isSwitchMenu}]" class="icon"></i>
                    <span>{{ item.meta.title }}</span>
                </el-menu-item>
            </a>
        </template>
        <el-submenu v-else :index="item.path">
            <template slot="title">{{ item.meta.title }}</template>
            <navigation-list v-for="(citem,cindex) in item.children" :key="cindex" :item="citem" />
        </el-submenu>
    </div>
</template>
<script>
import path from "path";
import NavigationList from "./NavigationList";
export default {
    name: "NavigationList",
    props: ["item"],
    components: {
        NavigationList
    },
    data() {
        return {};
    },
    computed: {
        isSwitchMenu() {
            return this.$store.state.isSwitchMenu;
        }
    },
    methods: {
        goLink(link) {
            this.$router.push(link);
        }
    },
    created() {
        
    }
};
</script>