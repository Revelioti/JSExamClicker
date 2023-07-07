"use strict";
// @ts-check
import { RandomLoot1, RandomLoot2, RandomLoot3, RandomLoot4, RandomLoot5, RandomLoot6, RandomLoot7, RandomLoot8, RandomLoot9, RandomLoot10 } from './lootList.js';
import { Sword1handed, Sword15handed } from './weaponList.js';
import { Bleba } from './enemyLIst.js';

let invOpen = false;
let eqOpen = false;
let upgOpen = false;

let equipmentList = new Array();
let possibleLoot = new Array();

let invController = document.getElementById('inventoryCont');
let inv = document.getElementById('inventory');
let eqController = document.getElementById('equipmentCont');
let eq = document.getElementById('equipment');
let upgController = document.getElementById('upgradeCont');
let upg = document.getElementById('upgrade');
let eqFlex = document.getElementById('equipmentFlex');
let HPBar = document.getElementById('health');
let StaminaBar = document.getElementById('stamina');
let MagicBar = document.getElementById('magic');

/** 
 * @var number
 * */
let PlayerDamage = 5;
localStorage.setItem("Damage", PlayerDamage);
localStorage.setItem('Money', 0)

let MaxHp = 0;
let HP = 0;
let Stamina = 100;
let Magic = 100;
let MagicRecovery;
let StaminaRecovery;
let Speed = 0;
let Lamp = 0;
let Shield = 0;
let Armour = 0;
let Helmet = 0;
let Wave = 0;
let Weight = 0;
let Money = 0;

let weapon = 0;

invController.addEventListener('click', () => {
    invOpen == false ? inv.style.left = "5px" : inv.style.left = "-200px";
    invOpen = !invOpen;
});

eqController.addEventListener('click', () => {
    eqOpen == false ? eq.style.right = "5px" : eq.style.right = "-200px";
    eqOpen = !eqOpen;
});

upgController.addEventListener('click', () => {
    upgOpen == false ? upg.style.left = "5px" : upg.style.left = "-700px";
    upgOpen = !upgOpen;
});

// document.body.addEventListener('keydown', function (event) {
//     if (event.code === 'ShiftLeft') {
//         new Bleba().Create();
//     }
// });

document.getElementById('UPD_Health').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        HP+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementById('UPD_Magic').addEventListener('click', () => {
    if(Magic>-10){
        Magic-=10;
        MagicRecovery+=10;
        Redraw();
    }
});

document.getElementsByClassName('Helmet')[0].addEventListener('click', () => {
    if(Helmet<11)Helmet++;
    MaxHp+=20;
    HP+=20;
    Redraw();
});

document.getElementsByClassName('Weapon')[0].addEventListener('click', () => {
    if(weapon<6)weapon++;
    PlayerDamage+=2;
    Redraw();
    localStorage.setItem("Damage", PlayerDamage);

});

document.getElementsByClassName('Shield')[0].addEventListener('click', () => {
    if(localStorage.getItem('Money')<100) return;
    if(Shield<4)Shield++;
    MaxHp+=20;
    HP+=20;
    localStorage.setItem(('Money'), 0);
    Redraw();
})

document.getElementsByClassName('Armour')[0].addEventListener('click', () => {
    if(Armour<5)Armour++;
    MaxHp+=20;
    HP+=20;
    Redraw();
})

function Save(){
    //localStorage.setItem('weapon', weapon);
    //localStorage.setItem('shield', Shield);
    //localStorage.setItem('armour', Armour);
    //localStorage.setItem('helmet', Helmet);
    //localStorage.setItem('PlayerDamage', PlayerDamage);
    //localStorage.setItem('MaxHp', MaxHp);
    //localStorage.setItem('HP', HP);
    //localStorage.setItem('Stamina', Stamina);
    //localStorage.setItem('Magic', Magic);
    //localStorage.setItem('StaminaRecovery', StaminaRecovery);
    //localStorage.setItem('Money', Money);
    //localStorage.setItem('Weight', Weight);
}

function Start() {
    LootInitializing();    
    /*
    if (//localStorage.getItem('weapon') === 'undefined' || //localStorage.getItem('weapon') === 'null') {
        weapon = 0;
        //localStorage.setItem('weapon', '0');
    }
    else weapon = //localStorage.getItem('weapon');

    if (//localStorage.getItem('shield') === 'undefined' || //localStorage.getItem('shield') === 'null') {
        Shield = 0;
        //localStorage.setItem('shield', '0');
    }
    else Shield = //localStorage.getItem('shield');

    if (//localStorage.getItem('armour') === 'undefined' || //localStorage.getItem('armour') === 'null') {
        Armour = 0;
        //localStorage.setItem('armour', '0');
    }
    else Armour = //localStorage.getItem('armour');

    if (//localStorage.getItem('helmet') === 'undefined' || //localStorage.getItem('helmet') === 'null') {
        Helmet = 0;
        //localStorage.setItem('helmet', '0');
    }
    else Helmet = //localStorage.getItem('helmet');

    if (//localStorage.getItem('PlayerDamage') === 'undefined' || //localStorage.getItem('PlayerDamage') === 'null') {
        PlayerDamage = 5;
        //localStorage.setItem('PlayerDamage', '5');
    }
    else PlayerDamage = //localStorage.getItem('PlayerDamage');

    if (//localStorage.getItem('MaxHp') === 'undefined' || //localStorage.getItem('MaxHp') === 'null') {
        MaxHp = 100;
        //localStorage.setItem('MaxHp', '100');
    }
    else MaxHp = //localStorage.getItem('MaxHp');

    if (//localStorage.getItem('HP')=== 'undefined' || //localStorage.getItem('HP') === 'null') {
        HP = 100;
        //localStorage.setItem('HP', '100');
    }
    else HP = //localStorage.getItem('HP');

    if (//localStorage.getItem('Stamina') === 'undefined' || //localStorage.getItem('Stamina') === 'null') {
        Stamina = 100;
        //localStorage.setItem('Stamina', '100');
    }
    else Stamina = //localStorage.getItem('Stamina');

    if (//localStorage.getItem('Magic') === 'undefined' || //localStorage.getItem('Magic') === 'null') {
        Magic = 100;
        //localStorage.setItem('Magic', '100');
    }
    else Magic = //localStorage.getItem('Magic');

    if (//localStorage.getItem('StaminaRecovery') === 'undefined' || //localStorage.getItem('StaminaRecovery') === 'null') {
        StaminaRecovery = 2;
        //localStorage.setItem('StaminaRecovery', '2');
    }
    else StaminaRecovery = //localStorage.getItem('StaminaRecovery');

    if (//localStorage.getItem('Speed') === 'undefined' || //localStorage.getItem('Speed') === 'null') {
        Speed = 1;
        //localStorage.setItem('Speed', '1');
    }
    else Speed = //localStorage.getItem('Speed');

    if (//localStorage.getItem('Lamp') === 'undefined' || //localStorage.getItem('Lamp') === 'null') {
        Lamp = 100;
        //localStorage.setItem('Lamp', '100');
    }
    else Lamp = //localStorage.getItem('Lamp');

    if (//localStorage.getItem('Money') === 'undefined' || //localStorage.getItem('Money') === 'null') {
        Money = 0;
        //localStorage.setItem('Money', '0');
    }
    else Money = //localStorage.getItem('Money');

    if (//localStorage.getItem('Weight') === 'undefined' || //localStorage.getItem('Weight') === 'null') {
        Weight = 0;
        //localStorage.setItem('Weight', '0');
    }
    else Weight = //localStorage.getItem('Weight');
    */
    //Save();
    Redraw();
}

function Death() {
    PlayerDamage = 0;
    //localStorage.setItem('PlayerDamage', '0');

    MaxHp = 0;
    //localStorage.setItem('MaxHp', '0');

    HP = 0;
    //localStorage.setItem('HP', '0');

    Stamina = 0;
    //localStorage.setItem('Stamina', '0');

    Magic = 0;
    //localStorage.setItem('Magic', '0');

    StaminaRecovery = 0;
    //localStorage.setItem('StaminaRecovery', '0');

    Speed = 0;
    //localStorage.setItem('Speed', '0');

    Lamp = 0;
    //localStorage.setItem('Lamp', '0');

    Shield = 0;
    //localStorage.setItem('Shield', '0');

    Armour = 0;
    //localStorage.setItem('Armour', '0');

    Helmet = 0;
    //localStorage.setItem('Helmet', '0');

    Wave = 0;
    //localStorage.setItem('Wave', '0');

    Money=0;
    //localStorage.setItem('Money', '0');

    Weight=0;
    //localStorage.setItem('Weight', '0');

    ////localStorage.clear();
}

export function RandomLoot() {
    let r = Math.floor(Math.random() * possibleLoot.length);
    equipmentList.push(new possibleLoot[r]);
    Redraw();
}

function LootInitializing() {
    possibleLoot.push(RandomLoot1);
    possibleLoot.push(RandomLoot2);
    possibleLoot.push(RandomLoot3);
    possibleLoot.push(RandomLoot4);
    possibleLoot.push(RandomLoot5);
    possibleLoot.push(RandomLoot6);
    possibleLoot.push(RandomLoot7);
    possibleLoot.push(RandomLoot8);
    possibleLoot.push(RandomLoot9);
    possibleLoot.push(RandomLoot10);
}

function Redraw() {
    //if(HP<1) Death();

    if(document.getElementsByClassName('entityContainer').length<1){
        for(let i = 0; i<Math.random()*10+1;i++){
            new Bleba().Create();
        }
    }

    let hpw = HP/MaxHp*100+'%';
    HPBar.style.width=hpw;

    let stw = Stamina+'%';
    HPBar.style.width=hpw;

    let Magic = magic+'%';
    HPBar.style.width=hpw;

    while (eqFlex.firstChild) {
        eqFlex.removeChild(eqFlex.lastChild);
    }

    let i = 0;
    equipmentList.forEach(element => {
        const newElement = document.createElement('div');
        newElement.classList.add('equipmentContainer');
        newElement.style.backgroundImage = `url(Images/` + element.GetImageName() + `.png)`;
        eqFlex.append(newElement);
    });
    
    document.getElementById('info').innerText='Деньги: '+ localStorage.getItem('Money');

    if (document.getElementsByClassName('Weapon')[0].children.length > 0) document.getElementsByClassName('Weapon')[0].lastChild.remove();
    if (document.getElementsByClassName('Helmet')[0].children.length > 0) document.getElementsByClassName('Helmet')[0].lastChild.remove();
    if (document.getElementsByClassName('Shield')[0].children.length > 0) document.getElementsByClassName('Shield')[0].lastChild.remove();
    if (document.getElementsByClassName('Armour')[0].children.length > 0) document.getElementsByClassName('Armour')[0].lastChild.remove();

    const wepImg = document.createElement('div');
            wepImg.style.width = '90px';
            wepImg.style.height = '150px';
            wepImg.style.backgroundSize = 'contain'

            
    switch (weapon) {
        case 0: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Axe.png)';
            break;
        }
        case 1: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Sw1.png)';
            break;
        }
        case 2: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Cr.png)';
            break;
        }
        case 3: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Sw2.png)';
            break;
        }
        case 4: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Hummer.png)';
            break;
        }
        case 5: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Sh.png)';
            break;
        }
        case 6: {            
            wepImg.style.backgroundImage = 'url(./Images/W_Sw3.png)';
            break;
        }
    }
    document.getElementsByClassName('Weapon')[0].append(wepImg);

    if(Helmet > 0){
        const helmImg = document.createElement('div');
        helmImg.style.width = '60px';
        helmImg.style.height = '60px';
        helmImg.style.backgroundSize = 'contain'

    switch (Helmet) {
        case 1: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M1.png)';
            break;
        }
        case 2: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M1St.png)';
            break;
        }
        case 3: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M1Ch.png)';
            break;
        }
        case 4: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M2.png)';
            break;
        }
        case 5: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M2St.png)';
            break;
        }
        case 6: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M2Ch.png)';
            break;
        }
        case 7: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M3.png)';
            break;
        }
        case 8: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M3St.png)';
            break;
        }
        case 9: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M3Ch.png)';
            break;
        }
        case 10: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M4.png)';
            break;
        }
        case 11: {            
            helmImg.style.backgroundImage = 'url(./Images/H_M5.png)';
            break;
        }
    }
    document.getElementsByClassName('Helmet')[0].append(helmImg);
    }

    if(Shield > 0){
        const shieldImg = document.createElement('div');
        shieldImg.style.width = '90px';
        shieldImg.style.height = '150px';
        shieldImg.style.backgroundSize = 'contain'

    switch (Shield) {
        case 1: {            
            shieldImg.style.backgroundImage = 'url(./Images/Sh_1.png)';
            break;
        }
        case 2: {            
            shieldImg.style.backgroundImage = 'url(./Images/Sh_2.png)';
            break;
        }
        case 3: {            
            shieldImg.style.backgroundImage = 'url(./Images/Sh_3.png)';
            break;
        }
        case 4: {            
            shieldImg.style.backgroundImage = 'url(./Images/Sh_4.png)';
            break;
        }
    }
    document.getElementsByClassName('Shield')[0].append(shieldImg);
    }

    if(Armour > 0){
        const armImg = document.createElement('div');
        armImg.style.width = '60px';
        armImg.style.height = '60px';
        armImg.style.backgroundSize = 'contain'

    switch (Armour) {
        case 1: {            
            armImg.style.backgroundImage = 'url(./Images/B_St.png)';
            break;
        }
        case 2: {            
            armImg.style.backgroundImage = 'url(./Images/B_Lth.png)';
            break;
        }
        case 3: {            
            armImg.style.backgroundImage = 'url(./Images/B_Ch.png)';
            break;
        }
        case 4: {            
            armImg.style.backgroundImage = 'url(./Images/B_Lam.png)';
            break;
        }
        case 5: {            
            armImg.style.backgroundImage = 'url(./Images/B_M2.png)';
            break;
        }
    }
    document.getElementsByClassName('Armour')[0].append(armImg);
    }

    Save();
}

Start();