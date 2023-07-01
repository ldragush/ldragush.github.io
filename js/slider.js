(function(){


    const sliders = [...document.querySelectorAll(".testimony__body")];
//darle funcionalidad a la flecha next
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    //esta funcion le da movilidad a los botones
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });


    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;
        

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        //condicionales para el testimoni y hacer que se mueva ya que suma y resta numeros 
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
            
        }

        sliders[value-1].classList.add('testimony__body--show');


    }

})();

//la funcion de arriba de da funcionalidad a testimony