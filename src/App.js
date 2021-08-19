import useList from "./hooks/useList";

function App() {
    const {list, deleteIndex} = useList();
    console.log(list);
    return (
        <div>
            <h1>List</h1>
            {list ? (
                <ol>
                    {
                        list.map((item, index) =>
                            <li key={item.id}>
                                {item.name}
                                <button onClick={() => {
                                    deleteIndex(index);
                                }}>x
                                </button>
                            </li>
                        )
                    }

                </ol>
            ) : ("加载中...")}
        </div>
    )
}

export default App;
