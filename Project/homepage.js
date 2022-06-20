const Slider = document.getElementById('slider');
const nextBtn = document.getElementById('nxt-btn');
const previousBtn = document.getElementById('prev-btn');

const images = [
    "1984.jpg","harry potter bundle.jpg","Hobbit.webp","Murder-on-the-Orient-Express-WebPstr.jpg","pride_and_prejudice.png","The Great Gatspy.webp","The Lord of The Rings.jpg","twocities.webp"
]

let imgindex = 0;

nextBtn.addEventListener('click', function(){
    imgindex++;
    if(imgindex == images.length) {
        imgindex = 0;
    }
    const nextImage = images[imgindex];

    Slider.src = "Images/"+nextImage;
}
);

previousBtn.addEventListener('click', function(){
    
    if(imgindex == 0) {
        imgindex = 8;
    }
    else{
        imgindex--;
        }
    const prevImage = images[imgindex];

    Slider.src = "Images/"+prevImage;
}
);