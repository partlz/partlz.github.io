let imagesData = [
{
    photo: 'images/DSC_0086.jpg',
    title: 'San Francisco',
    description: 'The beautiful Golden Gate bridage'
},

{
    photo: 'images/DSC_0131.jpg',
    title: 'San Francisco',
    description: 'During our 16 days trip we have visited San Franscisco. This picture was taken on the beach.'
},

{
    photo: 'images/DSC_0140.jpg',
    title: 'Muir Woods',
    description: 'North from San Francisco there is an ancient forest called Moir Woods'
},

{
    photo: 'images/DSC_0235.jpg',
    title: 'San Francisco - Japan garaden.',
    description: 'There are a lot of beautiful parks in San Francisco. One of my favorite was this Japan style garden.'
},

{
    photo: 'images/DSC_0378.jpg',
    title: 'Universal Studios - Hogwarts School of Witchcraft and Wizardry',
    description: 'One of the best stop durign our trip was Universal Studios. We had a wonderful day here. I wish we could go back sometime.'
}]

let currentPhoto = 0;
// let imagesData = [photo1, photo2, photo3, photo4, photo5]

let loadPhoto = (currentPhoto) => {
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);
    $(`.thumbnail`).css('box-shadow', '0px 15px 10px -15px #111').css('height', '60px').css('width', '60px');
    $(`.thumbnail[data-index=${currentPhoto}]`).css('box-shadow', '0px 15px 10px -10px #111').css('height', '70px').css('width', '70px');
}

$('.right').click(() => {
    if (currentPhoto < imagesData.length - 1) {
        currentPhoto++;
    } else {
        currentPhoto = 0;
    }
    loadPhoto(currentPhoto);
});

$('.left').click(() => {
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = imagesData.length - 1;
    }
    loadPhoto(currentPhoto);
});

imagesData.forEach((item, index) => {
    $('ul').append(`<li><img class="thumbnail" data-index="${index}" src=${item.photo}></li>`);
    $('.thumbnail').click((event) => {
        let indexClicked = $(event.target).attr('data-index');
        let numberIndex = parseInt(indexClicked);
        currentPhoto = numberIndex;
        loadPhoto(currentPhoto);
    })
});

loadPhoto(currentPhoto);