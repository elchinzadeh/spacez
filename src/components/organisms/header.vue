<template>
    <div class="header">
        <div class="header__container">
            <div class="header__back-btn" v-if="launchDetailsOpen" @click="handleBack">
                <fa-icon :icon="['fas', 'chevron-left']" />
                <span class="back-btn__text">{{ activeBarTitle }}</span>
            </div>
            <div class="header__title">{{ computedTitle }}</div>
        </div>
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronLeft);

export default {
    name: "app-header",
    props: {
        activeBarTitle: {
            type: String,
            required: true
        },
        launchDetailsOpen: {
            type: Boolean,
            required: false
        },
        backOnClick: {
            type: Function,
            required: false
        }
    },
    computed: {
        computedTitle() {
            return this.launchDetailsOpen
                ? "Launch Details"
                : this.activeBarTitle;
        }
    },
    methods: {
        handleBack() {
            this.backOnClick()
        }
    }
};
</script>

<style scoped>
.header {
    min-height: 70px;
    width: 100%;
    padding: 23px 16px 7px;
    display: flex;
    position: fixed;
    align-items: flex-end;
    box-sizing: border-box;
    background-color: rgba(33, 33, 33, 0.72);
    backdrop-filter: blur(10px);
    color: #fff;
    z-index: 1;
}

.header__back-btn {
    color: #FF9500;
    font-size: 17px;
}

.header__back-btn:hover {
    cursor: pointer
}

.back-btn__text {
    margin-left: 8px
}

.header__title {
    font-size: 34px;
    font-weight: 700;
}
</style>