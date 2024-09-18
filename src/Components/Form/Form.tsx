interface Iform {
    color: number[] | false,
    changeColor: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const Form = ({ color, changeColor}: Iform) => {
  return (
    color ? 
    <div className="block" style={{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
      <form>
        <input name="name" type="text" onChange={changeColor}></input>
        <div className="color" style={{backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`}}>
                              rgb({`${color[0]}`},
                                  {`${color[1]}`},
                                  {`${color[2]}`})</div>
      </form>
    </div> : 
    <div className="block" style={{backgroundColor: '#ff0000'}}>
      <form>
        <input name="name" type="text" onChange={changeColor}></input>
        <div className="color" style={{backgroundColor: '#ff0000'}}>Ошибка!</div>
      </form>
    </div>
  )
}