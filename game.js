// Function to deal cards dynamically
const cards = [
    // Spades
    { name: "SA", image: "images/cards/ace_of_spades.png" },
    { name: "SK", image: "images/cards/king_of_spades.png" },
    { name: "SQ", image: "images/cards/queen_of_spades.png" },
    { name: "SJ", image: "images/cards/jack_of_spades.png" },
    { name: "S10", image: "images/cards/10_of_spades.png" },
    { name: "S9", image: "images/cards/9_of_spades.png" },
    { name: "S8", image: "images/cards/8_of_spades.png" },
    { name: "S7", image: "images/cards/7_of_spades.png" },
    { name: "S6", image: "images/cards/6_of_spades.png" },
    { name: "S5", image: "images/cards/5_of_spades.png" },
    { name: "S4", image: "images/cards/4_of_spades.png" },
    { name: "S3", image: "images/cards/3_of_spades.png" },
    { name: "S2", image: "images/cards/2_of_spades.png" },

    // Hearts
    { name: "HA", image: "images/cards/ace_of_hearts.png" },
    { name: "HK", image: "images/cards/king_of_hearts.png" },
    { name: "HQ", image: "images/cards/queen_of_hearts.png" },
    { name: "HJ", image: "images/cards/jack_of_hearts.png" },
    { name: "H10", image: "images/cards/10_of_hearts.png" },
    { name: "H9", image: "images/cards/9_of_hearts.png" },
    { name: "H8", image: "images/cards/8_of_hearts.png" },
    { name: "H7", image: "images/cards/7_of_hearts.png" },
    { name: "H6", image: "images/cards/6_of_hearts.png" },
    { name: "H5", image: "images/cards/5_of_hearts.png" },
    { name: "H4", image: "images/cards/4_of_hearts.png" },
    { name: "H3", image: "images/cards/3_of_hearts.png" },
    { name: "H2", image: "images/cards/2_of_hearts.png" },

    // Diamonds
    { name: "DA", image: "images/cards/ace_of_diamonds.png" },
    { name: "DK", image: "images/cards/king_of_diamonds.png" },
    { name: "DQ", image: "images/cards/queen_of_diamonds.png" },
    { name: "DJ", image: "images/cards/jack_of_diamonds.png" },
    { name: "D10", image: "images/cards/10_of_diamonds.png" },
    { name: "D9", image: "images/cards/9_of_diamonds.png" },
    { name: "D8", image: "images/cards/8_of_diamonds.png" },
    { name: "D7", image: "images/cards/7_of_diamonds.png" },
    { name: "D6", image: "images/cards/6_of_diamonds.png" },
    { name: "D5", image: "images/cards/5_of_diamonds.png" },
    { name: "D4", image: "images/cards/4_of_diamonds.png" },
    { name: "D3", image: "images/cards/3_of_diamonds.png" },
    { name: "D2", image: "images/cards/2_of_diamonds.png" },

    // Clubs
    { name: "CA", image: "images/cards/ace_of_clubs.png" },
    { name: "CK", image: "images/cards/king_of_clubs.png" },
    { name: "CQ", image: "images/cards/queen_of_clubs.png" },
    { name: "CJ", image: "images/cards/jack_of_clubs.png" },
    { name: "C10", image: "images/cards/10_of_clubs.png" },
    { name: "C9", image: "images/cards/9_of_clubs.png" },
    { name: "C8", image: "images/cards/8_of_clubs.png" },
    { name: "C7", image: "images/cards/7_of_clubs.png" },
    { name: "C6", image: "images/cards/6_of_clubs.png" },
    { name: "C5", image: "images/cards/5_of_clubs.png" },
    { name: "C4", image: "images/cards/4_of_clubs.png" },
    { name: "C3", image: "images/cards/3_of_clubs.png" },
    { name: "C2", image: "images/cards/2_of_clubs.png" },
];


function dealCards() {
    // Shuffle the deck (simple randomization)
    const shuffledCards = cards.sort(() => Math.random() - 0.5);

    // Function to add the image to the card slot
    function setCardImage(cardSlotId, cardImageSrc) {
        const cardSlot = document.getElementById(cardSlotId);
        if (cardSlot) {
            const cardImage = document.createElement('img');
            cardImage.src = cardImageSrc;
            cardImage.alt = cardSlotId;
            cardImage.style.width = "100%";  // Adjust size of the image to fit the slot
            cardImage.style.height = "100%"; // Adjust size of the image to fit the slot
            cardSlot.innerHTML = '';  // Clear any existing content
            cardSlot.appendChild(cardImage);
        }
    }

    // Add cards to the "card pack" initially
    const cardPackSlot = document.querySelector('.card-pack');
    if (cardPackSlot) {
        const cardBackImage = "images/cards/card_back.jpg";  // Image of card back
        const packCardImage = document.createElement('img');
        packCardImage.src = cardBackImage;
        packCardImage.alt = "Card Pack";
        packCardImage.style.width = "100%";  
        packCardImage.style.height = "100%"; 
        cardPackSlot.innerHTML = '';  
        cardPackSlot.appendChild(packCardImage);
    }

    // Assign cards to player slots with images
    setCardImage('player-card-1', shuffledCards[0].image);
    setCardImage('player-card-2', shuffledCards[1].image);
    setCardImage('player-card-3', shuffledCards[2].image);
    setCardImage('player-card-4', shuffledCards[3].image);

    // Assign community cards (move from pack to community cards gradually)
    setTimeout(() => setCardImage('community-card-1', shuffledCards[4].image), 0);
    setTimeout(() => setCardImage('community-card-2', shuffledCards[5].image), 0);
    setTimeout(() => setCardImage('community-card-3', shuffledCards[6].image), 0);
    setTimeout(() => setCardImage('community-card-4', shuffledCards[7].image), 1000); // Show after 1 second
    setTimeout(() => setCardImage('community-card-5', shuffledCards[8].image), 2000); // Show after 2 seconds

    // After cards are dealt, dim the page and show results
    setTimeout(() => {
        dimPage();
        showResults(shuffledCards);
    }, 3000);  // After all cards are displayed
}

// Function to dim the page
function dimPage() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    overlay.style.zIndex = '9999';
    overlay.id = 'overlay';
    document.body.appendChild(overlay);
}

// Function to show results on the page
function showResults(shuffledCards) {
    const resultsDiv = document.createElement('div');
    resultsDiv.style.position = 'fixed';
    resultsDiv.style.top = '50%';
    resultsDiv.style.left = '50%';
    resultsDiv.style.transform = 'translate(-50%, -50%)';
    resultsDiv.style.backgroundColor = '#1f2937';
    resultsDiv.style.color = 'white';
    resultsDiv.style.padding = '20px';
    resultsDiv.style.borderRadius = '10px';
    resultsDiv.style.textAlign = 'center';
    resultsDiv.style.fontSize = '1rem';
    resultsDiv.style.zIndex = '10000';
    resultsDiv.style.width = '80%';
    resultsDiv.style.maxWidth = '800px';
    resultsDiv.style.overflowY = 'auto';

    const communityCards = shuffledCards.slice(4, 9);
    const player1Cards = shuffledCards.slice(0, 2);
    const player2Cards = shuffledCards.slice(2, 4);

    let communityCardsHTML = '';
    communityCards.forEach(card => {
        communityCardsHTML += `<img src="${card.image}" alt="${card.name}" style="width: 6%; margin: 5px;">`;
    });

    resultsDiv.innerHTML = `
        <h2>Round Complete!</h2>
        <p>
            <strong style="color: #ffcc00;">Player 1</strong> wins <strong style="color: #ffcc00;">15605 chips</strong> from the pot with a <strong style="color: rgb(255, 0, 0);">Straight</strong>!
        </p>


        <br><br/>
        <h3>Community Cards</h3>
        <div>${communityCardsHTML}</div>
        <br><br/>
        <h3>Results</h3>
        <table style="width: 80%; margin-top: 20px; border-collapse: collapse; margin-left: auto; margin-right: auto;">
            <thead>
                <tr>
                    <th style="padding: 5px;">Player</th>
                    <th style="padding: 5px; width: 30%;">Player Cards</th>
                    <th style="padding: 5px; width: 30%;">Best Hand</th>
                    <th style="padding: 5px;">Combinations</th>
                    <th style="padding: 5px;">Chips</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; text-align: center;">Player 1</td>
                    <td style="padding: 10px; text-align: center;">
                        <img src="${player1Cards[0].image}" alt="${player1Cards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${player1Cards[1].image}" alt="${player1Cards[1].name}" style="width: 22%; margin: 1px;">
                    </td>
                    <td style="padding: 10px; text-align: center;">
                        <img src="${player1Cards[0].image}" alt="${player1Cards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${player1Cards[1].image}" alt="${player1Cards[1].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[0].image}" alt="${communityCards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[1].image}" alt="${communityCards[1].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[2].image}" alt="${communityCards[2].name}" style="width: 22%; margin: 1px;">
                    </td>
                    <td style="padding: 10px; text-align: center;">Straight</td>
                    <td style="padding: 10px; text-align: center;">+15605</td>
                </tr>
                <tr>
                    <td style="padding: 10px; text-align: center;">Player 2</td>
                    <td style="padding: 10px; text-align: center;">
                        <img src="${player2Cards[0].image}" alt="${player2Cards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${player2Cards[1].image}" alt="${player2Cards[1].name}" style="width: 22%; margin: 1px;">
                    </td>
                    <td style="padding: 10px; text-align: center;">
                        <img src="${player2Cards[0].image}" alt="${player2Cards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${player2Cards[1].image}" alt="${player2Cards[1].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[0].image}" alt="${communityCards[0].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[1].image}" alt="${communityCards[1].name}" style="width: 22%; margin: 1px;">
                        <img src="${communityCards[2].image}" alt="${communityCards[2].name}" style="width: 22%; margin: 1px;">
                    </td>
                    <td style="padding: 10px; text-align: center;">Pair</td>
                    <td style="padding: 10px; text-align: center;">-15605</td>
                </tr>
            </tbody>
        </table>

        <button onclick="closeResults()" style="margin-top: 20px; padding: 10px 20px; background-color: #ef4444; color: white; border: none; border-radius: 5px;">Close</button>
    `;

    document.body.appendChild(resultsDiv);
}

// Function to close the results and remove the overlay
function closeResults() {
    const overlay = document.getElementById('overlay');
    const resultsDiv = document.querySelector('div[style*="position: fixed"]');

    if (overlay) overlay.remove();
    if (resultsDiv) resultsDiv.remove();

    // Redirect to poker2.html
    window.location.href = 'play.html';
}

// Call the function to deal cards when the page loads
window.onload = dealCards;
