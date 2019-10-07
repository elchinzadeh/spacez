<template>
    <div class="tab-bar">
        <div
            v-for="bar in tabs"
            :key="bar.id"
            class="tab-bar__item"
            :class="bar.id === activeBar ? 'tab-bar__item--active' : null"
            @click="handleBarClick(bar.id)"
        >
            <fa-icon :icon="bar.icon"/>
            <div class="item__title">{{ bar.shortName }}</div>
        </div>
    </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpaceShuttle, faSatellite, faMeteor, faStar } from '@fortawesome/free-solid-svg-icons'
import { faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'

library.add(faSpaceShuttle, faSatellite, faGalacticRepublic, faMeteor, faStar)

export default {
    name: "app-tab",
    props: {
        activeBar: {
            type: Number,
            required: true
        },
        changeActiveBar: {
            type: Function,
            required: true
        },
        tabs: {
            type: Array,
            required: true
        }
    },
    methods: {
        handleBarClick(id) {
            this.changeActiveBar(id)
        }
    }
}
</script>

<style>
.tab-bar {
    height: 55px;
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: rgba(33, 33, 33, 0.72);
    backdrop-filter: blur(10px);
    box-sizing: border-box;
}
.tab-bar__item {
    width: 50px;
    color: #8E8E93;
    text-align: center;
}
.tab-bar__item:hover {
    cursor: pointer;
    color: #FF9500;
}
.tab-bar__item--active {
    color: #FF9500;
}
.item__title {
    font-size: 10px;
    margin-top: 5px;
}
</style>