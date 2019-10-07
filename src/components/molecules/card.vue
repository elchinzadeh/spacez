<template>
    <div class="card" :class="computedClass" :style="background" @click="handleClick">
        <div class="card__content">
            <div class="content--top">
                <div v-if="tagline" class="content__tagline">{{tagline}}</div>
                <div v-if="title" class="content__title">{{title}}</div>
            </div>
            <div v-if="description || caption" class="content--bottom">
                <div v-if="description" class="content__description">{{description}}</div>
                <div v-if="caption" class="content__caption">{{caption}}</div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "card",
    props: {
        tagline: {
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        caption: {
            type: String,
            required: false
        },
        bgImage: {
            type: String,
            required: false
        },
        onClick: {
            type: Function,
            required: false
        }
    },
    computed: {
        background() {
            if (this.bgImage) {
                return {
                    background: `url(${this.bgImage}) center/cover no-repeat #222222`
                };
            } else {
                return { backgroundColor: "#222222" };
            }
        },
        computedClass() {
            if (this.bgImage) {
                return "card--overlay";
            }
        }
    },
    methods: {
        handleClick() {
            if (this.onClick) {
                this.onClick();
            }
        }
    }
};
</script>

<style scoped>
.card {
    position: relative;
    padding: 23px 21px;
    margin-bottom: 16px;
    border-radius: 10px;
    box-sizing: border-box;
}
.card--overlay {
    transition-duration: 300ms;
}
.card--overlay:before {
    position: absolute;
    content: " ";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 0;
    background-color: rgba(0, 0, 0, 0.25);
}
.card--overlay:hover {
    cursor: pointer;
    transform: scale(0.98);
}
.card__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
}
.card__content * {
    position: relative;
}
.content--bottom {
    margin-top: 64px;
}
.content__tagline {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #e5e5ea;
}
.content__title {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
}
.content__description {
    font-size: 16px;
    font-weight: 500;
    color: #efeff4;
}
.content__caption {
    margin-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #e5e5ea;
}
</style>