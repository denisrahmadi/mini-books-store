<template>
    <div>
        <div>
            <div class="text-center pt-5 pb-3">
                <h1><span class="bg-white rounded px-5">Your Wishlist</span></h1>
            </div>
            <div 
                v-if="$store.getters.iswishlistBooksData" 
                class="text-center pb-5"
            >
                <img src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1233.jpg?w=740&t=st=1678339107~exp=1678339707~hmac=9e8a60952086f982601fd36c78cd24bbf8f18c9053fb8fe02ef19ad27e940e0c" alt="empty wishlist" width="300">
                <h1><span class="bg-white px-5">is empty</span></h1>
            </div>
            <div v-if="!$store.getters.iswishlistBooksData">
                <WishList  />
            </div>
        </div>
    </div>
</template>
<script>
import WishList from '../../components/Wishlist/WishList.vue';

export default {
    layout: 'navfoot',
    components: { WishList }
}
</script>
<style>
    
</style>