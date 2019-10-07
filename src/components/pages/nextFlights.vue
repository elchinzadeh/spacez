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
                :onClick="() => handleSelect(flight.id)"
            />
        </div>
    </div>
</template>

<script>
import Card from "../molecules/card.vue";
import Loading from "../molecules/loading";
import API from "../../api";

export default {
    name: "next-flights",
    components: {
        Card,
        Loading
    },
    props: {
        launchOnSelect: {
            type: Function,
            required: false
        }
    },
    data() {
        return {
            loading: true,
            flights: []
        };
    },
    mounted() {
        this.getNextLaunches()
    },
    methods: {
        getNextLaunches() {
            this.loading = true;

            API.nextLaunches().then(res => {
                this.flights = res.launches;

                let countries = new Set()
                res.launches.forEach(item => {
                    countries.add(item.location.countryCode)
                })
                console.log(Array.from(countries).join(', '))
                this.loading = false;
            });
        },
        handleSelect(id) {
            this.launchOnSelect(id)
        }
    }
};
</script>

<style>
</style>