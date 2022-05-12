const form = document.querySelector('form').addEventListener('submit', preventMyDefault)
const listOfPeople = []



function preventMyDefault(event) {
    event.preventDefault()
    const nameInput = document.querySelector('#firstName')
    const birthdateInput = document.querySelector('#birthdate')
    let person = createPerson(nameInput.value, birthdateInput.value)
    listOfPeople.push(person)
    nameInput.value = ''
    birthdateInput.value = ''
   
}



function createPerson(nameInput, birthdateInput) {
    const newPerson = {
      name: nameInput,
      birthdate: birthdateInput,
      
  }
    const zodiac = getZodiacFromBirthdate(newPerson.birthdate)
    newPerson.zodiacSign = zodiac
    addPerson(newPerson)
    return newPerson
}



const addPerson = person => {
  const imageTag = document.createElement('img')
  const displayInput = document.createElement('li')
  const paragraphTag = document.createElement('p')
  const trashCan = document.createElement('button')
  

  const container = document.querySelector('#addPerson')

  imageTag.classList.add('zodiacImage')
 
 
  trashCan.innerText = 'Удалить'
  
 
  displayInput.classList.add("cardLi")
  displayInput.setAttribute('data-index', listOfPeople.length)

  trashCan.addEventListener('click', removePerson)
  

  imageTag.src = createHoroscopeImage(person.zodiacSign)
  paragraphTag.innerHTML = `<span>${person.name}</span> ${person.zodiacSign.toUpperCase()} ${createHoroscopesResults(person.zodiacSign)}`

  container.append(displayInput)
  displayInput.append(imageTag)
  displayInput.append(paragraphTag)
  displayInput.append(trashCan)
  
}


const createHoroscopeImage = zodiacSign => {
    const horoscopes = {
      Овен: 'images/aries2.jpg',
      Телец: 'images/Taurus2.jpg',
      Близнецы: 'images/Gemini2.jpg',
      Рак: 'images/Cancer2.jpg',
      Лев: 'images/Leo2.jpg',
      Дева: 'images/Virgo2.jpg',
      Весы: 'images/Libra2.jpg',
      Скорпион: 'images/Scorpio2.jpg',
      Стрелец: 'images/Sagittarius2.jpg',
      Козерог: 'images/Capricorn2.jpg',
      Водолей: 'images/Aquarius2.jpg',
      Рыбы: 'images/Pisces2.jpg',
  }
  return horoscopes[zodiacSign]
}




function removePerson(event) {
    let deletePerson = event.target
    deletePerson.parentElement.remove()

    listOfPeople.splice(deletePerson.parentElement.dataset.index, 1)
    console.log(
      'Не удаляй, пожалуйста, мне больно('
  )
}

function getZodiacFromBirthdate(birthdate) {
    const userBirthdate = new Date(`${birthdate}Z`)
    const userInputMonth = userBirthdate.getMonth() + 1 
    const userBirthDay = userBirthdate.getDate() + 1 
    const userBirthYear = userBirthdate.getFullYear() // for Leap Year Fix.

    if (
      (userInputMonth === 1 && userBirthDay >= 21 && userBirthDay <= 31) ||
      (userInputMonth === 2 && userBirthDay >= 1 && userBirthDay <= 19)
    ) {
      return "Водолей"
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 400 === 0
    ) {
      //Если год делимый на 400 он високосный
      return "Рыбы"
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 100 === 0
    ) {
      //Если делимый на 100 он не является високосным
      alert("Дата неверна, проверьте введенные данные!")
      /* PISCES [FEB 20-MAR 20] LEAP YEAR 3  */
    } else if (
      userInputMonth === 2 &&
     userBirthDay === 29 &&
      userBirthYear % 4 === 0
    ) {
      //Если год делимый на 4 - високосный
      return "Рыбы"

    } else if (
      (userInputMonth === 2 && userBirthDay >= 20 && userBirthDay <= 28) ||
      (userInputMonth === 3 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Рыбы"
      /* Aries [MAR 21-APR 20] */
    } else if (
      (userInputMonth === 3 && userBirthDay >= 21 && userBirthDay <= 31) ||
      (userInputMonth === 4 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Овен"
      /* TAURUS [APR 21-MAY 21] */
    } else if (
      (userInputMonth === 4 && userBirthDay >= 21 && userBirthDay <= 30) ||
      (userInputMonth === 5 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Телец"
      /* GEMINI [MAY 22-JUNE 21] */
    } else if (
      (userInputMonth === 5 && userBirthDay >= 22 && userBirthDay <= 31) ||
      (userInputMonth === 6 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Близнецы"
      /* CANCER [JUN 22-JULY 22] */
    } else if (
      (userInputMonth === 6 && userBirthDay >= 22 && userBirthDay <= 30) ||
      (userInputMonth === 7 && userBirthDay >= 1 && userBirthDay <= 22)
    ) {
      return "Рак"
      /* LEO [JUL 23-AUG 23] */
    } else if (
      (userInputMonth === 7 && userBirthDay >= 23 && userBirthDay <= 31) ||
      (userInputMonth === 8 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Лев"
      /* VIRGO [AUG 24 - SEP 23] */
    } else if (
      (userInputMonth === 8 && userBirthDay >= 24 && userBirthDay <= 31) ||
      (userInputMonth === 9 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Дева"
      /* Весы [SEP 24 - OCT 23] */
    } else if (
      (userInputMonth === 9 && userBirthDay >= 24 && userBirthDay <= 30) ||
      (userInputMonth === 10 && userBirthDay >= 1 && userBirthDay <= 23)
    ) {
      return "Весы"
      /* Скорпион [OCT 24 - NOV 22] */
    } else if (
      (userInputMonth === 10 && userBirthDay >= 24 && userBirthDay <= 31) ||
      (userInputMonth === 11 && userBirthDay >= 1 && userBirthDay <= 22)
    ) {
      return "Скорпион"
      /* Стрелец [NOV 23 - DEC 21]*/
    } else if (
      (userInputMonth === 11 && userBirthDay >= 23 && userBirthDay <= 30) ||
      (userInputMonth === 12 && userBirthDay >= 1 && userBirthDay <= 21)
    ) {
      return "Стрелец"
      /* CAPRICORN [DEC 22 - JAN 20] */
    } else if (
      (userInputMonth === 12 && userBirthDay >= 22 && userBirthDay <= 31) ||
      (userInputMonth === 1 && userBirthDay >= 1 && userBirthDay <= 20)
    ) {
      return "Козерог"
      /* Error Alert */
    } else {
      alert("Дата неверна, проверьте введенные данные!")
    }

    console.log("Гороскоп работает")
}

const createHoroscopesResults = zodiacSign => {
  const zodiacResults = {
    Водолей:
      "- прошлое неожиданно постучит в ваши двери, но сильно обольщаться не стоит — возможно, что иллюзии обернутся разочарованиям. Лучше посвятите время освоению новых граней своей деятельности, даже если кажется, что вы мастер. ",

    Рыбы:
      "- В 2023 году вас ждет столкновение с кармой: кто хорошо работал и не нарушал законов, получит шанс подняться очень высоко, поможет другим обрести свое место в жизни, возможность судить и поощрять окружающих. От того, насколько справедливо человек распорядиться этой силой, будет зависеть его последующая жизнь.",

    Овен:
      "- 2023 год дает возможность «прокачать» себя: к вам начнут прислушиваться авторитеты, а щедрые покровители убедятся в том, что ваши идеи заслуживают инвестиций. Только не слишком увлекайтесь желанием всех спасти — в первую очередь, позаботьтесь о себе.",

    Телец:
      "- если ранее вы часто меняли работу, то теперь ситуация, скорее всего, стабилизируется. Для этого необходимо освоить новые знания и инструменты: возможно, дело касается образования или получения документов, например, вида на жительство. Этим вы сможете заняться уже летом.",

    Близнецы:
      "- скоро вам предстоит закатать рукава. Гороскоп на 2023 год рекомендует: наслаждайтесь пока что на полную катушку, делайте все для осуществления давних желаний. Но это не мешает задумываться о чем-то основательном и долгосрочном. Стройте планы, заводите новые полезные привычки, найдите свой подход к питанию.",

    Рак:
      "- до июня ваши желания исполняются по одному щелчку. Деньги легко идут в руки, достаточно только быть шустрым или исполнительным, могут сработать и ваши внешние данные. Возможно, надо будет отправиться в путешествие или командировку. Но будьте осторожны: вы так и притягиваете к себе странных личностей.",

    Лев: 
      "- будьте внимательны к своему здоровью, реагируйте на сигналы тела незамедлительно. Не спешите менять работу, если нет уверенности в новом месте. Тем более что на старом, возможно, еще не все потеряно — вам могут предложить повышение и прибавку.",

    Дева:
      "- за осуществление своих желаний и реализацию планов отныне, увы, придется платить. Постарайтесь обойтись без кредитов и займов: долг может слишком быстро расти. Лучше поумерить аппетиты, научиться себя ограничивать, тогда результаты не заставят долго ждать..",

    Весы:
      "- с начала года и до июня удача на вашей стороне: незабываемые путешествия, крупные приобретения, выгодные предложения и всяческие «плюшки» от Фортуны. Важно не растратить результаты — приберегите на будущее. Амбиции не надо ограничивать. А вот жадности, приводящей к необдуманным рискам, избегайте. 2023 год идеален для обучения финансовой грамотности и привлечения инвестиций.",

    Скорпион:
      "- первая половина года пройдет под эгидой решения семейно-бытовых проблем и рабочих вопросов. Не жалейте денег на недвижимость, ремонт, отдых, здоровье и подарки близким, если не хотите услышать обвинения в скупости. Некоторые члены семьи могут отличиться в 2023 году безалаберным отношением к ресурсам и даже к своей жизни. Берите контроль за близкими в свои руки.",

    Стрелец:
      "- начало года обещает длительные путешествия, командировки. Любые бюрократические проблемы в 2023 году решаются легко, если вы не заигрываете с законом...",

    Козерог:
      "- до лета есть шанс получить новый постоянный источник дохода. Деньги будут, если все обещанное делить надвое и притормаживать своих оппонентов. Расставаться с прежней работой не стоит — риски обманутых ожиданий велики, а работодатели и клиенты сами бегать за вами не станут.",
  }
  return zodiacResults[zodiacSign]
}