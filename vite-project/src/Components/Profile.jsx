//props es igual a parametros
export default function Profile({name,age,profession}){
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>profession: {profession}</p>
        </div>
    )
}//exportamos para usar el profile en la app
