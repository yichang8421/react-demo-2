import {useEffect, useState} from "react";

const useList = () => {
    const [list, setList] = useState(null);

    useEffect(() => {
        ajax("/list").then(list => {
            setList(list);
        });
    }, []);

    return ({
        list: list,
        addItem: (name) => {
            setList([...list, {id: Math.random(), name: name}]);
        },
        deleteIndex: (index) => {
            setList(list.slice(0, index).concat(list.slice(index + 1)));
        }
    });
};

function ajax() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {id: "1", name: "Andy8421"},
                {id: "2", name: "Jackie"},
                {id: "3", name: "Eason"}
            ]);
        }, 2000);
    })
}

export default useList;