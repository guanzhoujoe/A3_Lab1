(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages=document.querySelectorAll('.data-ref'),
        miniModel = document.querySelector('.modelName'),
        miniPrice= document.querySelector('.priceInfo'),
        miniDetail = document.querySelector('.modelDetails'),
        appliedClass;

        function changeElements(){
          let carIndex=carData[this.id];

        miniModel.firstChild.nodeValue=carIndex.headline;
        miniPrice.firstChild.nodeValue=carIndex.carprice;
        miniDetail.firstChild.nodeValue=carIndex.text;
        //theImages.classList.add('')
        }
        theImages.forEach(function(element, index){
          element.addEventListener('click',changeElements,false);

        })


})();
