/**
 * 
 * @param {function} fn | event handler to be called when target's class matches given className
 * @param {string} className 
 */
export default function bindEventListenerToClass(fn, className) {
    return (e) => {
        if(e.target.classList.contains(className)) {
            fn(e);
        }
    }
}