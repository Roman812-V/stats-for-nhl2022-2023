import fetch from "node-fetch";

export function getAllStatsPrevDay() {

    fetch("https://nhl-score-api.herokuapp.com/api/scores/latest")
        .then(res => res.text())
        .then(json => {
            console.log(json);
            
        })
}
export default getAllStatsPrevDay;