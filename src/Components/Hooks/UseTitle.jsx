
import { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{

        document.title = `${title} - Jungle Jamboree`
    },[title])
}


export default UseTitle;