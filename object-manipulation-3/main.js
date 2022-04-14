console.log('Lodash is loaded:', typeof _ !== 'undefined');
/* the folowing object will represent the game as a whole */
var game = {

  /* the properties wil include palyers, a deck, an the handsize for the game */
  players: [], // an array of palyers objects, each with a name, a hand of cards, and a total of points for the game;
  deck: [], // the deck of cards, shuffled at the beginning and after each round, from where the cards will be dealt;
  handSize: 1, // the hand size for the game, set to one as the default value;

  /** the methods for the game, including:
   * set methods to set the players, the deck and the game as a whole;
   * methods to deal and to discard a hand of cards to a giving player, as well as reading the value of a giving palyers hand;
   * methods to start a new round, as well for the end round, seing who won and if there's a need for a tiebreaker game;
   */
  setPlayers: function (playersList) { // a method that take an array of players name (strings) and create for each one an entry at the playersArray array
    var playersArray = []; // each entry is an onject with the name of the player, and empty hand and no points
    for (var p = 0; p < playersList.length; p++) { // in the end, it sets the playersArray as the players property of the current game
      playersArray.push({
        name: playersList[p],
        hand: [],
        points: 0
      });
    }
    this.players = playersArray;
  },
  setDeck: function () { // a method that populate a newDeck array with card objects, each with a rank and a suit.
    var newDeck = []; // then it shuffles the newDeck and sets it as the deck property for the current game
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
    for (var s = 0; s < suits.length; s++) {
      for (var r = 0; r < ranks.length; r++) {
        newDeck.push({
          rank: ranks[r],
          suit: suits[s]
        });
      }
    }
    this.deck = _.shuffle(newDeck);
  },
  setGame: function (listUpdate, sizeUpdate = 1) { // a method that will call the setPlayers and setDeck methods to set the players for the game,
    this.setPlayers(listUpdate); // based on the listUpdate argument; will set a brand new, shuffled deck; will set the hand size for the game based
    this.setDeck(); // on the sizeUpdate argument, and will even declare the players on the console.
    this.handSize = sizeUpdate;
    console.log('Game set between', _.join(listUpdate.splice(0, listUpdate.length - 1), ', ') + ' and', listUpdate.at(listUpdate.length - 1) + '!');
  },
  handValue: function (currentPlayer) { // a method that will update the points of the current player by adding the points of each individual card in
    var totalValue = 0; // their hand
    var value = 0;
    for (var h = 0; h < currentPlayer.hand.length; h++) {
      switch (currentPlayer.hand[h].rank) {
        case 'Ace':
          value = 11;
          break;
        case 'Jack':
        case 'Queen':
        case 'King':
          value = 10;
          break;
        default:
          value = currentPlayer.hand[h].rank;
      }
      totalValue += value;
    }
    currentPlayer.points += totalValue;
  },
  deal: function (currentPlayer) { // a method that will deal a hand to a player
    for (var h = 0; h < this.handSize; h++) {
      currentPlayer.hand.push(this.deck.shift());
    }
  },
  discard: function (currentPlayer) { // a method that will discard the hand of a player
    var currentHandSize = currentPlayer.hand.length;
    for (var h = 0; h < currentHandSize; h++) {
      this.deck.push(currentPlayer.hand.pop());
    }
  },
  newRound: function () { // a method that will discard any cards on the players hands, then shuffle the deck and deal new hands. Finally, it'll
    for (var p = 0; p < this.players.length; p++) { // update the point value of each player based on their current hand value
      this.discard(this.players[p]);
    }
    this.deck = _.shuffle(this.deck);
    for (p = 0; p < this.players.length; p++) {
      this.deal(this.players[p]);
      this.handValue(this.players[p]);
    }
  },
  endRound: function () { // a method that will compare each player points total with the highest score, calling the winner in the console unless
    var highestScore = 0; // there's a tie; in which case a new game will be set between the players tied in first place
    var champions = [];
    for (var p = 0; p < this.players.length; p++) {
      if (this.players[p].points > highestScore) {
        highestScore = this.players[p].points;
      }
    }
    for (p = 0; p < this.players.length; p++) {
      if (this.players[p].points === highestScore) {
        champions.push(this.players[p].name);
      }
      this.players.poins = 0;
    }
    if (champions.length === 1) {
      console.log('The winner is', champions[0] + '!');
    } else {
      console.log('It\'s a tie! Next game will be between', _.join(champions.splice(0, champions.length - 1), ', ') + ' and', champions.at[length - 1] + '!');
      this.setGame(champions, this.handSize);
    }
  }
};

console.log(game); // without calling the game at some point, the VSC wasn't letting me commit the code
