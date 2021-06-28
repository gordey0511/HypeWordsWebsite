import React, {useEffect} from "react";

export const ListOfAuthor = (props) => {
    const array = props.array;
    console.log(array)
    const ListItems = array.map(({name}) =>
        <li>
            {/*{name}*/}
            dskjosdoji
        </li>
    );

    useEffect(() => {
        console.log(array)
    },[])

    return (
        <ul style={{color:"#000000"}}>
            {/*<li>sdhsdojids</li>*/}
            <ListItems />
        </ul>
    )
}