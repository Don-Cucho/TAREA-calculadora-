class ejercicios{
    finvertir(num1){
        let c=0,arreglo=[]
        while(num1>0){
            c=num1%10
            num1=Math.floor(num1/10)
            arreglo.push(c)
        }
        return arreglo
    }
    fsumaDivisores(num,divisor){
        let acu=0
        while(divisor<num){
            if (num % divisor == 0){
                acu=acu+divisor
            }
            divisor++
        }
        return acu // retorno la suma de los divisores
    }
    fexponetes3(num,exp){
        let mul=1,c=0
        while(c<exp){
            mul*=num
            c++
        }
        return mul // retorno valor de respuesta 
    }
    fuFactorial(num){
        let c=1,fac=1
        while(c<=num){
            fac*=c
            c++
        }
        return fac
    }
    fnumerosRango(ini,fin){
        let arreglo=[]
        if(ini<fin){
            while(ini<fin){
                arreglo.push(ini)
                ini++
            }
            return arreglo
        }else{
            while(ini>fin){
                arreglo.push(ini)
                ini--
            }
            return arreglo
        }   
        
    }
    limpiar2(){
        let d=document
        d.getElementById("num1").value=""
        d.getElementById("num2").value=""
        d.getElementById('respuesta').textContent=""
    }
    limpiar1(){
        let d=document
        d.getElementById('num1').value=""
        d.getElementById('respuesta').textContent=""
        
    }
    Perfectos1(){
        let serie=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        serie=serie.split(",").map(n => Number(n))
        let long=serie.length
        let arreglo=[],n=0,suma=0
        for(let i=0;i<long;i++){
            let num1=serie[i]
            n=this.fsumaDivisores(num1,1)
            if(n==num1){ //verifico si el numero es perfecto
                suma+=num1 //sumo los perfectos
                arreglo.push(num1)// agrego los numeros que son perfectos
            }
        }
        textarea.textContent=(`la suma de los numeros perfectos ${arreglo}:\nEs:${suma}`)
        
    }
    Primo2(){
        let serie =document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        serie=serie.split(",").map(n => Number(n))
        let long=serie.length
        let aRreglo=[]
        for(let i=0;i<long;i++){
            let num1=serie[i]
            let c=2,d=1
            while(c<num1&& d==1){
                if(num1%c==0){
                    d=0
                }
                c++
            }
            if(d==1){
                aRreglo.push(num1)
            }
        }
        textarea.textContent=(`Los numeros primos\nSon: ${aRreglo}`)
    } 
    EjExponente3(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let textarea=document.getElementById("respuesta")
        let x=this.fexponetes3(num1,num2) // envio los valores a la funcion para que me retorne la respuesta 
        textarea.textContent=(`El numero ${num1} elevado a ${num2}\nEl resultado es: ${x}`)
    }
    EjNumeroElevado4(){
        let serie =document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        serie=serie.split(",").map(n => Number(n))
        let long=serie.length
        let arreglo=[]
        for(let i=0;i<long;i++){
            let num1=serie[i]
            let ex=this.fexponetes3(num1,num1)
            arreglo.push(ex)
        }
        textarea.textContent=(`Los numeros elevados asi mismo ${serie}\nLa respuesta es: ${arreglo}`)
    }
    EjtablDeMul5(){
        let num1=parseInt(document.getElementById("num1").value)
        let textarea=document.getElementById("respuesta")
        let i=0,tabla="",mul=0
        for(i=1;i<=12;i++){
            mul=num1*i
            tabla = tabla + num1 + " * " + i + " = " + mul + "\n"
        }
        textarea.textContent=(`La tabla de multiplicar del valor ${num1}\n${tabla}`)
    }
    ArrDeDivisores6(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let textarea=document.getElementById("respuesta")
        let acu=0,arreglo=[],valorin=num2
        while(valorin<num1){
            if (num1 % valorin == 0){
            acu=valorin
            arreglo.push(acu)
            }
            valorin++
        }
        textarea.textContent=(`Los divisores de ${num1} iniciando de ${num2}\nSon: ${arreglo}`)
    }
    sumaDeDivisores7(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let textarea=document.getElementById("respuesta")
        let s=this.fsumaDivisores(num1,num2)
        textarea.textContent=(`La suma de divisores ${num1} iniciando desde ${num2}\nEs: ${s}`)
    }
    invertirNum8(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        let a=this.finvertir(num1)
        textarea.textContent=(`los numeros imvertidos de ${num1}\nSon: ${a}`)
    }
    SumaDeDijitos9(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        let num=this.finvertir(num1)
        let i=0,suma=0
        while(i<num.length){
            suma+=num[i]
            i++
        }
        textarea.textContent=(`la suma de los digitos ${num1}\nSon: ${suma}`)
    }
    DijitosPares10(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        num1=num1.split(",").map(n => Number(n))
        let num=this.finvertir(num1)
        let i=0,arreglo=[]
        while(i<num.length){
            if(num[i]%2==0){
                arreglo.push(num[i])
            }
            i++
        }
        textarea.textContent=(`los numeros pares de ${num1}\nSon: ${arreglo}`)
    }
    DadoUnNumPrimer11(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        let num=this.finvertir(num1)
        let i=num.length-1
        textarea.textContent=(`El primer digito de ${num1}\nEs: ${num[i]}`)
    }
    DadoUnNumUltimo12(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        let num=this.finvertir(num1)
        textarea.textContent=(`El ultimo digito de ${num1}\nEs: ${num[0]}`)
    }
    factorial13(){
        let num1=parseInt(document.getElementById("num1").value)
        let textarea=document.getElementById("respuesta")
        let f=this.fuFactorial(num1)
        textarea.textContent=(`El factorual del digito ${num1}\nEs: ${f}`)
    }
    ArrFactorial14(){
        let num1=document.getElementById("num1").value
        let textarea=document.getElementById("respuesta")
        num1=num1.split(",").map(n => Number(n))
        let arreglo=[],n=0,i=0,f=0
        while(i<num1.length){
            n=num1[i]
            f=this.fuFactorial(n)
            i++
            arreglo.push(f)
        }
        textarea.textContent=(`El factorial de los numeros ${num1}\nEs: ${arreglo}`)
    }
    Arrvalor15(){
        let num1=parseInt(document.getElementById("num1").value)
        let num2=parseInt(document.getElementById("num2").value)
        let textarea=document.getElementById("respuesta")
        let arr=this.fnumerosRango(num1,num2)
        textarea.textContent=(`Inicio ${num1} Fin ${num2}\nEs: ${arr}`)
    }
    

}
let ej = new ejercicios
//ej.ArrFactorial14()
