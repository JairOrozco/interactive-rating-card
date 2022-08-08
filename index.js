const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');

const containerRating = document.querySelector('#containerRating')
const submit = document.querySelector('#submit');

const front = document.querySelector('#front')
const reverse = document.querySelector('#reverse')




one.addEventListener('click', function(){
    
    one.classList.remove('backgrounddarkblue')
    one.classList.add('backgroundgray')

    if(two.classList.contains('backgroundgray')) {
        two.classList.remove('backgroundgray')
        two.classList.add('backgrounddarkblue')
        one.classList.add('backgroundgray')
    }

    if(three.classList.contains('backgroundgray')) {
        three.classList.remove('backgroundgray')
        three.classList.add('backgrounddarkblue')
        one.classList.add('backgroundgray')
    }

    if(four.classList.contains('backgroundgray')) {
        four.classList.remove('backgroundgray')
        four.classList.add('backgrounddarkblue')
        one.classList.add('backgroundgray')
    }

    if(five.classList.contains('backgroundgray')) {
        five.classList.remove('backgroundgray')
        five.classList.add('backgrounddarkblue')
        one.classList.add('backgroundgray')
    }
})

two.addEventListener('click', function(){

    two.classList.remove('backgrounddarkblue')
    two.classList.add('backgroundgray')

    if(one.classList.contains('backgroundgray')) {
        one.classList.remove('backgroundgray')
        one.classList.add('backgrounddarkblue')
        two.classList.add('backgroundgray')
    }

    if(three.classList.contains('backgroundgray')) {
        three.classList.remove('backgroundgray')
        three.classList.add('backgrounddarkblue')
        two.classList.add('backgroundgray')
    }

    if(four.classList.contains('backgroundgray')) {
        four.classList.remove('backgroundgray')
        four.classList.add('backgrounddarkblue')
        two.classList.add('backgroundgray')
    }

    if(five.classList.contains('backgroundgray')) {
        five.classList.remove('backgroundgray')
        five.classList.add('backgrounddarkblue')
        two.classList.add('backgroundgray')
    }
})

three.addEventListener('click', function(){
    three.classList.remove('backgrounddarkblue')
    three.classList.add('backgroundgray')

    if(one.classList.contains('backgroundgray')) {
        one.classList.remove('backgroundgray')
        one.classList.add('backgrounddarkblue')
        three.classList.add('backgroundgray')
    }

    if(two.classList.contains('backgroundgray')) {
        two.classList.remove('backgroundgray')
        two.classList.add('backgrounddarkblue')
        three.classList.add('backgroundgray')
    }

    if(four.classList.contains('backgroundgray')) {
        four.classList.remove('backgroundgray')
        four.classList.add('backgrounddarkblue')
        three.classList.add('backgroundgray')
    }

    if(five.classList.contains('backgroundgray')) {
        five.classList.remove('backgroundgray')
        five.classList.add('backgrounddarkblue')
        three.classList.add('backgroundgray')
    }
})

four.addEventListener('click', function(){
    four.classList.remove('backgrounddarkblue')
    four.classList.add('backgroundgray')

    if(one.classList.contains('backgroundgray')) {
        one.classList.remove('backgroundgray')
        one.classList.add('backgrounddarkblue')
        four.classList.add('backgroundgray')
    }

    if(two.classList.contains('backgroundgray')) {
        two.classList.remove('backgroundgray')
        two.classList.add('backgrounddarkblue')
        four.classList.add('backgroundgray')
    }

    if(three.classList.contains('backgroundgray')) {
        three.classList.remove('backgroundgray')
        three.classList.add('backgrounddarkblue')
        four.classList.add('backgroundgray')
    }

    if(five.classList.contains('backgroundgray')) {
        five.classList.remove('backgroundgray')
        five.classList.add('backgrounddarkblue')
        four.classList.add('backgroundgray')
    }
})

five.addEventListener('click', function(){
    five.classList.remove('backgrounddarkblue')
    five.classList.add('backgroundgray')

    if(one.classList.contains('backgroundgray')) {
        one.classList.remove('backgroundgray')
        one.classList.add('backgrounddarkblue')
        five.classList.add('backgroundgray')
    }

    if(two.classList.contains('backgroundgray')) {
        two.classList.remove('backgroundgray')
        two.classList.add('backgrounddarkblue')
        five.classList.add('backgroundgray')
    }

    if(three.classList.contains('backgroundgray')) {
        three.classList.remove('backgroundgray')
        three.classList.add('backgrounddarkblue')
        five.classList.add('backgroundgray')
    }

    if(four.classList.contains('backgroundgray')) {
        four.classList.remove('backgroundgray')
        four.classList.add('backgrounddarkblue')
        five.classList.add('backgroundgray')
    }
})


submit.addEventListener('click', function() {
    let uno = 1
    let dos = 2
    let tres = 3
    let cuatro = 4
    let cinco = 5

    if(one.classList.contains('backgroundgray')){
        let ratingElement = document.createElement('p')
        let ratingText = document.createTextNode(`You selected ${uno} out of 5`)
        ratingElement.append(ratingText)

        ratingElement.classList.add('ratingText')

        containerRating.append(ratingElement);

        front.classList.add('inactive')
        reverse.classList.remove('inactive')

    }else if (two.classList.contains('backgroundgray')) {
        let ratingElement = document.createElement('p')
        let ratingText = document.createTextNode(`You selected ${dos} out of 5`)
        ratingElement.append(ratingText)

        ratingElement.classList.add('ratingText')

        containerRating.append(ratingElement);

        front.classList.add('inactive')
        reverse.classList.remove('inactive')

    }else if (three.classList.contains('backgroundgray')) {
        let ratingElement = document.createElement('p')
        let ratingText = document.createTextNode(`You selected ${tres} out of 5`)
        ratingElement.append(ratingText)

        ratingElement.classList.add('ratingText')

        containerRating.append(ratingElement);

        front.classList.add('inactive')
        reverse.classList.remove('inactive')

    }else if (four.classList.contains('backgroundgray')) {
        let ratingElement = document.createElement('p')
        let ratingText = document.createTextNode(`You selected ${cuatro} out of 5`)
        ratingElement.append(ratingText)

        ratingElement.classList.add('ratingText')

        containerRating.append(ratingElement);

        front.classList.add('inactive')
        reverse.classList.remove('inactive')

    }else if (five.classList.contains('backgroundgray')) {
        let ratingElement = document.createElement('p')
        let ratingText = document.createTextNode(`You selected ${cinco} out of 5`)
        ratingElement.append(ratingText)

        ratingElement.classList.add('ratingText')

        containerRating.append(ratingElement);

        front.classList.add('inactive')
        reverse.classList.remove('inactive')
    
    }else {
        alert('Selecciona una calificación a nuestro servicio');
    }

})