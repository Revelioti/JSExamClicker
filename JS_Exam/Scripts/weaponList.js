/*
pricking
cutting
crushing
*/

class Weapon {
    Constructor() {
        damage, altDamage, type, staminaRequired, altStaminaRequired, imageName, defenseBonus, about, price, weight, recovery, canAttack = true
    }
    Attack() {
        canAttack = false;
        setTimeout(() => { canAttack = true; }, recovery * 1000);
        return damage;
    }
    AlternativeAttack() {
        canAttack = false;
        setTimeout(() => { canAttack = true; }, recovery * 2000);
        return altDamage;
    }
    WeaponChanged() {
        // применить бонусы к характеристикам
    }
}

export class Sword1handed extends Weapon {
    Constructor() {
        type = "cutting",
            damage = 3,
            altDamage = 5,
            staminaRequired = 0.5,
            altStaminaRequired = 1,
            defenseBonus = 2,
            price = 10,
            weight = 1.7,
            recovery = 1.2,
            imageName = "sw1",
            about = "Одноручный меч"
    }
}

export class Sword15handed extends Weapon {
    Constructor() {
        type = "cutting",
            damage = 5,
            altDamage = 5,
            staminaRequired = 0.7,
            altStaminaRequired = 1.5,
            defenseBonus = 4,
            price = 20,
            weight = 1.9,
            recovery = 1.5,
            imageName = "sw15",
            about = "Полутораручный меч"
    }
}