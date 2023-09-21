// fav number

let BASEURL = "http://numbersapi.com";

const fav_number = $("#fav-number");
const fav_nums = $("#fav-nums");

async function oneFact() {
  try {
    let res = await axios.get(`${BASEURL}/5?json`);
    fav_number.text(res.data.text);
  } catch (e) {
    console.log(e);
  }
}

oneFact();


async function fiveFact() {
  try {
    let res = [];
    res.push(axios.get(`${BASEURL}/6,7,8,17`));
    let numbers = await Promise.all(res);
    for ([k, v] of Object.entries(numbers[0].data)) {
      fav_nums.append(`<li>${v}</li>`);
    }
  } catch (e) {
    console.log(e);
  }
}

fiveFact();