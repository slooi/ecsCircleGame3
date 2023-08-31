import HealthComponent from "./ecs/components/HealthComponent";
import Position2D from "./ecs/components/Position2DComponent";
import StuckComponent from "./ecs/components/StuckComponent";
import { Component, ECSManager } from "./packages/ecs";

const ecsManager = new ECSManager();

ecsManager.addEntity(new Position2D(10, 10));
ecsManager.addEntity(new StuckComponent(10));
ecsManager.addEntity(new HealthComponent(10), new StuckComponent(10));

class ZPosition extends Component {}

console.log(ecsManager.view(Position2D));
console.log(ecsManager.view(StuckComponent, ZPosition));
const a = ecsManager.view(StuckComponent, ZPosition, HealthComponent);
const b = ecsManager.view(Position2D, ZPosition);
console.log(a);
console.log(b);

a[0][1].get(StuckComponent);
a[0][1].get(HealthComponent);
a[2][1].set(ZPosition, new ZPosition());

b[0][1].get(Position2D);

// new Map().set();

/* COMPONENTS */

// class Component {
// 	readonly ___type = "Component";
// }
// class PositionComponent extends Component {}
// class PlayerComponent extends Component {}
// class Tag extends Component {}

// /* SafeMap */

// /* WORLD */

// class World {
// 	entities: number[];
// 	constructor(entities: number[]) {
// 		this.entities = entities;
// 	}
// 	view<T extends ComponentConstructor<Component>[]>(...componentConstructorArray: T) {
// 		return this.entities.map((entity) => [
// 			entity,
// 			new Map(componentConstructorArray.map((componentConstructor) => [componentConstructor, new componentConstructor()])),
// 		]);
// 	}
// }

// /* Types */

// class SafeMap<T1 extends ComponentConstructor<Component>, T2 extends Component> extends Map<T1, T2> {
// 	get<T1>(key: T1): InstanceType<T1> | undefined {
// 		return this.get(key);
// 	}
// }
// type ComponentConstructor<T extends Component> = new (...args: unknown[]) => T;

// tuple, number, mapA map<union,union>

/* WORLD */

// let world = new World([0, 1, 2, 3]);
// world.view(PositionComponent, PlayerComponent);
// Expected Return Type: [0, Map{ConPositionComponent:}]

/* 

class PositionComponent extends Component {
	private _x: number;
	private _y: number;
	constructor(x: number, y: number) {
		super();
		this._x = x;
		this._y = y;
	}

	public get y(): number {
		return this._y;
	}
	public get x(): number {
		return this._x;
	}
}
class Player extends Component {
	isPlayer: boolean;
	constructor(isPlayer: boolean) {
		super();
		this.isPlayer = isPlayer;
	}
}
class Tag extends Component {
	string: string;
	constructor(string: string) {
		super();
		this.string = string;
	}
}
*/

/* 
QUestion, how can it have just one type?
*/

// function myView(...){

// }
// const aaa:SafeComponentMap = new Map

// class Fruit{
// 	readonly ___type = "Fruit"
// }
// class Apple extends Fruit{}
// class Banana extends Fruit{}
// class Pear extends Fruit{}
