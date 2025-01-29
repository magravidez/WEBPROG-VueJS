<template>
    <ul>
        <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
</template>