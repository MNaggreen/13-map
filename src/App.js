import { useState } from 'react'
import './App.css'
import Button from './сomponents/Button'
import Counter from './сomponents/Counter'

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Press me',
  'Click me again',
  'Press me!!!',
]
// создаем массив строк
// ниже, с помощью индекса мы будем обращаться к элементу и менять его значение
function App() {
  const [count, setCount] = useState(0)
  // стандартная деструктуризация при запуске setCount изменяемтся count
  // начальное значение count 0
  const incrementCount = () => {
    setCount(count + 1)
  }
  // прибавление в счетчику

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index}/>
      })}
    </div>
    // функция генерирования кнопок (как цикл по длине списка) создаст
    // ровно столько кнопок сколько элементов в списке и даст им имена согласно индексу
    // обязательно необходимо возвращать новый элемент массива
    // т.к. это функция
    // map возвращает массиов jsx элементов
    //  <Button onClick={incrementCount} text={text} />
    // тут мы присваиваем свойство-функцию которая увеличивает наш счетчик
    // передаем текст нашей кнопки через свойство
    // key необходим для того чтобы реакт знал какой индекс у каждого элемента
  )

}

export default App
