<template>
    <div id="app">
        <AppHeader
            :activeBarTitle="tabs[activeBar].name"
            :launchDetailsOpen="Boolean(activeLaunchId)"
            :backOnClick="backOnClick"
        />
        <div class="content" v-if="!activeLaunchId">
            <NextFlights v-if="activeBar === 0" :launchOnSelect="launchOnSelect"/>
            <PreviousFlights v-if="activeBar === 1" />
            <Agencies v-if="activeBar === 2" />
        </div>
        <div class="content--launch" v-if="activeLaunchId">
            <LaunchDetails :id="activeLaunchId"/>
        </div>
        <TabBar v-show="!activeLaunchId" :activeBar="activeBar" :changeActiveBar="changeActiveBar" :tabs="tabs"/>
    </div>
</template>

<script>
import Header from './components/organisms/header'
import TabBar from './components/organisms/tabBar'
import NextFlights from './components/pages/nextFlights'
import PreviousFlights from './components/pages/previousFlights'
import Agencies from './components/pages/agencies'
import LaunchDetails from './components/pages/launchDetails'
import './app.css'

export default {
    name: 'app',
    components: {
        'AppHeader': Header,
        NextFlights,
        PreviousFlights,
        Agencies,
        LaunchDetails,
        TabBar
    },
    data() {
        return {
            activeBar: 0,
            activeLaunchId: null,
            tabs: [
                {
                    id: 0,
                    name: "Next Flights",
                    shortName: "Next Flights",
                    icon: "space-shuttle"
                },
                {
                    id: 1,
                    name: "Previous Flights",
                    shortName: "Previous",
                    icon: "satellite"
                },
                {
                    id: 2,
                    name: "Agencies",
                    shortName: "Agencies",
                    icon: ['fab', 'galactic-republic']
                },
                // {
                //     id: 3,
                //     name: "News",
                //     shortName: "News",
                //     icon: "meteor"
                // },
                // {
                //     id: 4,
                //     name: "Favorites",
                //     shortName: "Favorites",
                //     icon: "star"
                // }
            ] 
        }
    },
    methods: {
        changeActiveBar(activeBar) {
            this.activeBar = activeBar
        },
        launchOnSelect(id) {
            this.activeLaunchId = id
        },
        backOnClick() {
            this.activeLaunchId = null
        }
    }
}
</script>

<style>
#app {
    min-height: 100vh;
    background-color: #000;
}

#statusbar {
    height: 24px;
    background-color: #000;
}

.content {
    padding: 86px 16px 16px
}

.content--launch {
    padding: 90px 0px 16px
}

.content--headerless {
    padding: 16px
}
</style>
