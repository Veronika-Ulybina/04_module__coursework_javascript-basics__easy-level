'use strict';

(() => {
  const game = () => {
    const result = {
      player: 5,
      bot: 5,
    };

    return function start() {
      const player = prompt(`Введите число от 1 до ${result.player}`);

      if (player === null) {
        return;
      }

      const playerNum = Number.parseInt(player);

      if (playerNum < 1 || playerNum > result.player ||
        Number.isNaN(playerNum)) {
        return start();
      }

      const bot = Math.round(Math.random());
      bot ? alert(`Бот: Число нечётное?`) : alert(`Бот: Число чётное?`);

      if (playerNum % 2 === bot) {
        result.bot += playerNum;
        result.player -= playerNum;
      } else {
        result.player += playerNum;
        result.bot -= playerNum;
      }

      if (result.player <= 0) {
        alert('Бот выйграл');
        return;
      } else if (result.bot <= 0) {
        alert('Игрок выйграл');
        return;
      } else {
        alert(`
        Результат:
          Игрок: ${result.player}
          Бот: ${result.bot}`);
        return start();
      }
    };
  };

  window.marbles = game;
})();
