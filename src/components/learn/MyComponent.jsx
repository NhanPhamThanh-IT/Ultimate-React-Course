import './styles.css'

const MyComponent = () => {
    const name = "NhanPham";
    const arr = [1, 2, 3, 4, 5];
    const obj = {
        name: "NhanPham",
        age: 25,
    }

    return (
        <>
            <div>{name}'s Component</div>
            <p className='child'>This is a simple component demonstrating React syntax.</p>
            <ul>
                {arr.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div>
                <p>Name: {obj.name}</p>
                <p>Age: {obj.age}</p>
            </div>
            <div>
                {JSON.stringify(obj, null, 2)}
            </div>
        </>
    )
}

export default MyComponent
