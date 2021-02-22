

import { useState, useEffect } from "react";

export default function UseDebounce(props){
    const {fn, wait} = props
    return (
      useEffect(() => {
      const timer = setTimeout(() => {
        fn();
      }, wait);
      return () => clearTimeout(timer);
    }), []);
    
}



// import { useState, useEffect } from "react";

// export default function UseDebounce(){
    
//     function debounce(fn,wait){
//         useEffect(() => {
//             const timer = setTimeout(() => {
//               fn();
//             }, wait);
//             return () => clearTimeout(timer);
//           }, []);
//     }
//     return debounce;
// }