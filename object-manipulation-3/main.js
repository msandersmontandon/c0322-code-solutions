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
  setPlayers: function (playersList) { //
    var playersArray = [];
    for (var p = 0; p < playersList.length; p++) {
      playersArray.push({
        name: playersList[p],
        hand: [],
        points: 0
      });
    }
    this.players = playersArray;
  },
  setDeck: function () {
    var newDeck = [];
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
  setGame: function (listUpdate, sizeUpdate = 1) {
    this.setPlayers(listUpdate);
    this.setDeck();
    this.handSize = sizeUpdate;
    console.log('Game set between', _.join(listUpdate.splice(0, listUpdate.length - 1), ', ') + ' and', listUpdate.at(listUpdate.length - 1) + '!');
  },
  handValue: function (currentPlayer) {
    var totalValue = 0;
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
  deal: function (currentPlayer) {
    for (var h = 0; h < this.handSize; h++) {
      currentPlayer.hand.push(this.deck.shift());
    }
  },
  discard: function (currentPlayer) {
    for (var h = 0; h < currentPlayer.hand.length; h++) {
      currentPlayer.hand.pop(this.deck.shift());
    }
  },
  newRound: function () {
    for (var p = 0; p < this.players.length; p++) {
      this.discard(this.players[p]);
    }
    this.deck = _.shuffle(this.deck);
    for (p = 0; p < this.players.length; p++) {
      this.deal(this.players[p]);
      this.handValue(this.players[p]);
    }
  },
  endRound: function () {
    var highestScore = 0;
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

console.log(game);
