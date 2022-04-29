function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    disableSpecialAttack() {
      return this.currentRound % 3 != 0;
    },
  },
  methods: {
    attackMonster() {
      this.currentRound++;
      const damage = getRandomValue(5, 12);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15);
      this.playerHealth -= damage;
    },
    specialAttackMonster() {
      this.currentRound++;
      const damage = getRandomValue(10, 25);
      this.monsterHealth -= damage;
      this.attackPlayer();
    },
  },
});

app.mount("#game");
