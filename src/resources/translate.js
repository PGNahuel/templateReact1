import ES from "./ES.json"

export default function t(key){
    return ES[key] ? ES[key] : key;
}