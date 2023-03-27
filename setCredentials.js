class setCredentials{
    constructor(){
        this.cardNameOutput = document.querySelector('#nameOutput')
        this.cardNumberOutput = document.querySelector('#numbersOutput')
        this.expDataOutput = document.querySelector('#expDataOutput')
        this.cvcOutput = document.querySelector('#cvcOutput')
           
        this.cardNameInput = document.querySelector('#cardName')
        this.cardNumberInput = document.querySelector('#cardNumber')
        this.expData1Input = document.querySelector('#expDate1')
        this.expData2Input = document.querySelector('#expDate2')
        this.cvcInput = document.querySelector('#cvc')
        this.button = document.querySelector('#button')
        this.thankContainer = document.querySelector('.thank-container')
        this.credentials = document.querySelector('.credentials')
        this.data1 = document.querySelector('#data1')
        this.data2 = document.querySelector('#data2')
        this.setValuesOutput()
        this.verifyValid()
      
    }

    set cardNumber(value){
        this.cardNumberOutput.innerHTML = value
    }

   setSpace(value){
    if (this.cardNumberInput.value.length == value){
        this.cardNumberInput.value += ' '
    }
   }
        setName(value){
        this.cardNameOutput.innerHTML = value
    }

    testRegex(regex,element){
        return regex.test(element)
    }

    addShow(value){
            value.classList.remove('show-off')
            value.classList.add('show-on')
    }

    removeShow(value){
        value.classList.remove('show-on')
        value.classList.add('show-off')
    }


    interval(callback,element){

        setTimeout(()=>{
            callback(element)
        },1)
    }

    intervalRemove(element){

        setTimeout(()=>{
            element.style.display = 'none'
        },500)
    }

    



    verifyValid(){

      this.button.addEventListener('click',(elementB)=>{

        elementB.preventDefault()

        function setMsgError(msg,element,display){
        element.innerHTML = msg
        element.style.display = display
        }  

        function errorStyles(input){
            input.classList.add('errorStyles')
        }

        function removeErrorStyles(input){
            input.classList.remove('errorStyles')
        }

        let cardname,number,data1,data2,cvc

        

        let pError = element => {
            return element.parentNode.querySelector('.msgError')
        }

            if(this.testRegex(/\d/,(this.cardNameInput.value))){
            setMsgError('Name cannot contain numbers!',pError(this.cardNameInput),'block')
            this.interval(this.addShow,pError(this.cardNameInput))
            errorStyles(this.cardNameInput)
            cardname = false

            }else if (this.cardNameInput.value == ''){

            setMsgError('Name cannot be emtpy!',pError(this.cardNameInput),'block')
            this.interval(this.addShow,pError(this.cardNameInput),)
            errorStyles(this.cardNameInput)
            cardname = false

           }else{  

            this.removeShow(pError(this.cardNameInput))
            this.intervalRemove(pError(this.cardNameInput))
            removeErrorStyles(this.cardNameInput)
            cardname = true

           }


            if (this.testRegex(/[a-z]/i,this.cardNumberInput.value)){
                
            setMsgError('Wrong format, only numbers',pError(this.cardNumberInput),'block')
            this.interval(this.addShow,pError(this.cardNumberInput),)
            errorStyles(this.cardNumberInput)
            number = false

            }else if(this.cardNumberInput.value.length <= 18){

            setMsgError('Please fill in all card numbers',pError(this.cardNumberInput),'block')
            this.interval(this.addShow,pError(this.cardNumberInput),)
            errorStyles(this.cardNumberInput)
            number = false
            

          }else{

            this.removeShow(pError(this.cardNumberInput))
            this.intervalRemove(pError(this.cardNumberInput))
            removeErrorStyles(this.cardNumberInput)
            number = true
          }

           
          let dataError = document.querySelector('.dataError')       

           if(this.expData1Input.value == ''){
            
            setMsgError("Can't be blank",dataError,'block')
            this.interval(this.addShow,dataError)
            errorStyles(this.expData1Input)
            data1 = false
           }else if(this.testRegex(/[a-z]/i,this.expData1Input.value)){

            errorStyles(this.expData1Input)
            setMsgError('Wrong format, only numbers',dataError,'block')
            this.interval(this.addShow,dataError)
            data1 = false

           }else{
            if (this.expData2Input.classList.contains('errorStyles') != true){
                this.removeShow(dataError)
                this.intervalRemove(dataError)
            }
                removeErrorStyles(this.expData1Input)
    
                data1 = true
           }





           if(this.expData2Input.value == ''){
            
            setMsgError("Can't be blank",dataError,'block')
            this.interval(this.addShow,dataError)
            errorStyles(this.expData2Input)
            data2 = false

           }else if(this.testRegex(/[a-z]/i,this.expData2Input.value)){

            setMsgError('Wrong format, only numbers',dataError,'block')
            this.interval(this.addShow,dataError)
            errorStyles(this.expData2Input)
            data2 = false
           }else{
           
            if (this.expData1Input.classList.contains('errorStyles') != true){
                this.removeShow(dataError)
                this.intervalRemove(dataError)
            }
                removeErrorStyles(this.expData2Input)
                data2 = true
           }


           if(this.cvcInput.value == ''){

            setMsgError("Can't be blank",pError(this.cvcInput),'block')
            this.interval(this.addShow,pError(this.cvcInput),)
            errorStyles(this.cvcInput)
            cvc = false

           }else if(this.testRegex(/[a-z]/i,this.cvcInput.value)){
           
            setMsgError('Wrong format, only numbers',pError(this.cvcInput),'block')
            this.interval(this.addShow,pError(this.cvcInput),)
            errorStyles(this.cvcInput)
            cvc = false
            
           }else{

            this.removeShow(pError(this.cvcInput))
            this.intervalRemove(pError(this.cvcInput))
            removeErrorStyles(this.cvcInput)
            cvc = true
           }
           

         if(cvc && data1 && data2 && cardname &     number){
            this.credentials.style.opacity = '0'
            this.thankContainer.style.display = 'flex'
            setTimeout(()=>{
                this.thankContainer.style.opacity = '1'
            },1)
            setTimeout(() => {
                this.credentials.style.display = 'none'; 
            }, 1000);
    
         }
      

      })

      document.querySelector('button').addEventListener('click',()=>{
       

            this.credentials.style.display = 'flex'
            setTimeout(()=>{
                this.credentials.style.opacity = '1'
            },1)

            this.thankContainer.style.opacity = '0'
            setTimeout(()=>{
                this.thankContainer.style.display = 'none'
            },1000)

           
            this.cardNumberInput.value = ''
            this.cardNameInput.value = ''
            this.expData1Input.value = ''
            this.expData2Input.value = ''
            this.cvcInput.value =''    
            this.expData1Input.value = ''
            this.expData2Input.value = ''
            this.data1.innerHTML = '00'
            this.data2.innerHTML = '00'


            

            this.cardNumberOutput.innerHTML = '0000 0000 0000 0000'
            this.cardNameOutput.innerHTML = 'Felicia Leire'
            
            this.cvcOutput.innerHTML = '000'
        
      })

    }

   setValuesOutput(){
        this.cardNumberInput.addEventListener('keyup',()=>{
           
            this.cardNumberOutput.innerHTML = this.cardNumberInput.value

            this.setSpace(4)
            this.setSpace(9)
            this.setSpace(14)
           
        if(this.cardNumberInput.value == ''){
            this.cardNumberOutput.innerHTML = '0000 0000 0000 0000'
        }
    
    })


    this.cardNameInput.addEventListener('keyup',()=>{
        this.setName(this.cardNameInput.value)
    })

    this.expData1Input.addEventListener('keyup',()=>{

        
        this.data1.innerHTML = this.expData1Input.value

    })

    this.expData2Input.addEventListener('keyup',()=>{

      
        this.data2.innerHTML = this.expData2Input.value
        
  
        
    })

    this.cvcInput.addEventListener('keyup',()=>{
        this.cvcOutput.innerHTML = this.cvcInput.value
    })

   }

 

}

window.cardCredentials = new setCredentials();
