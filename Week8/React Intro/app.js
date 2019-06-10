const App = () => {
    return (
        <Animals />
    )
}

const Title = (p) => {
    return <h1>{p.title}</h1>
}

const Animals = () => {
    return (
        < div >
            <Title title="Cao" />

        </div >
    )
}


ReactDOM.render(<App />, document.querySelector('.root'));