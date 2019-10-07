<template>
    <div class="loading">
        <fa-icon icon="compass" class="loading__spinner" spin />
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

library.add(faCompass);

export default {};
</script>

<style>
.loading {
    text-align: center;
}
.loading__spinner {
    font-size: 2rem;
    color: #ffffff;
}
</style>