<template>
    <div id="main" class="main">
        <div class="container">
            <transition name="el-fade-in-linear">
                <router-view/>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:'Main'
}
</script>
