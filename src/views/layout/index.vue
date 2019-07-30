<template>
    <div id="wrap">
        <Header/>
        <div class="navbar" :class="{'switch-menu-off':isSwitchMenu}">
            <el-scrollbar >
                <Navbar class="navbar-list"/>
            </el-scrollbar>
        </div>
        <div class="main-container" :class="{'switch-menu-off':isSwitchMenu}">
            <Main/>
        </div>
    </div>
</template>
<script>
import { Header,Main,Navbar } from './components'
export default {
    name:'Layout',
    components:{
        Header,
        Main,
        Navbar
    },
    data(){
        return {
            
        }
    },
    computed:{
        isSwitchMenu(){
            return this.$store.state.isSwitchMenu
        }
    }
}
</script>
<style  lang="scss">

</style>
