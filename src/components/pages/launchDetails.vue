<template>
    <div v-if="launch" class="launch">
        <img :src="launch.rocket.imageURL" alt class="launch__image" />
        <div>
            <div class="content--headerless">
                <div class="lsp__name">
                    {{ launch.lsp ? launch.lsp.name : null }}
                    <img :src="lspCountry" alt class="lsp__country" />
                </div>
                <div class="launch__name">{{ launch.name }}</div>
                <div class="date">{{ launch.net }}</div>
                <div class="section">
                    <div class="section__title">Launch Complex</div>
                    <Card
                        :title="launch.location ? launch.location.name : null"
                    >
                        <div
                            v-for="pad in launch.location.pads"
                            :key="pad.id"
                            class="pad"
                        >
                            {{ pad.name }}
                        </div>
                    </Card>
                </div>

                <div class="section">
                    <div class="section__title">Rocket</div>
                    <Card
                        :tagline="launch.rocket.agencies[0] ? launch.rocket.agencies[0].name : null"
                        :title="launch.rocket.name"
                        :description="agencyType"
                    >
                    </Card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Card from "../molecules/card";
import API from "../../api"
import countryCodes from '../../countryCodes'

export default {
    name: "launch-details",
    components: {
        Card
    },
    props: {
        id: {
            required: true,
            type: Number
        }
    },
    data() {
        return {
            launch: null,
            agencyType: ''
        }
    },
    mounted() {
        this.getLaunchById()
    },
    methods: {
        getLaunchById() {
            API.launchById(this.id)
                .then(res => {
                    console.log(res)
                    this.launch = res.launches[0]
                    this.getAgencyTypeById(res.launches[0].rocket.agencies[0].type)
                })
                .catch(error => {
                    console.log(error)
                })
        },
        getAgencyTypeById(id) {
            API.agencyTypeById(id)
                .then(res => {
                    this.agencyType = res.types[0].name
                })
        }
    },
    computed: {
        lspCountry() {
            const country = countryCodes[this.launch.location.countryCode]
            return '/img/flags/' + country + '.svg'
        }
    }
};
</script>

<style scoped>
.launch {
    color: #ffffff;
}
.launch__image {
    width: 100%;
}
.lsp__name {
    font-size: 20px;
    color: rgba(255, 255, 255, 0.48);
    font-weight: 600;
    display: flex;
    align-items: center;
}
.lsp__country {
    width: 20px;
    height: 20px;
    margin-left: 12px;
}
.launch__name {
    font-size: 28px;
    font-weight: 500;
}
.date {
    font-size: 19px;
    margin-top: 16px;
}
.section {
    margin-top: 24px;
}
.section__title {
    margin: 0 0 8px 8px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.48);
}
.pad {
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
    margin-top: 20px;
}
</style>