const meals_url = "http://localhost:3000/meals" // won't fetch from live host https://austinjnr.github.io/data/mealdb.json
document.addEventListener('DOMContentLoaded', () => {

    const menuBody = document.getElementById('kaws')
    const landingPg = document.getElementById('login')
    
    const buttonLink = document.getElementById('btn-link')


    buttonLink.addEventListener('click', () => {
        landingPg.style.display = "none"
        menuBody.removeAttribute('hidden')
        menuBody.style.display = "block"
    })

    //create option1
    const createMeal1 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)

        //append button
        bodyDiv.appendChild(orderButton)

        orderButton.addEventListener('click', () => {
            if (orderButton.textContent === 'ORDER MEAL') {
              orderButton.textContent = 'Meal Order';
            } else {
              orderButton.textContent = 'ORDER MEAL';
            }
          });
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal2 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`
        

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
         //append button
         bodyDiv.appendChild(orderButton)

         orderButton.addEventListener('click', () => {
             if (orderButton.textContent === 'ORDER MEAL') {
               orderButton.textContent = 'Meal Order';
             } else {
               orderButton.textContent = 'ORDER MEAL';
             }
           });
        

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal3 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
        
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal4 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
        
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal5 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
        
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal6 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
       
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal7 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
        
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal8 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
       
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createMeal9 = (image, name, description, price) => {

        const menuDiv = document.createElement('div')
        menuDiv.classList.add('single-menu')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('meal-img')

        const bodyDiv = document.createElement('div')
        bodyDiv.classList.add('menu-content')

        const mealImg = document.createElement('img')
        mealImg.classList.add('image')
        mealImg.src = image

        const mealTitle = document.createElement('h4')
        mealTitle.classList.add('title')
        mealTitle.innerText = name

        const mealDescription = document.createElement('p')
        mealDescription.classList.add('para')
        mealDescription.innerText = description

        const mealPrice = document.createElement('span')
        mealPrice.classList.add('space')
        mealPrice.innerText = price

        const orderButton = document.createElement('button')
        orderButton.classList.add('btn')
        orderButton.innerHTML = `ORDER MEAL`

        //append body elements
        bodyDiv.appendChild(mealTitle)
        bodyDiv.appendChild(mealDescription)
        bodyDiv.appendChild(mealPrice)
        
          //append button
          bodyDiv.appendChild(orderButton)

          orderButton.addEventListener('click', () => {
              if (orderButton.textContent === 'ORDER MEAL') {
                orderButton.textContent = 'Meal Order';
              } else {
                orderButton.textContent = 'ORDER MEAL';
              }
            });
         
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    //load option1 
    const loadMeal1 = () => {
        fetch(meals_url)
            .then((response) => response.json())
            .then((data) => {
                const mealData = data[0]
                const name = mealData.mealName
                const description = mealData.description
                const image = mealData.image
                const price = mealData.price
                const mealElement = createMeal1(image, name, description, price)
                document.getElementById('option1').appendChild(mealElement)
            })
    }
loadMeal1()

    //load option2 
    const loadMeal2 = () => {
        fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[1]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal2(image, name, description, price)
            document.getElementById('option2').appendChild(mealElement)
        })
}
loadMeal2()

  //load option3 
  const loadMeal3 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[2]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal3(image, name, description, price)
            document.getElementById('option3').appendChild(mealElement)
        })
}
loadMeal3()

  //load option4 
  const loadMeal4 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[3]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal4(image, name, description, price)
            document.getElementById('option4').appendChild(mealElement)
        })
}
loadMeal4()

  //load option5 
  const loadMeal5 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[4]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal5(image, name, description, price)
            document.getElementById('option5').appendChild(mealElement)
        })
}
loadMeal5()

  //load option6 
  const loadMeal6 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[5]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal6(image, name, description, price)
            document.getElementById('option6').appendChild(mealElement)
        })
}
loadMeal6()

  //load option7 
  const loadMeal7 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[6]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal7(image, name, description, price)
            document.getElementById('option7').appendChild(mealElement)
        })
}
loadMeal7()

  //load option8 
  const loadMeal8 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[7]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal8(image, name, description, price)
            document.getElementById('option8').appendChild(mealElement)
        })
}
loadMeal8()

  //load option9 
  const loadMeal9 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[8]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createMeal9(image, name, description, price)
            document.getElementById('option9').appendChild(mealElement)
        })
}
loadMeal9()
})