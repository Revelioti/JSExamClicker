let animCount = 0;

import { RandomLoot } from '../Scripts/mainFile.js';

function CreateAnim() {
    animCount++;

    const anim = `@keyframes anim_${animCount} {
        0% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
        20% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
        40% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
        60% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
        80% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
        100% { left: ${Math.floor(Math.random() * 100 % 70 + 10)}%; top: ${Math.floor(Math.random() * 100 % 50 + 5)}%; }
      }`;

    let styleSheet = document.createElement("style");
    styleSheet.innerText = anim;
    document.head.appendChild(styleSheet);


    return `anim_${animCount}`;
}

function EnemyDamage() {
    this.childNodes[0].setAttribute('value', this.childNodes[0].getAttribute('value') - localStorage.getItem('Damage'));

    // let UserAtack = new Audio('UserAtack.mp3');
    // UserAtack.volume = 0.080;
    // UserAtack.play();

if (this.childNodes[0].getAttribute('value') < 1) {
    RandomLoot();
    let x = localStorage.getItem('Money');
    x/=1;
    x+=20;
    localStorage.setItem('Money', x);
    document.getElementById('info').innerText='Деньги: '+ localStorage.getItem('Money');
    this.remove();

    if(document.getElementsByClassName('entityContainer').length<1){
        for(let i = 0; i<Math.random()*10+1;i++){
            new Bleba().Create();
        }
    }
}
}
    

function PlayerDamage() {

}

export class Bleba {
    Create() {
        let PosX = "top: " + Math.floor(Math.random() * 100 % 50) + "%;";
        let PosY = "right: " + Math.floor(Math.random() * 100 % 50) + "%;";

        let AnimData = "animation: " + Math.floor((Math.random() * 100 % 4) + 5) + "s " + CreateAnim() + " infinite alternate;";

        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('entityContainer');
        enemyContainer.style = PosX;
        enemyContainer.style = PosY;
        enemyContainer.style = AnimData;
        enemyContainer.addEventListener('click', EnemyDamage);
        enemyContainer.setAttribute('atCd', Math.floor(Math.random() * 10 % 8 + 2));
        enemyContainer.setAttribute('atDm', Math.floor(Math.random() * 100 % 10 + 20));
        document.body.append(enemyContainer);

        const prBar = document.createElement('progress');
        prBar.setAttribute('max', '100');
        prBar.setAttribute('value', '100');
        prBar.id = 'prBar';
        enemyContainer.append(prBar);

        const entity = document.createElement('div');
        entity.classList.add('Entity');
        entity.style.backgroundImage = 'url(Images/bleba.gif)';
        entity.style.backgroundSize = 'contain';

        let color = Math.floor(Math.random() * 1000 % 361);

        let colorString = 'hue-rotate(' + color + 'deg)';
        enemyContainer.setAttribute('color', color);
        entity.style.filter = colorString;
        enemyContainer.append(entity);
        entity.addEventListener('click', PlayerDamage);
    }
}

export class Goblin {
    Create() {
        let PosX = "top: " + Math.floor(Math.random() * 100 % 50) + "%;";
        let PosY = "right: " + Math.floor(Math.random() * 100 % 50) + "%;";

        let AnimData = "animation: " + Math.floor((Math.random() * 100 % 4) + 5) + "s " + CreateAnim() + " infinite alternate;";

        const enemyContainer = document.createElement('div');
        enemyContainer.classList.add('entityContainer');
        enemyContainer.style = PosX;
        enemyContainer.style = PosY;
        enemyContainer.style = AnimData;
        enemyContainer.addEventListener('click', EnemyDamage);
        enemyContainer.setAttribute('atCd', Math.floor(Math.random() * 10 % 8 + 2));
        enemyContainer.setAttribute('atDm', Math.floor(Math.random() * 100 % 10 + 20));
        document.body.append(enemyContainer);

        const prBar = document.createElement('progress');
        prBar.setAttribute('max', '100');
        prBar.setAttribute('value', '100');
        prBar.id = 'prBar';
        enemyContainer.append(prBar);

        const entity = document.createElement('div');
        entity.classList.add('Entity');
        entity.style.backgroundImage = 'url(en1.gif)';
        entity.style.backgroundSize = 'contain';

        let color = Math.floor(Math.random() * 1000 % 361);

        let colorString = 'hue-rotate(' + color + 'deg)';
        enemyContainer.setAttribute('color', color);
        entity.style.filter = colorString;
        enemyContainer.append(entity);
        entity.addEventListener('click', PlayerDamage);
    }
}