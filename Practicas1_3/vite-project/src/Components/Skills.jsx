export default function Skills({array,show}){
    return (
        show &&(
            <ul>
                {array.map(skill=>(
                    <li key={skill}> {skill}</li>
                ))}
            </ul>
        )
    )
}