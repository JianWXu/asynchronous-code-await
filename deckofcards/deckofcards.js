const BASEURL = "https://deckofcardsapi.com/api/deck/new/draw/?count=";
const give_card_btn = $("#gimme-card");
const CARDBASEURL =
  "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
const card_img = $("#card-img");
let deck_id = "";

async function oneCard() {
  try {
    let res = await axios.get(`${BASEURL}1`);
    console.log(`${res.data.cards[0].value} of ${res.data.cards[0].suit}`);
  } catch (e) {
    console.log(e);
  }
}

oneCard();

async function twoCard() {
  try {
    let { data: c1 } = await axios.get(`${BASEURL}1`);
    console.log(`${c1.cards[0].value} of ${c1.cards[0].suit}`);
    let { data: c2 } = await axios.get(
      `https://deckofcardsapi.com/api/deck/${c1.deck_id}/draw/?count=1`
    );
    console.log(`${c2.cards[0].value} of ${c2.cards[0].suit}`);
  } catch (e) {
    console.log(e);
  }
}

twoCard();

$(document).ready(function () {
  axios.get(CARDBASEURL).then((deck) => {
    deck_id = deck.data.deck_id;
  });
});


function getCard() {
  $(give_card_btn).on("click", async function () {
    let res = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    );
    let card_image = res.data.cards[0].image;
    card_img.attr("src", card_image);
  });
}

getCard();
