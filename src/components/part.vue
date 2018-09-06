<template>
    <div class="wrapper-main">
        <form>
            <h1>Page part</h1>
            <router-link tag="a" to="/">Router link another</router-link><br/><br/>

            <input id="item" type="text">

        </form>

        <h2>items</h2>

        <ul>

        </ul>

        <button id="btn">Clear all</button>

    </div>

</template>
<script>

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const ul = document.querySelector('.wrapper-main ul');
    const button = document.querySelector('button');
    const input = document.getElementById('item');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = JSON.parse(localStorage.getItem('items'));

    const liMaker = (text) => {
        const li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        liMaker(input.value);
        input.value = "";
    });

    data.forEach(item => {
        liMaker(item);
});

    button.addEventListener('click', function () {
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    });
});


    export default {
        name: 'Part',
        mounted() {

        }
    }
</script>

<style>
    #wrapper ul {
        display: inline-block;
        list-style: circle;
    }
    #btn {
        display: block;
        max-width: 300px;
        margin: 0 auto;
    }
</style>