<template>
    <div id="header">
        <div class="header clearfix">
            <div class="logo flex-wrap" :class="{'switch-menu-off':isSwitchMenu}">
                <img src="@/assets/logo.png">
                <div v-if="!isSwitchMenu">
                    Admin
                </div>
            </div>
            <div class="container flex-wrap">
                <div class="menu-switch" @click="switchMenu()" :class="{'switch-menu-off-icon':isSwitchMenu}">
                    <span class="el-icon-s-fold"></span>
                </div>
                <div class="flex-con"></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "Header",
    data() {
        return {
            
        };
    },
    computed:{
        isSwitchMenu(){
            return this.$store.state.isSwitchMenu
        }
    },
    methods: {
        switchMenu() {
            this.$store.commit('SWITCH_MENU_CHANGE');
        }
    },
    created(){

    }
};
</script>
<style lang="scss">
#header {
    .menu-switch {
        cursor: pointer;
        font-size: 35px;
        transition: 0.2s all;
        transform-origin: center center;
        &:hover {
            color: rgba(51, 51, 51, 0.5);
        }
        &.switch-menu-off-icon{
            transform: rotateY(-180deg);
        }
    }
}
</style>

