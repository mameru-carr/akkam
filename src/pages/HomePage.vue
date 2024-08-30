<script setup>
</script>

<template lang="pug">
#grid-container
    #intro
        #center
            #title
                h2 About Me
            p Hi I am J. Christy Femila, Professor of Religion at Tamil Nadu Theological Seminary. ...
    #cover
        img(src="/images/Amma.jpeg")
</template>

<style scoped lang="sass">
#grid-container
    display: grid
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
    grid-gap: 2rem
    #cover
        max-width: 40ch
    #intro
        display: flex
        place-content: flex-end
        #center
            max-width: 40ch
            h2
                font-size: 2rem
                font-family: 'Alegreya SC', Georgia, 'Times New Roman', Times, serif
            p
                font-family: 'SUSE'
                font-size: 1.5rem
img
    width: 100%
</style>