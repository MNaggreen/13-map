function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>
}
// Добавляем свойство-функцию из app чтобы заставить родительский компонент увеличивать

export default Button
