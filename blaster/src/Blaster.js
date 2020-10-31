export default class Blaster {
    constructor(bullet, power, clip) {
        this.clip = clip;
        this.bullet = bullet;
        this.power = power;
    }

    shoot() {
        let outStr = "";
        for (let i = 0; i < this.power; i++) {
            if (this.clip > 0) {
                outStr += this.bullet;
                this.clip--;
            } else {
                break;
            }
        }
        return outStr;
    }
}

const peacemaker = new Blaster('<3', 6, 5);
console.log(peacemaker.shoot());