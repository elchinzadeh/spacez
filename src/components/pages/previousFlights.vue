<template>
    <div>
        <Loading v-if="loading" />
        <div v-if="!loading">
            <Card
                v-for="flight in flights"
                :key="flight.id"
                :tagline="flight.rocket.name"
                :title="flight.name"
                :description="flight.location.name"
                :caption="flight.net"
                :bgImage="flight.rocket.imageURL !== 'https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png' ? flight.rocket.imageURL : 'https://i.pinimg.com/originals/3d/df/ba/3ddfbaaff070ea604879e06f4dc8669f.jpg'"
            />
        </div>
    </div>
</template>

<script>
import Card from "../molecules/card.vue";
import Loading from "../molecules/loading";
import API from "../../api";

export default {
    name: "previous-flights",
    components: {
        Card,
        Loading
    },
    data() {
        return {
            loading: true,
            flights: []
        };
    },
    mounted() {
        this.getPreviousLaunches()
    },
    methods: {
        getPreviousLaunches() {
            this.loading = true;

            API.previousLaunches().then(res => {
                this.flights = res.launches;
                this.loading = false;
            });
        }
    }
};
</script>

<style>
</style>