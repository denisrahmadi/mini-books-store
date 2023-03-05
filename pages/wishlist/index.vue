<template>
    <div>
        <div>
            <div class="text-center pt-5 pb-3">
                <h1>Your Wishlist</h1>
            </div>
            <div>
                <WishList />
            </div>
        </div>
    </div>
</template>
<script>
import WishList from '../../components/Wishlist/WishList.vue';

export default {
    components: { WishList }
}
</script>
<style>
    
</style>