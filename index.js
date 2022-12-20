const meals_url = "http://localhost:3000/meals"
document.addEventListener('DOMContentLoaded', () => {

    //create option1
    const createBreakfast1 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast2 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast3 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast4 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast5 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast6 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast7 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast8 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    const createBreakfast9 = (image, name, description, price) => {

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
        bodyDiv.appendChild(orderButton)
        
       

        //append image
        imgDiv.appendChild(mealImg)

        menuDiv.appendChild(imgDiv)
        menuDiv.appendChild(bodyDiv)

        return menuDiv


    }

    //load option1 
    const loadBreakfast1 = () => {
        fetch(meals_url)
            .then((response) => response.json())
            .then((data) => {
                const mealData = data[0]
                const name = mealData.mealName
                const description = mealData.description
                const image = mealData.image
                const price = mealData.price
                const mealElement = createBreakfast1(image, name, description, price)
                document.getElementById('option1').appendChild(mealElement)
            })
    }
loadBreakfast1()

    //load option2 
    const loadBreakfast2 = () => {
        fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[1]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option2').appendChild(mealElement)
        })
}
loadBreakfast2()

  //load option3 
  const loadBreakfast3 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[2]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option3').appendChild(mealElement)
        })
}
loadBreakfast3()

  //load option4 
  const loadBreakfast4 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[3]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option4').appendChild(mealElement)
        })
}
loadBreakfast4()

  //load option5 
  const loadBreakfast5 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[4]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option5').appendChild(mealElement)
        })
}
loadBreakfast5()

  //load option6 
  const loadBreakfast6 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[5]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option6').appendChild(mealElement)
        })
}
loadBreakfast6()

  //load option7 
  const loadBreakfast7 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[6]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option7').appendChild(mealElement)
        })
}
loadBreakfast7()

  //load option8 
  const loadBreakfast8 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[7]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option8').appendChild(mealElement)
        })
}
loadBreakfast8()

  //load option9 
  const loadBreakfast9 = () => {
    fetch(meals_url)
        .then((response) => response.json())
        .then((data) => {
            const mealData = data[8]
            const name = mealData.mealName
            const description = mealData.description
            const image = mealData.image
            const price = mealData.price
            const mealElement = createBreakfast1(image, name, description, price)
            document.getElementById('option9').appendChild(mealElement)
        })
}
loadBreakfast9()
})