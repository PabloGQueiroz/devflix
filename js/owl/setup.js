$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

            function links1(a) {                
                //alert("valor de a " + a);
                if (a == 1){
                    window.open('https://www.netflix.com/br/title/80058486', '_blank');   
                }
                else if (a == 2){
                    window.open('https://www.adorocinema.com/series/serie-18054/temporada-36086/', '_blank');
                }
                else {
                    window.open('https://www.imdb.com/title/tt4474344/', '_blank');
                }
            } 